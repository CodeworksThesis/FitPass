import { Router } from "express";
import { getGymClass, postGymClass, getGymClasses } from './Controller/postController'
import { deleteFavorite, getBookings, getFavorites, addFavorites, addBookings, makePayment } from './Controller/userController'
import { getClasses } from './Controller/searchController'

const router = Router()

router.get('/gymclasses', getGymClasses)
router.get('/gymclass/:id', getGymClass)
router.post('/gymclass', postGymClass)
router.get('/favorites/:id', getFavorites)
router.put('/favorites/add/:id', addFavorites)
router.put('/favorites/delete/:id', deleteFavorite)
router.get('/bookings/:id', getBookings)
router.put('/bookings/add/:id', addBookings)
router.post('/payment', makePayment)
router.get('/search', getClasses) 

export default router