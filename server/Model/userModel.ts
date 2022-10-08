import mongoose from 'mongoose'
import User from '../Interfaces/User'

const Schema = mongoose.Schema

const UserSchema = new Schema<User>({
  id:{type:String, required:true},
  favorites:{type:[String], required:true},
  booked:{type: [String], required:true},
  profilePic:{type:String, required:true}
})

const User = mongoose.model<User>('User', UserSchema)

export default User 