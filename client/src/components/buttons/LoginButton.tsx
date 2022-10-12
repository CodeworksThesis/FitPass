import React from 'react';
import { useAuth0 } from '@auth0/auth0-react'

export const LoginButton = () => {

  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated ?
        '' : <button className='rounded-lg bg-white h-14 text-[#4A9DAC] font-bold  text-lg w-9/12' onClick={() => loginWithRedirect()}>Login</button>
      }
    </>
  )
}
