import React, { useState } from 'react'
import { Popup } from '../components/Popup'
import { useAuth0 } from '@auth0/auth0-react'

export const Settings = () => {

    const [openMessage, setOpenMessage] = useState<boolean>(false)
    const [nickname, setNickname] = useState('')
    const { user } = useAuth0()
    const userId = user?.sub

    const handleChange = (e: any) => {
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


    return (

        <div>
            <div className='mt-[20%] ml-[5%]'>
                <h1>Change Username</h1>
                <form className='mt-[10px]'
                    onSubmit={handleChange}
                >
                    <input className='border border-zinc-400 py-[4px] text-[11px] rounded w-[50%]' type='text' name='nickname' onChange={e => setNickname(e.target.value)} value={nickname} />
                    <button type='submit'
                        className='bg-[#6f87f5] text-white py-2 px-2 rounded text-[8px] ml-[5px]'
                    >Change</button>
                </form >
                <h1 className='mt-[10px]'>Change Profile Picture</h1>
                <button className='bg-[#6f87f5] text-white py-2 px-2 rounded text-[8px] mt-[5px]'
                    >Change</button>
            </div>
            {openMessage && <Popup setOpenMessage={setOpenMessage} />}
        </div>
    )
}
