
// copy
// create a fucntion
import {Post} from '../../../globalTypes/Post'


export const isFavorite = (favoriteGymClassDetails:Post[], id:string) =>{

   if(!favoriteGymClassDetails) return;

 const hasId = favoriteGymClassDetails.find(item=>{

    return item.id.toString() === id.toString()
 });


   if(hasId) return true
   else return false;

}

