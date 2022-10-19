import React from 'react'
import { useLocation } from 'react-router-dom';
import GymClassItem from '../components/GymClassItem';
import { Post } from '../../../globalTypes/Post';
import PageTitle from '../components/PageTitle'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom';


export default function SearchResults() {

  const location = useLocation();
  const { data } = location.state.data
  const { isAuthenticated } = useAuth0()
  const navigate = useNavigate();

  if (!data) return <h1 className='mt-20'>No Results Found</h1>

  return (
    <>
      {isAuthenticated ?
        <div className='mt-20 w-[90%] mx-auto'>
          <PageTitle title="Search Results" />
          {
            data.map((post: Post) => <GymClassItem key={post.id} {...post} />)}
        </div>
        : navigate('/')}
    </>
  )
}