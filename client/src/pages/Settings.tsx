import React, { useState } from 'react'
import { Popup } from '../components/Popup'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom';
import { useProfileUpdate } from '../hooks/useProfileUpdate';
// heroku endpoint does not work with Auth0 management API
// import { baseURL } from '../utils/api.service'

const BASE_URL = process.env.REACT_APP_LOCAL_SERVER

export const Settings = () => {

    const { setNickname, setProfilePic } = useProfileUpdate();

    const [openMessage, setOpenMessage] = useState<boolean>(false)
    const [popupText, setPopupText] = useState('')
    const [nicknameValue, setNicknameValue] = useState('')
    const [previewSource, setPreviewSource] = useState<string | ArrayBuffer | null>(null);
    const { user, isAuthenticated } = useAuth0()
    const navigate = useNavigate();
    const userId = user?.sub

    const handleUsernameChange = (e: React.FormEvent) => {
        e.preventDefault();
        setNickname(nicknameValue)

        const changeUsername = async (id: string) => {
            try {
                const response = await fetch(`${BASE_URL}change/username/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    }, 
                    body: JSON.stringify({ nickname: nicknameValue })
                })
                console.log(response)
                const data = await response.json()

                if (response.ok) {
                    setOpenMessage(true);
                    setPopupText('Your username has been changed!')
                }

            } catch (err) {
                setOpenMessage(true);
                setPopupText('Something went wrong. Try again later.')
            }
        }

        if (userId) {
            changeUsername(userId)
        }

        setNicknameValue('');
    }


    const handlePicChange = (e: any) => {
        const file = e.target.files[0]
        previewPicture(file)
    }

    const previewPicture = (file: any) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }
    }

    const handleSubmitPicture = (e: any) => {
        e.preventDefault();
        if (!previewSource) return;
        uploadImage(previewSource);
        setPreviewSource(null);
    }

    const uploadImage = async (base64EncodedImage: any) => {
        //submits to cloudinary
        try {
            const response = await fetch(`${BASE_URL}api/upload`, {
                method: 'POST',
                body: JSON.stringify({ data: base64EncodedImage }),
                headers: { 'Content-type': 'application/json' },
            });

            const data = await response.json()
            const picture = data.url

            //updates auth0 database
            const changeProfilePic = async (id: string) => {
                try {
                    const responseAuth = await fetch(`${BASE_URL}change/pic/${id}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ picture })
                    })
                    const dataAuth = await responseAuth.json()

                    if (response.ok || responseAuth.ok) {
                        setProfilePic(picture)
                        setOpenMessage(true);
                        setPopupText('Your picture has been changed!')
                    }
                }
                catch (e) {
                    console.log(e)
                    setOpenMessage(true);
                    setPopupText('Something went wrong. Try again later.')
                }
            }

            if (userId) {
                changeProfilePic(userId)
            }

        } catch (error) {
            setOpenMessage(true);
            setPopupText('The image must be less than 40MB in size.')
        }
    }

    return (

        <>
            {isAuthenticated ?
                <>
                    {openMessage &&
                        <Popup setOpenMessage={setOpenMessage} popupText={popupText} />
                    }
                    <div className='mt-[20%]' >
                        <h2 className='italic font-bold text-xl text-center mb-[20px]'>SETTINGS</h2>

                        <section className='flex flex-col justify-center items-center'>
                            <h1 className='text-sm'>Change Username</h1>
                            <form className='mt-[10px] flex flex-col'
                                onSubmit={handleUsernameChange}
                            >
                                <input className='border border-zinc-400 py-2 text-[11px] rounded w-72 text-center' type='text' name='nickname' onChange={e => setNicknameValue(e.target.value)} value={nicknameValue} />
                                <button type='submit'
                                    className='bg-[#6f87f5] text-white py-3 text-[10px] font-bold rounded w-72 mt-4'
                                >CONFIRM</button>
                            </form >
                            <h1 className='mt-[30px] text-sm'>Change Profile Picture</h1>
                            <form className='mt-[10px] flex flex-col' onSubmit={handleSubmitPicture}>
                                <div className="flex justify-center items-center w-full">
                                    <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-full h-32 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer">
                                        <div className="flex flex-col justify-center items-center pt-5 pb-6">
                                            <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">PNG or JPG</p>
                                        </div>
                                        <input className='border border-zinc-400 py-4 text-[11px] rounded w-72 hidden' id="dropzone-file" type='file' accept='image/png, image/jpg' name='image' onChange={e => handlePicChange(e)} />
                                    </label>
                                </div>
                                <button type='submit'
                                    className='bg-[#6f87f5] text-white py-3 text-[10px] font-bold rounded w-72 mt-4'
                                >CONFIRM</button>
                            </form >
                            {previewSource && (
                                <img className='h-3/6 w-6/12 rounded-full mt-[20px]' src={previewSource.toString()} />
                            )}
                        </section>
                    </div>
                </>
                : navigate('/')}
        </>
    )
}
