import React from 'react';
import GymClassItemSmall from '../components/GymClassItemSmall';
import {useEffect, useState} from 'react';
import { calculateWorkoutTime } from '../utils/workoutTime';

interface GymClassItemProps {
    exerciseName: string,
    studioName:string,
    classDate:Date,
    postPic:string,
    exerciseType:string,
    duration: number,
    desc: string,
}

interface User {
    id: string,
    favourites: GymClassItemProps[],
    booked: GymClassItemProps[],
    profilePic:string,
}


function UserStats(user: User){
    return(
        <div className='relative block flex flex-col w-full items-center'>
            <h2 className='italic font-bold text-xl'>YOUR STATS</h2>
            <p className='text-xs mb-6'>This week</p>
            <div className='flex fles-row justify-centers h-24 w-full max-w-lg pl-2 pr-2'>
                <div className='flex flex-col justify-center w-1/2 border border-[#4F4F4F] rounded-lg mr-2 shadow shadow-[#4F4F4F]'>
                    <p className='text-center font-bold'>{user.booked.length}</p>
                    <p className='text-center'>Classes Attended</p>
                </div>
                <div className='flex flex-col justify-center w-1/2 border border-[#4F4F4F] rounded-lg shadow shadow-[#4F4F4F]'>
                    <p className='text-center font-bold'>{calculateWorkoutTime(user.booked)}</p>
                    <p className='text-center'>Workout time</p>
                </div>
            </div>
            <h2 className='italic font-bold text-xl mt-6'>HISTORY</h2>
            <div className='flex flex-col items-center w-full'>
                {user.booked.map((post,index) => <GymClassItemSmall key={index} exerciseName={post.exerciseName} studioName={post.studioName} classDate={post.classDate} postPic={post.postPic} exerciseType={post.exerciseType} duration={post.duration} desc={post.desc}/>)}
            </div>
        </div>
    )
}

export default UserStats;