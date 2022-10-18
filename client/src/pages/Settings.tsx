import React, { useState } from 'react'
import { Popup } from '../components/Popup'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom';

export const Settings = () => {

    const [openMessage, setOpenMessage] = useState<boolean>(false)
    const [popupText, setPopupText] = useState('')
    const [nickname, setNickname] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const [previewSource, setPreviewSource] = useState<any | null>(null);
    const { user, isAuthenticated } = useAuth0()
    const navigate = useNavigate();
    const userId = user?.sub


    const handleUsernameChange = (e: any) => {
        e.preventDefault();

        const changeUsername = async (id: string) => {
            try {
                const response = await fetch(`http://localhost:3001/change/username/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ nickname })
                })
                const data = await response.json()
                return data;
            }
            catch (e) {
                console.log(e)
            }
        }

        if (userId) {
            changeUsername(userId)
        }

        setNickname('');
        setOpenMessage(true);
        setPopupText('Your username has been changed!')
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
            const response = await fetch('http://localhost:3001/api/upload', {
                method: 'POST',
                body: JSON.stringify({ data: base64EncodedImage }),
                headers: { 'Content-type': 'application/json' },
            });

            const data = await response.json()
            const picture = data.url

            //updates auth0 database
            const changeProfilePic = async (id: string) => {
                try {
                    const responseAuth = await fetch(`http://localhost:3001/change/pic/${id}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ picture })
                    })
                    const dataAuth = await responseAuth.json()
                    return dataAuth;
                }
                catch (e) {
                    console.log(e)
                }
            }

            if (userId) {
                changeProfilePic(userId)
            }

        } catch (error) {
            console.error(error)
        }
        setOpenMessage(true);
        setPopupText('Your picture has been changed!')
    }

    return (

        <>
        {isAuthenticated ?
        <>
            <div className='mt-[20%]' >
                <h2 className='italic font-bold text-xl text-center mb-[20px]'>SETTINGS</h2>

                <section className='flex flex-col justify-center items-center'>
                    <h1 className='text-sm'>Change Username</h1>
                    <form className='mt-[10px] flex flex-col'
                        onSubmit={handleUsernameChange}
                        >
                        <input className='border border-zinc-400 py-2 text-[11px] rounded w-72 text-center' type='text' name='nickname' onChange={e => setNickname(e.target.value)} value={nickname} />
                        <button type='submit'
                            className='bg-[#6f87f5] text-white py-3 text-[10px] font-bold rounded w-72 mt-4'
                            >CONFIRM</button>
                    </form >
                    <h1 className='mt-[30px] text-sm'>Change Profile Picture</h1>
                    {/* <button className='bg-[#6f87f5] text-white py-2 px-2 rounded text-[8px] mt-[5px]'
                    >Change</button> */}
                    <form className='mt-[10px] flex flex-col' onSubmit={handleSubmitPicture}>
                        <div className="flex justify-center items-center w-full">
                            <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-full h-32 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer">
                                <div className="flex flex-col justify-center items-center pt-5 pb-6">
                                    <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">PNG or JPG</p>
                                </div>
                                <input className='border border-zinc-400 py-4 text-[11px] rounded w-72 hidden' id="dropzone-file" type='file' name='image' onChange={handlePicChange} value={profilePic} />
                            </label>
                        </div>
                        {/* <input className='border border-zinc-400 py-4 text-[11px] rounded w-72 hidden' id="dropzone-file" type='file' name='image' onChange={handlePicChange} value={profilePic} /> */}
                        <button type='submit'
                            className='bg-[#6f87f5] text-white py-3 text-[10px] font-bold rounded w-72 mt-4'
                            >CONFIRM</button>
                    </form >
                    {previewSource && (
                        <img className='h-3/6 w-6/12 rounded-full mt-[20px]' src={previewSource} />
                        )}
                </section>

            </div>
            {openMessage && <Popup setOpenMessage={setOpenMessage} popupText={popupText} />}
            </>
        : navigate('/')}
        </>
    )
}
