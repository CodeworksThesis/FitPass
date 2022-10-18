import { Router } from "express";
import { getGymClass, postGymClass, getGymClasses } from './Controller/postController'
import { getFavoritesDetails, deleteFavorite, getBookings, getFavorites, addFavorites, addBookings, makePayment, getBookingsDetails, changeUsername} from './Controller/userController'
// import { deleteFavorite, getBookings, getFavorites, addFavorites, addBookings, changeUsername } from './Controller/userController'

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
router.get('/bookings/details/:id', getBookingsDetails)
router.post('/payment', makePayment)
router.patch('/change/username/:id', changeUsername)

export default router