import React from 'react';
import Button from '../components/Button';
import UserStats from './stats';
import { UserMock } from '../mocks/UserMock';
import { Route, Routes, Link } from 'react-router-dom';


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
                <img src={user.profilePic} className="object-cover w-36 h-36 rounded-full custom-position border-4 border-[#6F87F5]"></img>
            </div>
            <p className='text-lg text-center font-bold pt-4 pb-4'>{user.id}</p>
            <div className='flex flex-col items-center h-72 justify-between'>
                <Link to="" className='w-full flex justify-center'><Button buttonText='Favourites' /></Link>
                <Link to="" className='w-full flex justify-center'><Button buttonText='Booking' /></Link>
                <Link to="/stats" className='w-full flex justify-center'><Button buttonText='Stats' /></Link>
                <Link to="" className='w-full flex justify-center'><Button buttonText='Settings' /></Link>
            </div>
            {/* <div className='mt-40'>
                <UserStats id={UserMock.id} favourites={UserMock.favourites} booked={UserMock.booked} profilePic={UserMock.profilePic} />
            </div> */}
        </div>
    )
}

export default Profile;