<<<<<<< HEAD
import React from "react"
import GymClassList from "../components/GymClassList"
import Map from "../components/Map"
import { LogoutButton } from "../components/buttons/LogoutButton"
import { useAuth0 } from "@auth0/auth0-react"
import { LoginPage } from "../pages/LoginPage"
import { GymClass } from "../mocks/GymClassMock"
import { Loading } from "../components/Loading"
=======
import React, { useEffect, useState } from 'react'
import GymClassList from '../components/GymClassList';
import Map from '../components/Map';
import { LogoutButton } from '../components/buttons/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import { LoginPage } from '../pages/LoginPage';
import { getGymClasses } from '../utils/api.service'
import { Loading } from '../components/Loading';
import PageTitle from '../components/PageTitle';

>>>>>>> development

export default function Landing() {
    const { isAuthenticated, isLoading } = useAuth0()

<<<<<<< HEAD
    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="mx-auto mb-4">
            {isAuthenticated ? (
                <div className="w-[90%] mx-auto">
                    <>
                        <LogoutButton />
                        <div className="w-[100%] h-[15rem] mt-12">
                            <Map gymClassList={GymClass} isHome={true} />
                        </div>
                        <GymClassList />
                    </>
                </div>
            ) : (
                <LoginPage />
            )}
        </div>
    )
=======
  const { isAuthenticated, isLoading } = useAuth0();

  const [classes, setClasses] = useState([])

  useEffect(() => {
    getGymClasses()
      .then(data => setClasses(data))
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
>>>>>>> development
}
