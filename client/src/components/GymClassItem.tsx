import React, { useState } from 'react';
import { formatDate, formatTime } from '../utils/time';
import { Link } from 'react-router-dom';
import { Post } from '../../../globalTypes/Post'

export default function GymClassItem (post:Post) {
    const [toggle, setToggle] = useState(false)
    const { exerciseName, id, studioName, postPic, classDate } = post
    const handleClick= () => {
        setToggle(!toggle)
    }
  
    return (
            <article className="rounded-2xl flex w-full overflow-hidden mt-[3%] h-[15rem] shadow-[0_0_15px_7px_rgba(0,0,0,0.4)] hover:scale-105">
                <Link 
                    className="w-[50%] overflow-hidden cursor-pointer"
                    to={`/gymclass/${id}`}
                >
                    <img src={postPic} alt={exerciseName} className="w-full h-full object-cover"/>
                </Link>
                <div className="flex flex-col gap-5 bg-[#6F87F5] w-[50%]">
                    <header className="flex flex-1 bg-red flex-col text-white pt-8 pl-8 gap-2">
                        <h2 className="text-2xl font-bold">{exerciseName}</h2>
                        <p className="text-md">{studioName}</p>
                        <p className="text-md">{formatDate(classDate)}</p>
                        <p className="text-md">{formatTime(classDate)}</p>
                    </header>
                    {/* based on User Data */}
                    <div className="flex justify-between mb-8">
                        <div></div>
                        <button className="flex w-10 h-10 mr-8" onClick={handleClick}>
                            <img src={toggle ? "/heart-red.svg": "/heart-white.svg"} alt="heart"/>
                        </button>
                    </div>
                </div>
            </article>
    );
}
