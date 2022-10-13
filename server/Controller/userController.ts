// @ts-nocheck
import Favorites from "../Model/favoritesModel";
import Bookings from '../Model/bookingModel'
import { Request, Response } from "express";




export const updateFavorites = async (req: Request, res: Response) => {

  
  try {
    const updatedFavorite = await req.body
    console.log(' this is the userId',updatedFavorite.favorited[0].userId)
     const updates = await Favorites.findOne({"favorited.userId": updatedFavorite.favorited[0].userId})
     console.log(updates)


    if(!updates || Object.keys(updates).length ===0){
    const updateCreated= await Favorites.create(updatedFavorite)
    console.log(updateCreated)
    res.status(201);
    res.send(updateCreated);
    } else{
         updates.favorited.map(item => {
        if(item.userId === updatedFavorite.favorited[0].userId) {
        return item.gymClassId = [...item.gymClassId, ...updatedFavorite.favorited[0].gymClassId]}
        return item })
        updates.save()

      res.send(updates)
      res.status(201)
    }
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};


export const updateBookings = async (req: Request, res: Response) => {
  try {
  const updatedBooking = await req.body
  const updates = await Bookings.findOne({ id: updatedBooking.id });
  if(!updates) {
    Bookings.create(updatedBooking);
  }
  else{
   updates.booked = updatedBooking.booked
   updates.save();
  }
  res.status(201);
  res.send(updates);
 } catch (e) {
   console.log(e);
   res.status(400).end();
 }
};

