import React from 'react';
import { LoginButton } from '../components/buttons/LoginButton';
import { SignUpButton } from '../components/buttons/SignUpButton';

export const LoginPage = () => {

    return (
        <main className='relative flex flex-col m-0 bg-fitpassGreen h-screen w-screen place-content-center space-y-20'>

            <h1 className='text-white font-extrabold italic text-7xl text-center'>FitPass</h1>
            <section className='flex flex-col items-center space-y-6'>
                <LoginButton />
                <SignUpButton />
            </section>

        </main>
    )
}

