import { Router } from "express";
import {getGymClass, postGymClass, getGymClasses}  from './Controller/postController'
import { deleteFavorite , getBookings, getFavorites, addFavorites, addBookings } from './Controller/userController'

const router = Router()

router.get('/gymclasses', getGymClasses )
router.get('/gymclass/:id', getGymClass)
router.post('/gymclass', postGymClass)
<<<<<<< HEAD
<<<<<<< HEAD
router.get('/users', getUsers)
router.get('/user/:id', getUser )
router.post('/user', postUser)
router.put('/favorites', updateFavorites)
router.put('/bookings', updateBookings)
=======
=======
>>>>>>> backend2
router.get('/favorites/:id', getFavorites )
router.put('/favorites/add/:id', addFavorites)
router.put('/favorites/delete/:id', deleteFavorite)
router.get('/bookings/:id', getBookings )
router.put('/bookings/add/:id', addBookings)
<<<<<<< HEAD
>>>>>>> 0b45901 (come back to it)
=======




router.get('/', (req, res) => {
    res.send('hello from home')
})



>>>>>>> backend2

export default router