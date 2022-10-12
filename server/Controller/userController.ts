import User from "../Model/userModel";
import { Request, Response } from "express";
import {ObjectId} from 'mongodb'

export const getUsers = async (req: Request, res: Response) => {
  try {
    const user = await User.find();
    if(!user || !Object.keys(user).length) throw new Error('no user')
    else{
    res.status(200);
    res.send(user);
    }
  } catch (e) {
    console.log(e);
    res.status(400).end()
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const {id} = req.params
    console.log(id)
    const user = await User.findOne({_id: new ObjectId(id.toString())});
    if(!user || !Object.keys(user).length) throw new Error('no user')
    else{
    res.status(200);
    res.send(user);
    }
  } catch (e) {
    console.log(e);
    res.status(400).end()
  }
};

export const postUser = async (req: Request, res: Response) => {
  try {
    const user = await req.body
    if(!user || Object.keys(user).length===0 ){
      throw new Error('Details not provided')
    }


    const createUser = await User.create(user);
    createUser.id = createUser._id.toString()
    createUser.save()

    res.status(201);
    res.send(createUser);
    } catch (e) {
      console.log(e);
      res.status(400).end();
  }
}

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

