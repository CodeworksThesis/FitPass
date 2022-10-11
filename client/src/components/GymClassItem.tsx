import React, { useState } from 'react';
import { formatDate, formatTime } from '../utils/time'
interface GymClassItemProps {
    exerciseName: string,
    studioName:string,
    classDate:Date,
    postPic:string,
    exerciseType:string,
}

export default function GymClassItem ({exerciseName, studioName, classDate, postPic, exerciseType}: GymClassItemProps) {
    const [toggle, setToggle] = useState(false)
    const handleClick= () => {
        setToggle(!toggle)
    }
  
    return (
        <div className="rounded-2xl flex w-full overflow-hidden mt-[3%] h-[15rem] shadow-[0_0_15px_7px_rgba(0,0,0,0.4)] cursor-pointer hover:scale-105">
        <div className="w-[50%] overflow-hidden">
            <img src={postPic} alt={exerciseName} className="w-full h-full object-cover"/>
        </div>
        <div className="flex flex-col gap-5 bg-[#6F87F5] w-[50%]">
            <div className="flex flex-1 bg-red flex-col text-white pt-[8%] pl-[8%] gap-2">
                <h2 className="text-2xl font-bold">{exerciseName}</h2>
                <p className="text-md">{studioName}</p>
                <p className="text-md">{formatDate(classDate)}</p>
                <p className="text-md">{formatTime(classDate)}</p>
            </div>
            {/* based on User Data */}
            <div className="flex justify-between mb-[5%]">
                <div></div>
                <button className="flex w-10 h-10 mr-[2%]" onClick={handleClick}>
                    <img src={toggle ? "heart-red.svg": "heart-white.svg"} alt="heart"/>
                </button>
            </div>
        </div>
        </div>
    );
}
