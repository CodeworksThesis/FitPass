import Post from './Post'

export default interface User {
  id: string,
  favorites: Post[],
  booked: Post[],
  profilePic: string
}