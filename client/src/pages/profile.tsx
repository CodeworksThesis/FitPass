import React from 'react';
import Button from '../components/Button'

interface User {
    id: string,
    favourites: [],
    booked: [],
    profilePic:string,
}

function Profile(user: User){
    return(
        <div>
            <div className="relative block flex flex-col w-full items-center mt-6">
                <img src={user.profilePic} className="object-cover w-36 h-36 rounded-full custom-position object-cover border-4 border-[#6F87F5]"></img>
            </div>
            <p className='text-lg text-center font-bold pt-4 pb-4'>{user.id}</p>
            <div className='flex flex-col items-center h-72 justify-between'>
                <Button buttonText='Favourites' />
                <Button buttonText='Booking' />
                <Button buttonText='Stats' />
                <Button buttonText='Settings' />
            </div>
        </div>
    )
}

export default Profile;