import { Router } from "express";
import {getGymClass, postGymClass, getGymClasses}  from './Controller/postController'
import {  updateFavorites, updateBookings } from './Controller/userController'

const router = Router()

router.get('/gymclasses', getGymClasses )
router.get('/gymclass/:id', getGymClass)
router.post('/gymclass', postGymClass)
router.put('/favorites', updateFavorites)
router.put('/bookings', updateBookings)




router.get('/', (req, res) => {
    res.send('hello from home')
})




export default router