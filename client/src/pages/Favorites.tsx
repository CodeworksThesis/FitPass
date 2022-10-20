import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useGymClass } from '../hooks/useGymClass'
import { getFavorites } from '../utils/api.service';
import { useEffect} from 'react';
import GymClassItem from '../components/GymClassItem'
import {Post} from '../../../globalTypes/Post'
import { useNavigate } from 'react-router-dom';
import { sortByDate, removeExpiredClasses } from '../utils/sortAndFilter';
import PageTitle from '../components/PageTitle';

// copy this
export default function Favorites() {

  const { favoriteGymClassDetails, userId, noFavorites, setFavorites} = useGymClass();
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(()=>{
    if(userId){
    getFavorites(userId)
    .then(data=>{setFavorites(data)})
      .catch(e => console.log(e))
    }  
  },[userId])
  

  return (
    <>
    {isAuthenticated
      ? <main className='relative flex flex-col w-full items-center mt-20'>
          <PageTitle title="SAVED CLASSES"/>
            {noFavorites 
            ? <h1 className='mt-2'>No favorites</h1> 
            : (<div className='flex flex-col items-center w-[90%]'>
              {sortByDate(removeExpiredClasses(favoriteGymClassDetails)).map((item:Post)=>{
                return (
                  <GymClassItem
                  key={item.id}
                  {...item}
                  />
                  )
                })}
                </div>)}
          </main>
      : navigate('/')}
    </>
  )
}