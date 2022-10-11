import React from 'react';
import GymClassItemSmall from '../components/GymClassItemSmall';
//import { GymClass } from '../mocks/GymClassMock';
import {useEffect, useState} from 'react';

interface GymClassItemProps {
    exerciseName: string,
    studioName:string,
    classDate:Date,
    postPic:string,
    exerciseType:string,
}

interface User {
    id: string,
    favourites: GymClassItemProps[],
    booked: GymClassItemProps[],
    profilePic:string,
}


function Stats(user: User){
    

    console.log(user.favourites)
    return(
        <div className='relative block flex flex-col w-full items-center'>
            <h2 className='italic font-bold text-xl'>YOUR STATS</h2>
            <p>This week</p>
            <div className='flex fles-row justify-centers h-24 w-full max-w-lg pl-2 pr-2'>
                <div className='flex flex-col justify-center w-1/2 border border-[#4F4F4F] rounded-lg mr-2'>
                    <p className='text-center'>8</p>
                    <p className='text-center'>Classes Attended</p>
                </div>
                <div className='flex flex-col justify-center w-1/2 border border-[#4F4F4F] rounded-lg'>
                    <p className='text-center'>3H 30M</p>
                    <p className='text-center'>Workout time</p>
                </div>
            </div>
            <h2 className='italic font-bold text-xl'>HISTORY</h2>
            <div className='flex flex-col items-center w-full'>
                {/* {user.favourites.map((post, index) => )} */}
                {user.favourites.map((post,index) => <GymClassItemSmall key={index} exerciseName={post.exerciseName} studioName={post.studioName} classDate={post.classDate} postPic={post.postPic} exerciseType={post.exerciseType}/>)}
            </div>
        </div>
    )
}

export default Stats;