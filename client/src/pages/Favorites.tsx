import React from 'react';
import { useGymClass } from '../hooks/useGymClass'
import { getFavorites } from '../utils/api.service';
import { useEffect, useState } from 'react';
import GymClassItem from '../components/GymClassItem'
import {Post} from '../../../globalTypes/Post'
import { useAuth0 } from "@auth0/auth0-react";
import {FavoritesType} from '../hooks/useGymClass'

// copy this
export default function Favorites() {

  const { favoriteGymClassDetails, userId} = useGymClass();


  const [favorites, setFavorites] = useState<FavoritesType>()



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
    <div>

      <div className='relative flex flex-col w-full items-center mt-20'>
        <h2 className='italic font-bold text-xl'>SAVED CLASSES</h2>
        <div className='flex flex-col items-center w-full'>
          {favoriteGymClassDetails?.map((item:Post)=>{
            return (
              <GymClassItem
              key={item.id}
              {...item}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}