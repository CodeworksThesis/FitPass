export const baseURL = 'https://fitpass-server.herokuapp.com/'

export const getFavorites = async (userId: string) => {
  if (!userId) return;
  try {
    const response = await fetch(baseURL + `favorites/${userId}`)
    const json = await response.json()
    return json.data;
  }
  catch (e) {
    console.error('getFavorites', e)
  }
}

export const getFavoritesDetails = async (userId: string) => {
  if (!userId) return;
  try {
    const response = await fetch(baseURL + `favorites/details/${userId}`)
    const json = await response.json()
    return json;
  }
  catch (e) {
    console.error('getFavorites', e)
  }
}

export const deleteFavorite = async (userId: string, gymClassId: string) => {
  if (!userId || !gymClassId) return;
  try {
    const response = await fetch(baseURL + `favorites/delete/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ gymClassId })
    })
    const data = await response.json()
    return data;
  }
  catch (e) {
    console.log(e)
  }
}

export const addFavorites = async (userId: string, gymClassId: string) => {
  if (!userId || !gymClassId) return;
  try {
    const response = await fetch(baseURL + `favorites/add/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ gymClassId })
    })
    const data = await response.json()
    return data;
  }
  catch (e) {
    console.log(e)
  }
}

export const getBookings = async (userId: string) => {
  if (!userId) return;
  try {
    const response = await fetch(baseURL + `bookings/${userId}`)
    const json = await response.json()
    return json.data;
  }
  catch (e) {
    console.error('getBookings', e)
  }
}

export const getBookingsDetails = async (userId: string) => {
  if (!userId) return;
  try {
    const response = await fetch(baseURL + `bookings/details/${userId}`)
    const json = await response.json()
    return json;
  }
  catch (e) {
    console.error('getBookings', e)
  }
}

export const addBookings = async (userId: string, gymClassId: string) => {
  if (!userId || !gymClassId) return;
  try {
    const response = await fetch(baseURL + `bookings/add/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ gymClassId })
    })
    const data = await response.json()
    return data;
  }
  catch (e) {
    console.log(e)
  }
}

export const getGymClasses = async (latitude?:number, longitude?:number) => {
  try {
    const response = await fetch(baseURL + `gymclasses?latitude=` + latitude + `&longitude=`+ longitude)
    const {data} = await response.json()
    return data;
  }
  catch (e) {
    console.log(e)
  }
}

export const getGymClass = async (gymClassId: string) => {
  if (!gymClassId) return;
  try {
    const response = await fetch(baseURL + `gymclass/${gymClassId}`)
    const data = await response.json()
    return data;
  }
  catch (e) {
    console.log(e)
  }
}

export const getSearchGymClassResults = async (search:string, categoryString:string, location:string ,maxPrice:number, dayString:string) => {
  try{
    const response = await fetch( baseURL + 'search?general=' + search + '&exerciseType=' + categoryString + '&location=' + location + '&price=' + maxPrice + '&day=' + dayString);
    const json = await response.json()
    return json;
  } catch (error) {
    console.log(error)
  }
}
