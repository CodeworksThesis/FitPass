import React from 'react'
import GymClassList from '../components/GymClassList';
import Map from '../components/Map';
import { LogoutButton } from '../components/buttons/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import { LoginPage } from './LoginPage';
import Lottie from 'react-lottie'
import loadingLottie from '../lotties/loading.json'


export default function Landing() {

  const { isAuthenticated, isLoading } = useAuth0();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  if (isLoading) {
    return (
      <div className='flex justify-center items-center h-screen flex-col'>
        <Lottie options={defaultOptions}
          height={400}
          width={400}
        />
      </div>
    )
  }

  return (
    <div className="mx-auto">
      {isAuthenticated ? <div className="w-[90%] mx-auto"><><LogoutButton /> <Map /><GymClassList /></></div> : <LoginPage />}
    </div>
  )
}

