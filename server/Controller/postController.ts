import Post from '../Model/classModel'
import { Request, Response } from 'express';
import url from 'url';
const querystring = require('querystring');
import { getDistance } from '../utils/distance';

// initial distance for fetching classes near the user
const DEFAULT_USER_DISTANCE = 50

export const getGymClasses = async (req: Request, res: Response) => {
  try {
    const parsedUrl = url.parse(req.url)
    const parsedQs = querystring.parse(parsedUrl.query);
    const userLat = parsedQs.latitude;
    const userLong = parsedQs.longitude;

    let query:any = {   
      $and: [{classDate: { $gte: new Date().toISOString()}}]
      //current data structure doesn't allow distance filter in mongodb
    }
    const classes = await Post.find(query);

    // we filter the distance after fetching from mongodb
    let filteredClasses: typeof classes;
    if( userLat && userLong) {
      filteredClasses = classes.filter(item => {
        const distance =  getDistance(Number(userLat),Number(userLong), Number(item.latitude), Number(item.longitude),"K")
        return distance <= DEFAULT_USER_DISTANCE
      })
    } else {
      filteredClasses = classes;
    }
    if (!classes.length || !classes) { throw new Error('no user found') }
    res.status(200)
    res.send({ error: null, data: filteredClasses});
  }
  catch (error) {
    console.log(error)
    res.send({ error: "no gym classes", data: null});
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



