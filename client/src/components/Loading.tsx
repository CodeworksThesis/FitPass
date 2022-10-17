import React from 'react'
import Lottie from "lottie-react";
import loadingLottie from '../lotties/loading.json'

export const Loading = () => {
    return (
        <div className='flex justify-center items-center h-screen flex-col'>
            <Lottie animationData={loadingLottie} loop={true} style={{ height: 200 }} />
        </div>
    )
}
