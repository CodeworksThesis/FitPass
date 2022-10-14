import React from 'react';
import { useGymClass } from '../hooks/useGymClass'

export default function Favorites() {

  const { favoriteGymClassDetails } = useGymClass();

  console.log(favoriteGymClassDetails)

  return (
    <div> </div>
  )
}