import React from 'react'
import GymClassList from '../components/GymClassList';
import Map from '../components/Map';
import { LogoutButton } from '../components/buttons/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import { LoginPage } from '../pages/LoginPage';
import { useLottie } from "lottie-react";
import loadingLottie from '../lotties/loading.json'
import {GymClass} from '../mocks/GymClassMock'


export default function Landing() {

  const { isAuthenticated, isLoading } = useAuth0();

  const options = {
    animationData: loadingLottie,
    loop: true
  };

  const { View } = useLottie(options);

  if (isLoading) {
    return (
      <div className='flex justify-center items-center h-screen flex-col'>
        {/* {View} */}
      </div>
    )
  }

  return (
    <div className="mx-auto">
      {isAuthenticated ? <div className="w-[90%] mx-auto"><><LogoutButton /> <div className='w-[100%] h-[15rem]'><Map gymClassList={GymClass} isHome={true}/></div> <GymClassList /></></div> : <LoginPage />}
    </div>
  )
}

