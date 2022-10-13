// @ts-nocheck
import Favorites from "../Model/favoritesModel";
import Bookings from '../Model/bookingModel'
import { Request, Response } from "express";

export const getFavorites = async (req:Request, res:Response)=>{

  try{
  const {id} = req.params
  if(!id) throw new Error('no user id provided')
  const updates = await Favorites.findOne({"favorited.userId": id})
  res.status(201)
  res.send(updates)
  }
  catch(e){
    console.log(e)
    res.status(400).end()
  }

}

export const addFavorites = async (req: Request, res: Response) => {


  try {
    const {id} = req.params
    const { gymClassId } = req.body
    if(!id || !gymClassId) throw new Error('no user id or gymclass id provided')
    const updates = await Favorites.findOne({"favorited.userId": id})
    if(!updates || Object.keys(updates).length ===0){
    const updateCreated =  await Favorites.create(
      {favorited: {
        userId: id,
        gymClassId: [ gymClassId ]
      }})
    res.status(201);
    res.send(updateCreated);
  } else{
         updates.favorited.map(item => {
        if(item.userId === id) {
        return item.gymClassId = [...item.gymClassId, gymClassId]
      }
        return item })
        updates.markModified('favorited')
        updates.save()

      res.send(updates)
      res.status(201)
    }
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};

export const deleteFavorite= async (req:Request, res:Response)=>{

  try{
  const {id} = req.params;
  const {gymClassId }= req.body;
  if(!id || !gymClassId) throw new Error('no userId or gymClassId provided')
  const update = await Favorites.findOne({"favorited.userId": id});

  const favoritedItem = update.favorited.find((item) => {
    return item.userId === id;
  })
  const updatedGymClassIds = favoritedItem.gymClassId.filter((classId) => {
    return classId !== gymClassId
  })

  favoritedItem.gymClassId = updatedGymClassIds


  update.markModified('favorited')
  await update.save()

  res.send(update)
  res.status(201)
  }
  catch(e){
    console.log(e)
    res.status(400).end()
  }

}

export const getBookings = async (req:Request, res:Response)=>{

  try{
    const {id} = req.params
    if(!id) throw new Error('no user id provided')
    const updates = await Bookings.findOne({"booked.userId": id})
    res.status(201)
    res.send(updates)
    }
    catch(e){
      console.log(e)
      res.status(400).end()
    }

}


export const addBookings = async (req: Request, res: Response) => {

  try {

    const {id}= req.params
    const {gymClassId}= req.body;

    const updates = await Bookings.findOne({"booked.userId": id})


    if(!updates || Object.keys(updates).length ===0){
    const updateCreated =  await Bookings.create(
      {booked: {
        userId: id,
        gymClassId: [ gymClassId ]
      }})
    res.status(201);
    res.send(updateCreated);
    } else{
         updates.booked.map(item => {
        if(item.userId === id) {
        return item.gymClassId = [...item.gymClassId, gymClassId]
      }
        return item })
        updates.markModified('booked')
        await updates.save()

      res.send(updates)
      res.status(201)
    }}
     catch (e) {
   console.log(e);
   res.status(400).end();
 }
};

