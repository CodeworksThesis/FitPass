
import Classes from '../Model/classModel'
import {Request, Response} from 'express'

export const getClasses= async(req: Request, res: Response) =>{

  try{

    const classes = await Classes.find();
    res.send(classes);
    res.status(201)

  }
  catch(e){
    console.log(e)
    res.status(400)
  }

}

export const postClasses = async( req: Request, res: Response)=>{
  try{

    console.log(req.body)
    const classes = await Classes.create(req.body)
    res.send(classes)
    res.status(201)

  }
  catch(e){
    console.log(e)
    res.status(400);
  }
}