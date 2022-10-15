import mongoose from "mongoose";
import Post from '../Interfaces/Post'

const Schema = mongoose.Schema

const PostSchema = new Schema<Post>({
  id: { type: String, required: true },
  studioName: { type: String, required: true },
  exerciseName: { type: String, required: true },
  desc: { type: String, required: true },
  duration: { type: Number, required: true },
  location: { type: String, required: true },
  longitude: { type: Number, required: true },
  latitude: { type: Number, required: true },
  classDate: { type: Date, required: false },
  exerciseType: { type: String, required: true },
  price: { type: String, required: true },
  postPic: { type: String, required: true }
})

const Post = mongoose.model<Post>('Post', PostSchema)

export default Post

