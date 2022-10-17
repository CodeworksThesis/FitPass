import Post from '../Model/classModel'
import { Request, Response } from 'express'

export const getGymClasses = async (req: Request, res: Response) => {
  try {
    const classes = await Post.find();
    if (!classes.length || !classes) { throw new Error('no user found') }
    res.status(200)
    res.send(classes);
  }
  catch (error) {
    console.log(error)
    res.sendStatus(400).send('Sorry we can not find ')
  }
}


export const getGymClass = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    if (id) {
      const classes = await Post.findOne({ id: id });
      res.status(200)
      res.send(classes);
    }
  }
  catch (error) {
    console.log(error)
    res.sendStatus(400).send('Sorry we can not find ')
  }
}

export const postGymClass = async (req: Request, res: Response) => {
  try {
    const gym = await req.body
    const gymClass = await Post.create(gym)
    if (!Object.keys(gymClass).length) throw new Error('wrong')
    res.status(201)
    res.send(gymClass)
  }
  catch (e) {
    console.log(e)
    res.status(400).end()
  }
}



