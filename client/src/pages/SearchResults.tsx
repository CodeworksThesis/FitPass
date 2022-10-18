import React from 'react'
import {useLocation} from 'react-router-dom';
import GymClassItem from '../components/GymClassItem';
import { Post } from '../../../globalTypes/Post'



export default function SearchResults() {

  const location = useLocation();
  console.log(location.state.data)

  const { data } = location.state.data

  if (!data) return <h1 className='mt-20'>No Results Found</h1>




  console.log(location.state.data)

  return (
    <div className='mt-20'>
      <div>Search Results</div>
      {
      data.map((post:Post)  => <GymClassItem key={post.id} {...post}/>)}
    </div>

  )
}