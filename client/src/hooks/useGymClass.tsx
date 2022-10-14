import React from "react";
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Post } from "../../../globalTypes/Post"; 
import { getFavorites, getGymClass } from '../utils/api.service';
import { ObjectId } from "mongodb";


const initialGymClassDetails = {
    favoriteGymClassDetails: [{
        id: '',
        studioName: '',
        exerciseName: '',
        desc: '',
        duration: null, // minutes
        longitude:null,
        latitude:null,
        classDate: new Date(),
        exerciseType: '',
        price: '',
        postPic:''
    }]
}



interface Favorited {
    userId: string,
    gymClassId: string[]
  }
 
  interface FavoritesType {
    favorited:Favorited[],
    _id: ObjectId
  }

interface Props {
    favoriteGymClassDetails: Post[]
    userId: string | undefined,
    loading: boolean,
    setFavoriteGymClassDetails: React.Dispatch<React.SetStateAction<Post[]>>
}

const GymClassContext = createContext<Props>({
    favoriteGymClassDetails: [],
    userId: '',
    loading: true,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setFavoriteGymClassDetails: () => {}
})

export const GymClassProvider = ({children}: { children: React.ReactNode}) => {
    const [loading, setLoading] = useState(false);
    const [favoriteGymClassDetails, setFavoriteGymClassDetails] = useState<Post[]>([])
    const [favorites, setFavorites] = useState<FavoritesType>()
    const {user} = useAuth0()

    // const userId = user?.sub?.split("|")[1]
    const userId = '6348534908c244ef54eebefd'
    console.log('favorites',favorites)

    useEffect(() => {
        if(userId){
           getFavorites(userId)
           .then(data => { 
            console.log(data)
             setFavorites(data)
           })
           .catch(error=> console.log(error))
        }
     }, [userId])
   
    useEffect(() => {
      setLoading(true)
      favorites && favorites.favorited[0].gymClassId.forEach(item => {
        getGymClass(item)
        .then(data => {
            setFavoriteGymClassDetails(prev => [...prev, data])
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))})
    }, [favorites])
   
    const memoedValue = useMemo(() => ({
        favoriteGymClassDetails,
        userId,
        loading,
        setFavoriteGymClassDetails
    }),[userId,loading, favoriteGymClassDetails])

    return (
        <GymClassContext.Provider value={memoedValue}>
            {children}
        </GymClassContext.Provider>
    )
}

export function useGymClass() {
    return useContext(GymClassContext);
}