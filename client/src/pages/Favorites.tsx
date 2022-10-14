import React from 'react';
import { useGymClass } from '../hooks/useGymClass'

export default function Favorites() {

  const { favoriteGymClassDetails } = useGymClass();
  return (
    <div> 
      {favoriteGymClassDetails.map(gymclass => 
      <div key={gymclass.id}>
        {gymclass.desc}
      </div>)}
    </div>
  )
}