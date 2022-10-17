import { Router } from "express";
import { getGymClass, postGymClass, getGymClasses } from './Controller/postController'
import { getFavoritesDetails, deleteFavorite, getBookings, getFavorites, addFavorites, addBookings, makePayment } from './Controller/userController'

const router = Router()

router.get('/gymclasses', getGymClasses)
router.get('/gymclass/:id', getGymClass)
router.post('/gymclass', postGymClass)
router.get('/favorites/:id', getFavorites)
router.put('/favorites/add/:id', addFavorites)
router.put('/favorites/delete/:id', deleteFavorite)
router.get('/favorites/details/:id', getFavoritesDetails )
router.get('/bookings/:id', getBookings)
router.put('/bookings/add/:id', addBookings)
router.post('/payment', makePayment)

export default router