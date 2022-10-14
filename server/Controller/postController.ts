
import Post from '../Model/classModel'
import {Request, Response} from 'express'

const { jwtCheck } = require('./check-jwt')

export const getGymClass= async(req: Request, res: Response) =>{

  try{

    const classes = await Post.find();
    if(classes.length === 0 || !classes) throw new Error('no gym classes')
    res.status(200)
    res.send(classes);

  }
  catch(e){
    console.log(e)
    res.status(400)
  }

}

export const postGymClass= async( req: Request, res: Response)=>{
  try{

    const gyms= await req.body

    if(!gyms || !gyms.length) throw new Error('bad');

    const classes = await Post.create(req.body)
    res.send(classes)
    res.status(201)

  }
  catch(e){
    console.log(e)
    res.status(400);
  }
}



