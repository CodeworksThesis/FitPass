import React from 'react'
import GymClassItem from './GymClassItem';
import { Post } from '../../../globalTypes/Post';

interface Props {
  classes: Post[]
}

export default function GymClassList({ classes }: Props) {

  return (
    <section className="flex flex-col w-[100%] h-[100%] gap-[1%] mt-20">
      {classes.map((post: Post) => {
        return (
          <GymClassItem
            key={post.id}
            {...post}
          />
        )
      })}
    </section>
  )
}