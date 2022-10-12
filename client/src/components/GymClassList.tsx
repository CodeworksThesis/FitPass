import React from 'react'
import { GymClass } from '../mocks/GymClassMock';
import GymClassItem from './GymClassItem';
import { Post } from '../../../globalTypes/Post';

export default function GymClassList() {
  return (
    <div className="flex flex-col w-[100%] h-[100%] gap-[1%] mt-[1%] md:mt-4">
        {GymClass.map((post:Post) => {
        return (
        <GymClassItem 
          key={post.id} 
          {...post}
          // id ={post.id}
          // exerciseName={post.exerciseName} 
          // studioName={post.studioName} 
          // classDate={post.classDate} 
          // postPic={post.postPic} 
          // exerciseType={post.exerciseType}
        />
      )})}
    </div>
  )
}