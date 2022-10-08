import React from 'react';
import { useAuth0 } from '@auth0/auth0-react'

export const SignUpButton = () => {

    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        <>
            {isAuthenticated ?
                '' : <button className='signup-button' onClick={() => loginWithRedirect({
                    screen_hint: 'signup',
                })}>Sign Up</button>
            }
        </>
    )
}
