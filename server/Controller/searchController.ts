import Post from '../Model/classModel'
import { Request, Response } from 'express'
import url from 'url'
//import querystring from 'querystring'
const querystring = require('querystring');

export const getClasses = async (req: Request, res: Response) => {
  try {

    const parsedUrl = url.parse(req.url)
    const parsedQs = querystring.parse(parsedUrl.query);
   
    const exerciseTypes = parsedQs.exerciseType.split(',');
    console.log(parsedQs)



    const classes = await Post.find()
    .where('location').equals(parsedQs.location)
    .where('exerciseType').in(exerciseTypes)

   

    if (!classes.length || !classes) { throw new Error('no found') }
    res.status(200)
    res.send(classes);
  }
  catch (error) {
    console.log(error)
    res.sendStatus(400).send('Sorry we can not find ')
  }
}
