import React from 'react';
import { LoginButton } from '../components/buttons/LoginButton';
import { LogoutButton } from '../components/buttons/LogoutButton';
import { SignUpButton } from '../components/buttons/SignUpButton';

export const LoginPage = () => {
    return (
        <>
            <div>LoginPage</div>
            <div>
                <LoginButton />
                <SignUpButton />
                <LogoutButton />
            </div>
        </>
    )
}

