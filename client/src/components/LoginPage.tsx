import React from 'react';
import { LoginButton } from './buttons/LoginButton';
import { LogoutButton } from './buttons/LogoutButton';
import { SignUpButton } from './buttons/SignUpButton';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

export const LoginPage = () => {

    const { getAccessTokenSilently, user } = useAuth0();


    const profileAPI = async () => {
        try {
            const token = await getAccessTokenSilently();
            const response = await fetch('http://localhost:3001/profile', {
                headers: {
                    'authorization': `Bearer ${token}`,
                    'content-type': 'application/json'
                }
            });
            const user = await response.json();
            console.log(user)
        } catch (error) {
            console.log(error)
        }
    }


    const homeAPI = () => {
        axios.get('http://localhost:3001/').then(response => console.log(response.data))
    }


    return (
        <>
            <nav>
                <ul>
                    <button onClick={profileAPI}>Profile</button>
                    <button onClick={homeAPI}>Home</button>
                </ul>
            </nav>
            <div>
                <h1>{user?.name}</h1>
                <article>
                    {user?.picture && <img src={user.picture} />}
                </article>
                <pre>{JSON.stringify(user, null, 2)}</pre>

            </div>

            <div>LoginPage</div>
            <div>
                <LoginButton />
                <SignUpButton />
                <LogoutButton />
            </div>
        </>
    )
}

