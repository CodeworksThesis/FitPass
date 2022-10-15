import React from "react"
import { useGymClass } from "../hooks/useGymClass"

export default function Favorites() {
    const { favoriteGymClassDetails } = useGymClass()

<<<<<<< HEAD
    return (
        <div>
            <div className="relative flex flex-col w-full items-center mt-20">
                <h2 className="italic font-bold text-xl">SAVED CLASSES</h2>
                <div className="flex flex-col items-center w-full">
                    {favoriteGymClassDetails.map((gymclass) => (
                        <div key={gymclass.id}>{gymclass.desc}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}
=======
  const { favoriteGymClassDetails, noFavorites } = useGymClass();

  return (
    <div>

      <div className='relative flex flex-col w-full items-center mt-20'>
        <h2 className='italic font-bold text-xl'>SAVED CLASSES</h2>
        {noFavorites ?
          <h2>No Favorites</h2>
          :
          <div className='flex flex-col items-center w-full'>
            {favoriteGymClassDetails.map(gymclass =>
              <div key={gymclass.id}>
                {gymclass.desc}
              </div>)}
          </div>
        }
      </div>
    </div>
  )
}
>>>>>>> development
