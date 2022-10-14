import React from 'react';
import { useGymClass } from '../hooks/useGymClass'

export default function Favorites() {

<<<<<<< HEAD
<<<<<<< HEAD
  const { favoriteGymClassDetails, bookedGymClassDetails } = useGymClass();

  console.log(bookedGymClassDetails)
=======
  const { favoriteGymClassDetails } = useGymClass();

  console.log(favoriteGymClassDetails)
>>>>>>> backend2
=======
  const { favoriteGymClassDetails, bookedGymClassDetails } = useGymClass();

  console.log(bookedGymClassDetails)
>>>>>>> backend-francis

  return (
    <div> 
      {bookedGymClassDetails.map(gymclass => 
      <div key={gymclass.id}>
        {gymclass.desc}
      </div>)}
    </div>
  )
}