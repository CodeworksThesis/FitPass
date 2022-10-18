import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useGymClass } from '../hooks/useGymClass'
import { getFavorites } from '../utils/api.service';
import { useEffect, useState } from 'react';
import GymClassItem from '../components/GymClassItem'
import {Post} from '../../../globalTypes/Post'
import {FavoritesType} from '../hooks/useGymClass'
import { useNavigate } from 'react-router-dom';

// copy this
export default function Favorites() {

  const { favoriteGymClassDetails, userId, noFavorites} = useGymClass();
  const { isAuthenticated, isLoading } = useAuth0();
  const [favorites, setFavorites] = useState<FavoritesType>()
  const navigate = useNavigate();

  useEffect(()=>{
    if(userId){
      console.log('getFavorites')
    getFavorites(userId)
    .then(data=>{console.log(data)
      setFavorites(data)})
      .catch(e => console.log(e))
    }  
  },[userId])
  

  return (
    <>
    {isAuthenticated? 
        <div className='relative flex flex-col w-full items-center mt-20'>
        <h2 className='italic font-bold text-xl'>SAVED CLASSES</h2>
      {noFavorites ? 
      <h1 className='mt-2'>No favorites</h1> :
        <div className='flex flex-col items-center w-[90%]'>
        {favoriteGymClassDetails?.map((item:Post)=>{
          return (
            <GymClassItem
            key={item.id}
            {...item}
            />
            )
          })}
          </div>
          }
          </div>
        : navigate('/')}
    </>
  )
}