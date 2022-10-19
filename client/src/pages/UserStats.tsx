import React from 'react';
import GymClassItemSmall from '../components/GymClassItemSmall';
import { calculateWorkoutTime } from '../utils/workoutTime';
import { useGymClass } from '../hooks/useGymClass';
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom';


function UserStats(){

    const { bookedGymClassDetails } = useGymClass();
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth0()
    
    const classes = bookedGymClassDetails.filter((item) => {
        return new Date(item.classDate) < new Date()
    }).sort((a, b) => { return new Date(b.classDate).getTime() - new Date(a.classDate).getTime() }) 

    return(
        <>
        {isAuthenticated ? 
        <div className='relative flex flex-col w-full items-center mt-20'>
            <h2 className='italic font-bold text-xl'>YOUR STATS</h2>
            <p className='text-xs mb-6'>This week</p>
            <div className='flex fles-row justify-centers h-24 w-full max-w-lg pl-2 pr-2'>
                <div className='flex flex-col justify-center w-1/2 border border-[#808080] rounded-lg mr-2 shadow shadow-[#808080]'>
                    <p className='text-center font-bold'>{classes.length}</p>
                    <p className='text-center'>Classes Attended</p>
                </div>
                <div className='flex flex-col justify-center w-1/2 border border-[#808080] rounded-lg shadow shadow-[#808080]'>
                    <p className='text-center font-bold'>{calculateWorkoutTime(classes)}</p>
                    <p className='text-center'>Workout time</p>
                </div>
            </div>
            <h2 className='italic font-bold text-xl mt-6'>HISTORY</h2>
            <div className='flex flex-col items-center w-full'>
                {classes.map(post => <GymClassItemSmall key={post.id} {...post}/>)}
            </div>
        </div>
        : navigate('/')}
        </>
    )
}

export default UserStats;