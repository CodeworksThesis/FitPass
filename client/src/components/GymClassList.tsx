import React, { useEffect, useState } from "react"
import { GymClass } from "../mocks/GymClassMock"
import GymClassItem from "./GymClassItem"
import { Post } from "../../../globalTypes/Post"
import {getGymClasses} from '../utils/api.service'
import { Loading } from "./Loading"

export default function GymClassList() {
    const [gymClasses, setGymClasses] = useState<Post[]>()
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
      setLoading(true)
      // consider limiting the number of classes to fetch and filter by user location
      getGymClasses()
        .then(data=> setGymClasses(data))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    },[])

    if(loading) return <Loading />

    return (
        <div className="flex flex-col w-[100%] h-[100%] gap-[1%] mt-[1%] md:mt-4">
            {gymClasses && gymClasses.map((post: Post) => {
                return <GymClassItem key={post.id} {...post} />
            })}
        </div>
    )
}
