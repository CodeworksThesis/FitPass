import { Post } from './Post.d'

export interface User {
    id: string,
    favourites: Post[],
    booked: Post[],
    profilePic:string,
}