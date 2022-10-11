import User from "../Model/userModel";
import { Request, Response } from "express";

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await User.find();
    res.status(200);
    res.send(user);
  } catch (e) {
    console.log(e);
    res.status(400);
  }
};

export const postUser = async (req: Request, res: Response) => {
  try {
    const user= await req.body
    console.log(user)
    if(!user || Object.keys(user).length===0 ){
      console.log('user',user )
      throw new Error('Details not provided')
    }


    const users = await User.create(req.body);

    res.status(201);
    res.send(users);
    } catch (e) {
      console.log(e);
      res.status(400);
  }
}

export const updateUser = async (req: Request, res: Response) => {
  try {
    const updates = await User.findOneAndUpdate(
      { id: req.body.id },
      {
        favorites: req.body.favorites,
        booked: req.body.booked,
        profilePic: req.body.profilePic,
      },
      { new: true }
    );
    res.status(201);
    res.send(updates);
  } catch (e) {
    console.log(e);
    res.status(400);
  }
};
