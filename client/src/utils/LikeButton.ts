
// copy
// create a fucntion
import {Post} from '../../../globalTypes/Post'


export const isFavorite = (favoriteGymClassDetails:Post[], id:string) =>{

 const findId = favoriteGymClassDetails.find(item=>{
    console.log(item.id.toString() === id.toString())
    console.log('this is id', id)
    console.log('this is item.id', item.id)
    return item.id.toString() === id.toString()
 })
  if(findId) return true;
  else return false;
}

