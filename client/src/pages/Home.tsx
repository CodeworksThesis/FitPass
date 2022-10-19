import React, { useEffect, useState } from 'react'
import GymClassList from '../components/GymClassList';
import Map from '../components/Map';
import { LogoutButton } from '../components/buttons/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import { LoginPage } from '../pages/LoginPage';
import { getGymClasses } from '../utils/api.service'
import { Loading } from '../components/Loading';
import PageTitle from '../components/PageTitle';
import { sortByDate, removeExpiredClasses } from '../utils/sortAndFilter';
import { Post } from '../../../globalTypes/Post';
import { useLocation } from '../hooks/useLocation';


export default function Landing() {
  const { location } = useLocation();
  const { latitude, longitude } = location;
  const { isAuthenticated, isLoading } = useAuth0();
  const [classes, setClasses] = useState<Post[]>([])

  useEffect(() => {
    getGymClasses(latitude, longitude)
      .then(data => setClasses(removeExpiredClasses(sortByDate(data))))
      .catch(error => console.log(error))
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="mx-auto mb-4">
      {isAuthenticated
        ? <div className="w-[90%] mx-auto">
          <>
            <LogoutButton />
            <div className='w-[100%] h-[15rem] mt-12'>
              <PageTitle title='FIND YOUR NEAREST CLASS' />
              <Map gymClassList={classes} isHome={true} />
            </div>
            <GymClassList classes={classes} />
          </>
        </div>
        : <LoginPage />}
    </div>
  )
}

