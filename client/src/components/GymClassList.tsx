import React, { useEffect, useState } from 'react'
import GymClassItem from './GymClassItem';
import { Post } from '../../../globalTypes/Post';
import { getGymClasses } from '../utils/api.service'

export default function GymClassList() {

  const [classes, setClasses] = useState([])

  useEffect(() => {
    getGymClasses()
      .then(data => setClasses(data))
      .catch(error => console.log(error))

  }, [])

  return (
    <div className="flex flex-col w-[100%] h-[100%] gap-[1%] mt-[20%] md:mt-4">
      {classes.map((post: Post) => {
        return (
          <GymClassItem
            key={post.id}
            {...post}
          />
        )
      })}
    </div>
  )
}