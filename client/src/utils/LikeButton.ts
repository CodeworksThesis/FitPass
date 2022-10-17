
// copy
// create a fucntion
import {Post} from '../../../globalTypes/Post'


export const isFavorite = (favoriteGymClassDetails:Post[], id:string) =>{

   if(!favoriteGymClassDetails) return;

 const hasId = favoriteGymClassDetails.find(item=>{

    return item.id.toString() === id.toString()
 });

 // console.log({hasId, id, favoriteGymClassDetails})


   if(hasId) return true
   else return false;
   

}

