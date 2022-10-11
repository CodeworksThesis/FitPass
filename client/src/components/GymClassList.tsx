import React from 'react'
import { GymClass } from '../mocks/GymClassMock';
import GymClassItem from './GymClassItem';

export default function GymClassList() {
  return (
    <div className="flex flex-col w-[100%] h-screen gap-[1%]">
        {GymClass.map((post,index) => <GymClassItem key={index} exerciseName={post.exerciseName} studioName={post.studioName} classDate={post.classDate} postPic={post.postPic} exerciseType={post.exerciseType}/>)}
    </div>
  )
}