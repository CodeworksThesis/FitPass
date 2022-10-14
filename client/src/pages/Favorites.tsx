import React from 'react';
import { useGymClass } from '../hooks/useGymClass'

export default function Favorites() {

  const { favoriteGymClassDetails, bookedGymClassDetails } = useGymClass();

  console.log(bookedGymClassDetails)

  return (
    <div> 
      {bookedGymClassDetails.map(gymclass => 
      <div key={gymclass.id}>
        {gymclass.desc}
      </div>)}
    </div>
  )
}