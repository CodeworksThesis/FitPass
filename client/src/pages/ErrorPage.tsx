import React from 'react'
import { useLottie } from "lottie-react";
import errorLottie from '../lotties/error-msg.json'

export const ErrorPage = () => {

    const options = {
        animationData: errorLottie,
        loop: true
      };

    const { View } = useLottie(options)

    return (
        <div className='flex justify-center items-center h-screen flex-col'>
            <h1 className='text-7xl text-center font-bold pt-4 pb-4'>Oops!</h1>
            <h2 className='text-lg text-center font-bold pt-4 pb-4 text-gray-600'>We can not seem to find the page you are looking for.</h2>
            {View}
            <h1 className='text-lg text-center font-bold pt-4 pb-4 text-gray-600'>Error code: 404</h1>




        </div>
    )
}