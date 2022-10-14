import { Router } from "express";
import {getGymClass, postGymClass, getGymClasses}  from './Controller/postController'
import {getUser, postUser, updateFavorites, updateBookings, getUsers} from './Controller/userController'

const router = Router()

router.get('/gymclasses', getGymClasses )
router.get('/gymclass/:id', getGymClass)
router.post('/gymclass', postGymClass)
router.get('/users', getUsers)
router.get('/user/:id', getUser )
router.post('/user', postUser)
router.put('/favorites', updateFavorites)
router.put('/bookings', updateBookings)

export default router