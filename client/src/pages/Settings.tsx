import React, { useState } from 'react'
import Button from '../components/Button'
import { Popup } from '../components/Popup'

export const Settings = () => {

    const [openMessage, setOpenMessage] = useState<boolean>(false)

    const handleClick = (e: any) => {
        e.preventDefault();
        setOpenMessage(true);
    }

    return (

        <div>
            <div className='mt-[20%] ml-[5%]'>
                <h1>Change Username</h1>
                <form className='mt-[10px]'
                    onSubmit={(e) => { handleClick(e) }}>
                    <input className='border border-zinc-400 py-[4px] text-[11px] rounded w-[50%]' type='text' />
                    <button
                        className='bg-[#6f87f5] text-white py-2 px-2 rounded text-[8px] ml-[5px]'
                        >Change</button>
                </form >
            </div>
                        {openMessage && <Popup setOpenMessage={setOpenMessage}/>}
        </div>
    )
}
