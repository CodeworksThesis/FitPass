import * as React from 'react';
import { formatDate, formatStartEndTime } from '../utils/time';
interface GymClassItemProps {
    exerciseName: string,
    studioName:string,
    classDate:Date,
    postPic:string,
    exerciseType:string,
    duration:number,
    desc:string,
}


export default function GymClassItemSmall ({exerciseName, studioName, classDate, postPic, exerciseType, duration, desc}: GymClassItemProps) {
  return (
    <div className="rounded-2xl flex w-[95%] overflow-hidden mt-[3%] h-[8rem] max-w-4xl">
      <div className="w-52 overflow-hidden ">
        <img src={postPic} alt={exerciseName} className="object-cover h-32 w-screen"/>
      </div>
      <div className="flex flex-col gap-5 bg-[#6F87F5] w-full pl-4">
        <div className="flex flex-1 flex-col text-white gap-2">
            <h2 className="text-[1rem] font-bold text-xl uppercase mt-px">{studioName}</h2>
            <p className='mt-[-1rem] font-bold text-sm'>{formatDate(classDate)}</p>
            <p className='mt-[-0.8rem] text-sm'>{formatStartEndTime(classDate, duration)}</p>
            <h2 className="text-[1rem] font-bold mt-[-0.2rem] text-lg uppercase">{exerciseName}</h2>
            <p className='mt-[-0.6rem] text-sm'>{desc}</p>
            
        </div>
      </div>
    </div>
  );
} 