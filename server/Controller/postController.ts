
import Post from '../Model/classModel'
import {Request, Response} from 'express'
import {ObjectId} from 'mongodb'

<<<<<<< HEAD
const { jwtCheck } = require('./check-jwt')

export const getGymClass= async(req: Request, res: Response) =>{
=======
export const getGymClasses= async(req: Request, res: Response) =>{
>>>>>>> 06206e7 (pairprogramming server session)

  try{

    const classes = await Post.find();
    console.log(classes)
    if(!classes.length || !classes)
    { throw new Error('no user found')}
     res.status(200)
     res.send(classes);
  }
  catch(error){
    console.log(error)
    res.sendStatus(400).send('Sorry we can not find ')
  }

}


export const getGymClass= async(req: Request, res: Response) =>{

  try{

    const {id} = req.params

    const classes = await Post.findOne({_id: new ObjectId(id)});
    console.log(classes)

     res.status(200)
     res.send(classes);
  }
  catch(error){
    console.log(error)
    res.sendStatus(400).send('Sorry we can not find ')
  }

}

export const postGymClass= async( req: Request, res: Response)=>{
  try{

    const gym= await req.body

    const gymClass = await Post.create(gym)
    if(!Object.keys(gymClass).length) throw new Error('wrong')
    res.status(201)
    res.send(gymClass)

  }
  catch(e){
    console.log(e)
    res.status(400).end()
  }
}



