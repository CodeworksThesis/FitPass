import React, { useState, useEffect } from 'react'
import { Popup } from '../components/Popup'
import { useAuth0 } from '@auth0/auth0-react'

export const Settings = () => {

    const [openMessage, setOpenMessage] = useState<boolean>(false)
    const [nickname, setNickname] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const [selectedImage, setSelectedImage] = useState('')
    const [previewSource, setPreviewSource] = useState<any | null>(null);
    const { user } = useAuth0()
    const userId = user?.sub


    const handleUsernameChange = (e: any) => {
        console.log(nickname)
        e.preventDefault();
        console.log('this is userId', userId)

        const changeUsername = async (id: string) => {

            try {
                const response = await fetch(`http://localhost:3001/change/username/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ nickname })
                })
                console.log('this is response', response)
                const data = await response.json()
                console.log('this is data', data)
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
    }

    // const changeProfilePic = async (id: string) => {

    //     try {
    //         const response = await fetch(`http://localhost:3001/change/pic/${id}`, {
    //             method: 'PATCH',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({ picture })
    //         })
    //         console.log('this is pic response', response)
    //         const data = await response.json()
    //         return data;
    //     }
    //     catch (e) {
    //         console.log(e)
    //     }
    // }

    const handlePicChange = (e: any) =>{
        const file = e.target.files[0]
        previewFile(file)
    }

    const previewFile = (file: any) =>{
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }


    }



    const handleSubmitPicture = (e: any) => {
        e.preventDefault();
        if(!selectedImage) return;
    }

    return (

        <div>
            <div className='mt-[20%] ml-[5%]'>
                <h2 className='italic font-bold text-xl text-center mb-[20px]'>SETTINGS</h2>
                <h1>Change Username</h1>
                <form className='mt-[10px]'
                    onSubmit={handleUsernameChange}
                >
                    <input className='border border-zinc-400 py-[4px] text-[11px] rounded w-[80%]' type='text' name='nickname' onChange={e => setNickname(e.target.value)} value={nickname} />
                    <button type='submit'
                        className='bg-[#6f87f5] text-white py-2 px-2 rounded text-[8px] ml-[5px]'
                    >Change</button>
                </form >
                <h1 className='mt-[10px]'>Change Profile Picture</h1>
                {/* <button className='bg-[#6f87f5] text-white py-2 px-2 rounded text-[8px] mt-[5px]'
                    >Change</button> */}
                <form className='mt-[10px]' onSubmit={handleSubmitPicture}>
                    <input className='border border-zinc-400 py-[4px] text-[11px] rounded w-[80%]' type='file' name='pic' onChange={handlePicChange} value={profilePic} />
                    <button type='submit'
                        className='bg-[#6f87f5] text-white py-2 px-2 rounded text-[8px] ml-[5px]'
                    >Change</button>
                </form >
                {previewSource && (
                    <img className='h-[300px] w-[300px]' src={previewSource}/>
                )}

            </div>
            {openMessage && <Popup setOpenMessage={setOpenMessage} />}
        </div>
    )
}
