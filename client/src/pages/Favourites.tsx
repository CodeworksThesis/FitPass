import React from 'react';
import GymClassItemSmall from '../components/GymClassItemSmall';
import { UserMock } from '../mocks/UserMock';

interface GymClassItemProps {
    exerciseName: string,
    studioName:string,
    classDate:Date,
    postPic:string,
    exerciseType:string,
    duration: number,
    desc: string,
}


function Favourites(){
    return(
        <div className='relative block flex flex-col w-full items-center'>
          <h2 className='italic font-bold text-xl'>SAVED CLASSES</h2>
            <div className='flex flex-col items-center w-full'>
                {UserMock.favourites.map((post,index) => <GymClassItemSmall key={index} exerciseName={post.exerciseName} studioName={post.studioName} classDate={post.classDate} postPic={post.postPic} exerciseType={post.exerciseType} duration={post.duration} desc={post.desc}/>)}
            </div>
        </div>
    )
}

export default Favourites;