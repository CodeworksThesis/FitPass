import * as React from 'react';
import Button from './Button'
interface GymClassItemProps {
    exerciseName: string,
    studioName:string,
    classDate:Date,
    postPic:string,
    exerciseType:string,
}

export default function GymClassItem ({exerciseName, studioName, classDate, postPic, exerciseType}: GymClassItemProps) {
  return (
    <div className="rounded-2xl flex w-full overflow-hidden mt-[3%] h-[15rem]">
      <div className="w-[50%] overflow-hidden">
        <img src={postPic} alt={exerciseName} className="w-full h-full object-cover"/>
      </div>
      <div className="flex flex-col gap-5 bg-[#6F87F5] w-[50%]">
        <div className="flex flex-1 bg-red flex-col text-white pt-[8%] pl-[8%] gap-2">
            <h2 className="text-[1rem]">{exerciseName}</h2>
            <p className="text-xs">{studioName}</p>
            <p className="text-xs">{exerciseType}</p>
        </div>
        {/* based on User Data */}
        <div className="flex justify-between">
            <div></div>
            <div className="flex w-8 h-8 mb-[8%] mr-[10%]">
                <img src="heart-red.svg" alt="heart"/>
            </div>
            <Button buttonText={"Setting"}/>
        </div>
      </div>
    </div>
  );
}
