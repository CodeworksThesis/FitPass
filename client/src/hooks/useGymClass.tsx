import React from "react";
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Post } from "../../../globalTypes/Post";
import { getBookings, getFavorites, getGymClass, getFavoritesDetails, getBookingsDetails } from '../utils/api.service';
import { ObjectId } from "mongodb";

export interface Favorited {
  userId: string,
  gymClassId: string[]
}

export interface FavoritesType {
  favorited: Favorited[],
  _id: any
}

export interface BookingsType {
  booked: Favorited[],
  _id: any
}

export interface Props {
  favoriteGymClassDetails: Post[],
  bookedGymClassDetails: Post[],
  userId: string | undefined,
  favorites: FavoritesType | undefined ,
  loadingFavorites: boolean,
  loadingBookings: boolean,
  setFavorites:React.Dispatch<React.SetStateAction<FavoritesType | undefined>>,
  setNoFavorites: React.Dispatch<React.SetStateAction<boolean>>,
  setFavoriteGymClassDetails: React.Dispatch<React.SetStateAction<Post[]>>
  setBookedGymClassDetails: React.Dispatch<React.SetStateAction<Post[]>>
  noFavorites: boolean
  noBookings: boolean
}

const GymClassContext = createContext<Props>({
  favoriteGymClassDetails: [],
  bookedGymClassDetails: [],
  favorites: {favorited:[{userId:"", gymClassId:[]}], _id:""},
  userId: '',
  loadingFavorites: false,
  loadingBookings: false,
  noFavorites: false,
  noBookings: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setFavorites: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setFavoriteGymClassDetails: () => { },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setBookedGymClassDetails: () => { },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setNoFavorites: () => {}
})

export const GymClassProvider = ({ children }: { children: React.ReactNode }) => {
  const [loadingFavorites, setLoadingFavorites] = useState(false);
  const [loadingBookings, setLoadingBookings] = useState(false);
  const [favoriteGymClassDetails, setFavoriteGymClassDetails] = useState<Post[]>([])
  const [bookedGymClassDetails, setBookedGymClassDetails] = useState<Post[]>([])
  const [favorites, setFavorites] = useState<FavoritesType>()
  const [bookings, setBookings] = useState<BookingsType>()
  const { user } = useAuth0()
  const [noFavorites, setNoFavorites] = useState(false)
  const [noBookings, setNoBookings] = useState(false)


  const userId = user?.sub?.split("|")[1]
  // const userId = '114683311426231214348'

  // get favorite and booking gymclass Ids
  useEffect(() => {
    if (userId) {
      getFavorites(userId)
        .then(data => {
          if(!data) setFavorites({favorited:[{userId:userId, gymClassId:[]}], _id:""})
          else setFavorites(data)
        })
        .catch(error => console.log(error))

      getBookings(userId)
        .then(data => {
          setBookings(data)
        })
        .catch(error => console.log(error))
    }
  }, [userId])

  // to get favorite details
  useEffect(() => {
    setLoadingFavorites(true);
    if (!favorites) {
      return setNoFavorites(true);
    } else {
      setNoFavorites(false)
      getFavoritesDetails(userId as string)
          .then(data => setFavoriteGymClassDetails(data))
          .catch((error) => console.log(error))
          .finally(() => setLoadingFavorites(false))
    }
  }, [favorites]);

  // to get booking details
  useEffect(() => {
    setLoadingBookings(true)
    if (!bookings) {
      return setNoBookings(true);
    } else {
      setNoBookings(false)
      getBookingsDetails(userId as string)
          .then(data => setBookedGymClassDetails(data))
          .catch((error) => console.log(error))
          .finally(() => setLoadingBookings(false))
    }
  }, [bookings])

  const memoedValue = useMemo(() => ({
    setNoFavorites,
    favorites,
    setFavorites,
    favoriteGymClassDetails,
    bookedGymClassDetails,
    userId,
    loadingFavorites,
    loadingBookings,
    setFavoriteGymClassDetails,
    setBookedGymClassDetails,
    noFavorites,
    noBookings,
  }), [userId, loadingFavorites, loadingBookings, favoriteGymClassDetails, bookedGymClassDetails, favorites])

  return (
    <GymClassContext.Provider value={memoedValue}>
      {children}
    </GymClassContext.Provider>
  )
}

export function useGymClass() {
  return useContext(GymClassContext);
}