import { Router } from "express";
import {getGymClass, postGymClass}  from './Controller/postController'
import {getUser, postUser, updateUser } from './Controller/userController'

const router = Router()

router.get('/gymclass', getGymClass )
router.post('/gymclass', postGymClass)
router.get('/user', getUser )
router.post('/user', postUser)
router.put('/user', updateUser)

export default router