import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import PageTitle from "../components/PageTitle"
import Map from "../components/Map"
import { formatDateTime } from "../utils/time"
import ReserveBar from "../components/ReserveBar"
import { Loading } from "../components/Loading"
import { Post } from "../../../globalTypes/Post"
import { getGymClass } from '../utils/api.service'

export default function GymClassDetails() {
    const { id } = useParams()
    const [toggle, setToggle] = useState(false)
    const [gymClass, setGymClass] = useState<Post>()

    useEffect(() => {
        if(id) {
            getGymClass(id)
                .then(data => setGymClass(data))
                .catch(error => console.log(error))
        }
        
    },[id])
    
    if (!gymClass || !id) return <Loading />
    
    const {
        postPic,
        exerciseName,
        classDate,
        studioName,
        price,
        exerciseType,
        desc
    } = gymClass as Post
    
    return (
        <div className="overflow-y-scroll">
            <div className="w-full h-56 md:h-64 mt-16">
                <img
                    src={postPic}
                    alt={exerciseName}
                    className="w-full h-full object-cover"
                />
            </div>
            <PageTitle title={exerciseName} />
            <article className="bg-[#6F87F5] flex flex-col mx-auto w-[95%] rounded-xl text-white mb-5 transition-all swing-in-top-fwd">
                <div className="flex gap-2 pl-4">
                    <div className="flex flex-1 gap-2">
                        <p className="rounded-2xl border-[1px] border-white py-3 px-3 mt-4 text-md md:text-lg">
                            {exerciseType}
                        </p>
                        <p className="rounded-2xl border-[1px] border-white py-3 px-3 mt-4 text-md md:text-lg">
                            {studioName}
                        </p>
                    </div>
                    <button
                        onClick={() => setToggle(!toggle)}
                        className="mr-7 mt-7 w-10 h-10"
                    >
                        <img
                            src={toggle ? "/heart-red.svg" : "/heart-white.svg"}
                            alt="heart"
                        />
                    </button>
                </div>
                <div>
                    <p className="text-md md:text-lg px-4 pt-3 pb-1">
                        <span className="font-bold">When: </span>
                        {formatDateTime(classDate)}
                    </p>
                    <p className="text-md md:text-lg px-4 pt-1 pb-1">
                        <span className="font-bold">Price(€): </span>
                        {price}
                    </p>
                    <p className="text-md md:text-lg px-4 pt-1 pb-5">
                        <span className="font-bold">Description: </span>
                        {desc}
                    </p>
                </div>
            </article>
            <div className="flex flex-col flex-1 w-[95%] mx-auto h-[24rem] mb-28 md:h-[36rem] transition-all">
                <Map gymClassList={[gymClass]} isHome={false} />
            </div>
            <div className="fixed bottom-0 w-full bg-white">
                {/* accept EUR payment only */}
                <ReserveBar {...gymClass}/>
            </div>
        </div>
    )
}
