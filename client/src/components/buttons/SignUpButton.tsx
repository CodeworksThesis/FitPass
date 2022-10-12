import React from 'react';
import { useAuth0 } from '@auth0/auth0-react'

export const SignUpButton = () => {

    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        <>
            {isAuthenticated ?
                '' : <button className='rounded-lg bg-white h-14 text-[black] font-bold  text-lg w-9/12' onClick={() => loginWithRedirect({
                    screen_hint: 'signup',
                })}>Sign Up</button>
            }
        </>
    )
}
