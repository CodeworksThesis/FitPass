import React from 'react'
import {useLocation} from 'react-router-dom';
import GymClassItem from '../components/GymClassItem';
import { Post } from '../../../globalTypes/Post'

export default function SearchResults() {
  const location = useLocation();

  console.log(location.state.data)

  return (
    <div className='mt-20'>
      <div>Search Results</div>
      {location.state.data.map((post:Post)  => <GymClassItem key={post.id} {...post}/>)}
    </div>

  )
}