import mongoose from 'mongoose'
import Bookings from '../Interfaces/Bookings'
import Favorites from '../Interfaces/Favorites'
import { Favorite } from '../Interfaces/Favorites'

const Schema = mongoose.Schema

const BookingSchema = new Schema<Bookings>({
  booked:{type: [], required:true},
})

const Booking = mongoose.model<Bookings>('Booking', BookingSchema)

export default Booking