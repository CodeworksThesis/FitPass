import React, {useState, useEffect} from 'react'
import {getFavorites, getGymClass}from '../utils/api.service'
import { useAuth0 } from '@auth0/auth0-react'
import {Post} from '../../../globalTypes/Post.d'
import { ObjectId } from 'mongodb';

 type Favorited = {
   userId: string,
   gymClassId: string[]
 }

 type FavoritesType={
   favorited:Favorited[],
   _id: ObjectId

 }

export default function Favorites() {

  const [favorites, setFavorites] = useState<FavoritesType>()
  const {user} = useAuth0()

  const [gymClassDetails, setGymClassDetails]= useState<Post[]>([])

  const userId = user?.sub?.split("|")[1]

  useEffect(() => {
     if(userId){
        getFavorites(userId)
        .then(data => { 
          setFavorites(data)
        })
        .catch(error=> console.log(error))
     }
  }, [userId])

  useEffect(() => {

   favorites && favorites.favorited[0].gymClassId.forEach(item=> {
     getGymClass(item)
     .then(data=> {
      setGymClassDetails(prev =>   [...prev, data])
    })
     .catch(error => console.log(error))})
 }, [favorites])


  return (
    <div> </div>
  )
}