import React from 'react';
import Button from '../components/Button'
import { useAuth0, User } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { UserData } from 'auth0';



const Profile = () =>{

    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

    const profileAPI = async () => {
        try {
            const token = await getAccessTokenSilently();
            const response = await fetch(`http://localhost:3001/user/${user.sub.split('|')[1]}`, {
                headers: {
                    'authorization': `Bearer ${token}`,
                    'content-type': 'application/json'
                }
            });
            const user = await response.json();
            console.log(user)
        } catch (error) {
            console.log(error)
        }
    }

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
            <Button buttonClick={() => {navigate('/favourites')}} buttonText='Favourites' />
            <Button buttonClick={() => {navigate('/bookings')}} buttonText='Bookings' />
            <Button buttonClick={() => {navigate('/stats')}} buttonText='Stats' />
            <Button buttonClick={() => {navigate('/settings')}} buttonText='Settings' />
            </div>
            </div>
            </>
        : navigate('/')}
        </>
    )
}

export default Profile;