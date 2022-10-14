import React from 'react'
import { GymClass } from '../mocks/GymClassMock';
import GymClassItem from './GymClassItem';
import { Post } from '../../../globalTypes/Post';

export default function GymClassList() {
  return (
    <div className="flex flex-col w-[100%] h-[100%] gap-[1%] mt-[20%] md:mt-4">
        {GymClass.map((post:Post) => {
        return (
        <GymClassItem 
          key={post.id} 
          {...post}
        />
      )})}
    </div>
  )
}