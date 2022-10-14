
export interface Favorite{
  userId: string,
  gymClassId: string[],
}
export default interface Favorites {
  favorited: Favorite[],
}