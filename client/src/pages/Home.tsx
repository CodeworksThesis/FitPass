import React from 'react'
import GymClassList from '../components/GymClassList';
import Map from '../components/Map';
import { LogoutButton } from '../components/buttons/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import { LoginPage } from './LoginPage';

export default function Landing() {

  const { isAuthenticated, isLoading } = useAuth0();

  if(isLoading){
    return <h1>LOADING...</h1>
    }

  return (
    <div className="mx-auto">
      {isAuthenticated ? <div className="w-[90%] mx-auto"><><LogoutButton /> <Map /><GymClassList /></></div> : <LoginPage /> }
    </div>
  )
}

