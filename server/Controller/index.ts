
import Post from '../Model/classModel'
import {Request, Response} from 'express'

export const getGymClass= async(req: Request, res: Response) =>{

  try{

    const classes = await Post.find();
    res.send(classes);
    res.status(201)

  }
  catch(e){
    console.log(e)
    res.status(400)
  }

}

export const postGymClass= async( req: Request, res: Response)=>{
  try{

    console.log(req.body)
    const classes = await Post.create(req.body)
    res.send(classes)
    res.status(201)

  }
  catch(e){
    console.log(e)
    res.status(400);
  }
}