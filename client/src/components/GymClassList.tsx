import React, { useEffect, useState } from "react"
import { GymClass } from "../mocks/GymClassMock"
import GymClassItem from "./GymClassItem"
import { Post } from "../../../globalTypes/Post"
import {getGymClasses} from '../utils/api.service'

export default function GymClassList() {
    const [gymClasses, setGymClasses] = useState<Post[]>()

    useEffect(() => {
      getGymClasses()
        .then(data=> setGymClasses(data))
        .catch(error => console.log(error))
    },[])
    console.log(gymClasses)

    return (
        <div className="flex flex-col w-[100%] h-[100%] gap-[1%] mt-[1%] md:mt-4">
            {GymClass.map((post: Post) => {
                return <GymClassItem key={post.id} {...post} />
            })}
        </div>
    )
}
