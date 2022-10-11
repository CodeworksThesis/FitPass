import * as React from 'react';
interface GymClassItemProps {
    exerciseName: string,
    studioName:string,
    classDate:Date,
    postPic:string,
    exerciseType:string,
}

export default function GymClassItemSmall ({exerciseName, studioName, classDate, postPic, exerciseType}: GymClassItemProps) {
  return (
    <div className="rounded-2xl flex w-[95%] overflow-hidden mt-[3%] h-[8rem] max-w-4xl">
      <div className="w-52 overflow-hidden ">
        <img src={postPic} alt={exerciseName} className="object-cover h-32 w-screen"/>
      </div>
      <div className="flex flex-col gap-5 bg-[#6F87F5] w-full">
        <div className="flex flex-1 flex-col text-white gap-2">
            <h2 className="text-[1rem]">{studioName}</h2>
            <p>date</p>
            <p>time</p>
            <h2>{exerciseName}</h2>
            <p>description</p>
            
        </div>
        {/* based on User Data */}
      </div>
    </div>
  );
}