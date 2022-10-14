import mongoose from 'mongoose'
import Favorites from '../Interfaces/Favorites'

const Schema = mongoose.Schema

const FavoriteSchema = new Schema<Favorites>({
  favorited: [{ userId: String, gymClassId: [] }],
})

const Favorite = mongoose.model<Favorites>('Favorite', FavoriteSchema)

export default Favorite