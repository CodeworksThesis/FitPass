import User from "../Model/bookingModel";
import { Request, Response } from "express";
import {ObjectId} from 'mongodb'




export const updateFavorites = async (req: Request, res: Response) => {
  try {
     const updatedUser = await req.body
    const updates = await User.findOne({ _id: new ObjectId( updatedUser.id) });
    if(updates){
    updates.favorites = updatedUser.favorites
    updates.save()
    res.status(201);
    res.send(updates);
    }
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};


export const updateBookings = async (req: Request, res: Response) => {
  try {
  const updatedUser = await req.body
  const updates = await User.findOne({ _id: new ObjectId(updatedUser.id) });
  if(updates){
   updates.booked = updatedUser.booked
   updates.save()
   res.status(201);
   res.send(updates);
  }
 } catch (e) {
   console.log(e);
   res.status(400).end();
 }
};

