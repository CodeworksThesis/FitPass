import User from '../Model/userModel'
import {Request, Response } from 'express'


export const getUser =  async (req:Request, res:Response)=>{

  try{
    const user = await User.find()
    res.send(user);
    res.status(201)
  }
  catch(e){
    console.log(e);
    res.status(400);
  }
}


export const postUser = async(req: Request, res:Response) =>{

  try{
    const user = await User.create(req.body);
    res.send(user);
    res.status(201);
  }
  catch(e){
    console.log(e)
    res.status(400)
  }
}

export const updateUser = async(req:Request, res:Response) =>{

  console.log(req.params.id)
  console.log('body', req.body.id)
  try {
    const updates = await User.findOneAndUpdate(
      {id: req.body.id},
      {favorites: req.body.favorites,
      booked: req.body.booked,
      profilePic: req.body.profilePic},
      {new: true}
    );

    console.log({updates})
    res.send(updates);
    res.status(201);
  } catch (e) {
    console.log(e);
    res.status(400);
  }

}