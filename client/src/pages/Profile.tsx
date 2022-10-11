import React from 'react';
import Button from '../components/Button'
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';


const Profile = () =>{

    const { user, isAuthenticated } = useAuth0();

    const navigate = useNavigate();

    return(
        <>
        { isAuthenticated ? 
            <>
            <div>
            <div className="relative block flex flex-col w-full items-center mt-6">
            <img src={user?.picture} className="object-cover w-36 h-36 rounded-full custom-position object-cover border-4 border-[#6F87F5]"></img>
            </div>
            <p className='text-lg text-center font-bold pt-4 pb-4'>{user?.name}</p>
            <div className='flex flex-col items-center h-72 justify-between'>
            <Button buttonText='Favourites' />
            <Button buttonText='Booking' />
            <Button buttonText='Stats' />
            <Button buttonText='Settings' />
            </div>
            </div>
            </>
        : navigate('/')}
        </>
    )
}

export default Profile;