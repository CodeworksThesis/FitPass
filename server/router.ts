import { Router } from "express";
import {getGymClass, postGymClass}  from './Controller/index'

const router = Router()

const { expressjwt: jwt } = require("express-jwt")
const jwks = require('jwks-rsa')
const axios = require('axios')
const { jwtCheck } = require('./Middleware/check-jwt')
require('dotenv').config()


router.get('/', (req, res) => {
    res.send('hello from home')
})

router.get('/profile', jwtCheck, async (req, res) => { 
    //get user info from jwt 
    try {
        const accessToken = req.headers.authorization?.split(' ')[1]
        const user = await axios.get('https://fitpass.eu.auth0.com/userinfo', {
            headers: {
                'authorization': `Bearer ${accessToken}`,
                'content-type': 'application/json'
            }
        })
        const userInfo = user.data
        //user id 
        const userId = userInfo.sub.split('|')[1]
        console.log(userId)
        res.send(userInfo)
    } catch (error: any) {
        res.send(error.message)
    }
})

// router.get('/gymclass', getGymClass )
// router.post('/gymclass', postGymClass)


export default router