import React from 'react';
import ReserveButton from './ReserveButton';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'
import { Post } from '../../../globalTypes/Post';
import { isReserved } from '../utils/LikeButton';
import { useGymClass } from '../hooks/useGymClass';

export default function ReserveBar(gymClass: Post) {
  const navigate = useNavigate()
    const { isAuthenticated } = useAuth0()
    const { bookedGymClassDetails } = useGymClass()

    const handleReserve = async () => {
        if (!isAuthenticated) navigate("/login")
        if (isReserved(bookedGymClassDetails, gymClass.id)) return
        
        navigate('/payment',
        {
            state: gymClass
        })
    }

  return (
    <footer className="flex justify-around py-3 border-t-[1px] shadow-[0_8px_10px_-7px_rgba(0,0,0,0.4)_inset]">
      <ReserveButton 
        buttonText='BACK' 
        backgroundColor='#fff' 
        textColor='#000' 
        hoverBackgroundColor="#269FAE" 
        hoverTextColor="#fff" 
        nav={() => navigate('/')} 
      />
      <ReserveButton 
        buttonText={isAuthenticated ? 'RESERVE' : 'LOGIN TO RESERVE'} 
        backgroundColor={isReserved(bookedGymClassDetails, gymClass.id) ? `#8a8a8a` :`#6F87F5`} 
        textColor='#FFF' 
        hoverBackgroundColor="#269FAE" 
        hoverTextColor="#fff" nav={handleReserve} 
        isReserved={isReserved(bookedGymClassDetails, gymClass.id)}
      />
    </footer>
  )
}