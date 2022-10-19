import Post from '../Model/classModel'
import { Request, Response } from 'express'
import url from 'url'
import { tomorrow, dayAfterTomorrow ,nextMonday, secondMonday } from '../utils/days';
const querystring = require('querystring');

export const getClasses = async (req: Request, res: Response) => {
  try {
    const parsedUrl = url.parse(req.url)
    const parsedQs = querystring.parse(parsedUrl.query);
    const exerciseTypes = parsedQs.exerciseType.split(',');
    const day = parsedQs.day.split(',');

    //console.log(req.url)

    let query:any = {   
            $and: [
                     {exerciseType: { $in: exerciseTypes }},
                    {price: { $lte: Number(parsedQs.price)}},
                    {classDate: { $gte: new Date().toISOString()}}
                ]
    }
    if(parsedQs.general !=='undefined') {
        query.$and.push({exerciseName: { 
                //partial text search
                $regex: parsedQs.general,
                // case insensitive
                $options: "i"
            }})
    }
    if(parsedQs.location !== 'undefined'){
        query.$and.push( {location:{$in: [ parsedQs.location ]}})
    }
    if(parsedQs.day) {
        if(day.includes('Today') && day.includes('Tomorrow')) {
            query.$and.push({ classDate: { $lte: new Date( dayAfterTomorrow()).toISOString()} })
        }
        else if(day.includes('Today') && day.includes('Next week')) {
            query.$and.push(
                {
                    $or: [
                            // today
                            { classDate: { $lte: new Date( tomorrow() ).toISOString()}},
                            // next week
                            {$and: [
                                { classDate: { $gte: new Date( nextMonday()).toISOString()}},
                                { classDate: { $lte: new Date( secondMonday()).toISOString()}},
                                ]
                            }
                        ]
                }
            )
        }
        else if(day.includes('Tomorrow') && day.includes('Next week')) {
            query.$and.push(
                {
                    $or: [
                        // tomorrow
                        { $and: [
                                { classDate: { $lte: new Date( dayAfterTomorrow() ).toISOString()}},
                                { classDate: { $gte: new Date( tomorrow()).toISOString()}},
                             ]
                        },
                        // next week
                        {$and: [
                            { classDate: { $gte: new Date( nextMonday()).toISOString()}},
                            { classDate: { $lte: new Date( secondMonday()).toISOString()}},
                            ]
                        }
                    ]
                }
            )
        }
        else if(day.includes('Today') )
        {
            query.$and.push({ classDate: { $lte: new Date(tomorrow()).toISOString() }})
        }
        else if(day.includes('Tomorrow') ) {
            query.$and.push(
                {
                    $and: [
                        { classDate: { $lte: new Date( dayAfterTomorrow() ).toISOString()}},
                        { classDate: { $gte: new Date( tomorrow()).toISOString()}},
                    ]
                }
            )
        }
        else if (day.includes('Next week')) {
            query.$and.push(
                {$and: 
                [
                    { classDate: { $gte: new Date( nextMonday()).toISOString()}},
                    { classDate: { $lte: new Date( secondMonday()).toISOString()}},
                ]
            })
        }
    
    }
    const classes = await Post.find(query);

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


