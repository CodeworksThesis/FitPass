import React from 'react';
import { useGymClass } from '../hooks/useGymClass'

export default function Favorites() {

<<<<<<< HEAD
  const { favoriteGymClassDetails, bookedGymClassDetails } = useGymClass();

  console.log(bookedGymClassDetails)
=======
  const { favoriteGymClassDetails } = useGymClass();

  console.log(favoriteGymClassDetails)
>>>>>>> backend2

  return (
    <div> </div>
  )
}