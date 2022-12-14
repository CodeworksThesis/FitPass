// @ts-nocheck
import Favorites from "../Model/favoritesModel";
import Bookings from '../Model/bookingModel'
import { Request, Response } from "express";
import Post from '../Model/classModel'
require("dotenv").config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

const axios = require('axios')
const { cloudinary } = require('../utils/cloudinary')
require('dotenv').config()

export const getFavorites = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    if (!id) throw new Error('no user id provided')
    const updates = await Favorites.findOne({ "favorited.userId": id })
    res.status(201)
    res.send({ error: null, data: updates })
  }
  catch (e) {
    console.log(e)
    res.status(400).send({ error: e.message, data: null })
  }
}

export const getFavoritesDetails = async (req:Request, res:Response) =>{

  try{
    const { id } = req.params
    if (!id) throw new Error('no user id provided')
    const updates = await Favorites.findOne({ "favorited.userId": id })
    const gymClassDetails =  []
    // loop through and update gymClassDetails
    for(let i = 0; i < updates.favorited[0].gymClassId.length; i++ ){
        const details = await Post.findOne({ id: updates.favorited[0].gymClassId[i] })
        gymClassDetails.push(details)
    }
    res.status(201)
    res.send(gymClassDetails);
  }

  catch(e){
    console.log(e)
  }

}

export const addFavorites = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { gymClassId } = req.body
    if (!id || !gymClassId) throw new Error('no user id or gymclass id provided')
    const updates = await Favorites.findOne({ "favorited.userId": id })
    if (!updates || Object.keys(updates).length === 0) {
      const updateCreated = await Favorites.create(
        {
          favorited: {
            userId: id,
            gymClassId: [gymClassId]
          }
        })
      res.status(201);
      res.send(updateCreated);
    } else {
      updates.favorited.map(item => {
        if (item.userId === id) {
          if(item.gymClassId.some(element => element === gymClassId)){
          return
        }
          else{
          return item.gymClassId = [...item.gymClassId, gymClassId]
          }
        }
        return item
      })
      updates.markModified('favorited')
      updates.save()
      res.send(updates)
      res.status(201)
    }
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};

export const deleteFavorite = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { gymClassId } = req.body;
    if (!id || !gymClassId) throw new Error('no userId or gymClassId provided')
    const update = await Favorites.findOne({ "favorited.userId": id });
    const favoritedItem = update.favorited.find((item) => {
      return item.userId === id;
    })
    const updatedGymClassIds = favoritedItem.gymClassId.filter((classId) => {
      return classId !== gymClassId
    })
    favoritedItem.gymClassId = updatedGymClassIds
    update.markModified('favorited')
    await update.save()
    res.send(update)
    res.status(201)
  }
  catch (e) {
    console.log(e)
    res.status(400).end()
  }
}

export const getBookings = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    if (!id) throw new Error('no user id provided')
    const updates = await Bookings.findOne({ "booked.userId": id })
    res.status(201)
    res.send({ error: null, data: updates })
  }
  catch (e) {
    console.log(e)
    res.status(400).send({ error: e.message, data: null })
  }
}

export const getBookingsDetails = async (req: Request, res: Response) => {
  try{
    const { id } = req.params
    if (!id) throw new Error('no user id provided')
    const updates = await Bookings.findOne({ "booked.userId": id })
    const gymClassDetails = []
    // loop through and update gymClassDetails
    for(let i = 0; i < updates.booked[0].gymClassId.length; i++ ){
        const details = await Post.findOne({ id: updates.booked[0].gymClassId[i] })
        gymClassDetails.push(details)
    }
    res.status(201)
    res.send(gymClassDetails);
  }

  catch(e){
    console.log(e)
  }

}

export const addBookings = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { gymClassId } = req.body;
    const updates = await Bookings.findOne({ "booked.userId": id })
    if (!updates || Object.keys(updates).length === 0) {
      const updateCreated = await Bookings.create(
        {
          booked: {
            userId: id,
            gymClassId: [gymClassId]
          }
        })
      res.status(201);
      res.send(updateCreated);
    } else {
      updates.booked.map(item => {
        if (item.userId === id) {
          return item.gymClassId = [...item.gymClassId, gymClassId]
        }
        return item
      })
      updates.markModified('booked')
      await updates.save()
      res.send(updates)
      res.status(201)
    }
  }
  catch (e) {
    console.log(e);
    res.status(400).end();
  }
};


export const makePayment = async (req: Request, res: Response) => {
  const { token, amount } = await req.body
  if (!token || !amount) throw new Error("Missing payment details")

  try {
      await stripe.charges.create({
          source: token.id,
          amount,
          currency: "eur",
      })
      res.send({
          status: "success",
          error: null,
      })
  } catch (err) {
      if (err instanceof Error) {
          console.log(err)
          res.send({
              status: "failure",
              error: err.message,
          })
      }
  }
}
//change username in auth0 database
const mgmt_api_token = process.env.MANANAGEMENT_API_KEY

export const changeUsername = async (req: Request, res) => {
  const { id } = req.params
  const { nickname } = req.body
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested, Content-Type, Accept Authorization"
  )
  var options = {
    method: 'PATCH',
    url: `https://fitpass.eu.auth0.com/api/v2/users/${id}`,
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${mgmt_api_token}`,
      'cache-control': 'no-cache'
    },
    data: JSON.stringify({ nickname })
  };
  axios.request(options).then(function (response: any) {
    console.log(response)
    res.send(response.data)
  }).catch(function (error: any) {
    console.error(error);
  });
};

//change profile pic in auth0 database
export const changePic = async (req: Request, res) => {
  const { id } = req.params
  const { picture } = req.body

  var options = {
    method: 'PATCH',
    url: `https://fitpass.eu.auth0.com/api/v2/users/${id}`,
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${mgmt_api_token}`,
      'cache-control': 'no-cache'
    },
    data: JSON.stringify({ picture: picture })
  };
  axios.request(options).then(function (response: any) {
    res.send(response.data)
  }).catch(function (error: any) {
    console.error(error);
  });
};

//upload image to cloudinary
export const uploadToCloudinary = async (req, res) => {
  try {
    const fileStr = req.body.data
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: 'fitpass'
    })
    // res.json({msg: "yay"})
    res.send(uploadedResponse)

  } catch (error) {
    console.error(error)
    res.status(500).json({ err: "Something went wrong" })
  }
}
