import { Router } from "express";
import {getGymClass, postGymClass, getGymClasses}  from './Controller/postController'
import {getUser, postUser, updateFavorites, updateBookings, getUsers} from './Controller/userController'

const router = Router()
const { expressjwt: jwt } = require("express-jwt")
const jwks = require('jwks-rsa')
const axios = require('axios')
require('dotenv').config()

router.get('/gymclasses', getGymClasses )
router.get('/gymclass/:id', getGymClass)
router.post('/gymclass', postGymClass)
router.put('/favorites', updateFavorites)
router.put('/bookings', updateBookings)



router.get('/', (req, res) => {
    res.send('hello from home')
})

    //get user info from jwt
    // try {
    //     const accessToken = req.headers.authorization?.split(' ')[1]
    //     const user = await axios.get('https://fitpass.eu.auth0.com/userinfo', {
    //         headers: {
    //             'authorization': `Bearer ${accessToken}`,
    //             'content-type': 'application/json'
    //         }
    //     })
    //     const userInfo = user.data
    //     //user id
    //     const userId = userInfo.sub.split('|')[1]
    //     console.log(userId)
    //     res.send(userInfo)
    // } catch (error: any) {
    //     res.send(error.message)
    // }

// router.get('/gymclass', getGymClass )
// router.post('/gymclass', postGymClass)


export default router