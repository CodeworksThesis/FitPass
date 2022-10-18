import Post from '../Model/classModel'
import { Request, Response } from 'express'
import url from 'url'
import { isAssertEntry } from 'typescript';
//import querystring from 'querystring'
const querystring = require('querystring');

export const getClasses = async (req: Request, res: Response) => {
  try {

    const parsedUrl = url.parse(req.url)
    const parsedQs = querystring.parse(parsedUrl.query);
   
    const exerciseTypes = parsedQs.exerciseType.split(',');
    console.log(parsedQs)



    const classes = await Post.find({
        $or: [
                { location:
                    {$in: [ parsedQs.location ]}
                },
                {exerciseType:
                    {$in: exerciseTypes }
                } 
            ]
        })
    

    

    

 

    console.log('getClasses, classes', classes)
    //getClasses, classes []


    if (!classes.length || !classes) { throw new Error('no found') }
    res.status(200)
    res.send({ error: null, data: classes});
  }
  catch (error) {
    console.log(error)
    res.status(400);
    res.send({ error: "no results found", data: null });
    }
}
