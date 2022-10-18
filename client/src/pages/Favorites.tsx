import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useGymClass } from '../hooks/useGymClass'
import { useNavigate } from 'react-router-dom';


export default function Favorites() {

  const { favoriteGymClassDetails, noFavorites } = useGymClass();
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  return (
    <>

      {isAuthenticated ?
        <>
          <div className='relative flex flex-col w-full items-center mt-20'>
            <h2 className='italic font-bold text-xl'>SAVED CLASSES</h2>
            {noFavorites ?
              <h2>No Favorites</h2>
              :
              <div className='flex flex-col items-center w-full'>
                {favoriteGymClassDetails.map(gymclass =>
                  <div key={gymclass.id}>
                    {gymclass.desc}
                  </div>)}
              </div>
            }
          </div>
        </>
        : navigate('/')}
    </>
  )
}