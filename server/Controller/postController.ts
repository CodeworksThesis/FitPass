
import Post from '../Model/classModel'
import {Request, Response} from 'express'

const { jwtCheck } = require('./check-jwt')

export const getGymClass= async(req: Request, res: Response) =>{

  try{

    const classes = await Post.find();
    if(classes.length){
     res.status(200)
     res.send(classes);
    }
    else{
       throw new Error('Wrong')
    }

  }
  catch(error){
    console.log(error)
    res.status(400)
  }

}

export const postGymClass= async( req: Request, res: Response)=>{
  try{

    const gyms= await req.body

    // if(!gyms || !gyms.length) throw new Error('empty');

    const classes = await Post.create(req.body)
    if(!Object.keys(classes).length) throw new Error('wrong')
    res.status(201)
    res.send(classes)

  }
  catch(e){
    console.log(e)
    res.status(400);
  }
}



