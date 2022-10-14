import React from 'react';
import { useGymClass } from '../hooks/useGymClass'

export default function Favorites() {

  const { favoriteGymClassDetails, bookedGymClassDetails } = useGymClass();

  console.log(bookedGymClassDetails)

  return (
    <div> </div>
  )
}