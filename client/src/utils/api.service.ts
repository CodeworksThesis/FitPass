const baseURL= 'http://localhost:3001/'

export const getFavorites = async (userId:string)=> {
  if(!userId) return;
  try{
    const response = await fetch(baseURL + `favorites/${userId}`)
    const data= await response.json()
    return data;
  }
  catch(e){
    console.log(e)
  }
}

export const deleteFavorite = async(userId:string, gymClassId:string) =>{
  if(!userId || !gymClassId) return;
  try{
      const response = await fetch(baseURL + `favorites/delete/${userId}`,{
        method:'PUT',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({gymClassId})
      })
      const data= await response.json()
      return data;
    }
    catch(e){
      console.log(e)
    }

}

export const addFavorites = async (userId:string, gymClassId: string)=> {
  if(!userId || !gymClassId) return;
  try{
    const response = await fetch(baseURL + `favorites/add/${userId}`,{
      method:'PUT',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({gymClassId})
    })

    const data = await response.json()
    return data;

  }
  catch(e){
    console.log(e)
  }
}

export const getBookings = async (userId:string)=> {
  if(!userId) return;
  try{
    const response = await fetch(baseURL + `bookings/${userId}`)
    const data = await response.json()
    return data;
  }
  catch(e){
    console.log(e)
  }


}

export const addBookings = async (userId:string, gymClassId: string)=> {
  if(!userId || !gymClassId) return;
  try{
    const response = await fetch(baseURL + `bookings/add/${userId}`,{
      method:'PUT',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({gymClassId})
    })
    const data = await response.json()
    return data;
  }
  catch(e){
    console.log(e)
  }
}


export const getGymClasses = async ()=> {

  try{
    const response = await fetch(baseURL + `gymclasses`)
    const data = await response.json()
    return data;

  }
  catch(e){
    console.log(e)
  }


}

export const getGymClass = async (gymClassId:string)=> {
  if(!gymClassId) return;
  try{
    const response = await fetch(baseURL + `gymclass/${gymClassId}`)
    const data = await response.json()
    return data;

  }
  catch(e){
    console.log(e)
  }


}


