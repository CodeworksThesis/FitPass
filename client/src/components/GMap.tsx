import React, { useState, useEffect } from 'react'
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import { GymClass } from '../mocks/GymClassMock'

interface locationProps {
  longitude:number,
  latitude:number,
  countryName:string,
  countryCode:string,
  postcode:string,
  city:string
}

export default function GMap() {
  const [location, setLocation] = useState<locationProps>({
    longitude: 2.2,
    latitude: 41.4,
    countryName: '',
    countryCode: '',
    postcode: '',
    city: ''
  })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude
      const locationUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
      
      try {
        const response = await fetch(locationUrl)
        const {countryName, countryCode, postcode, city}  = await response.json();
        setLocation({
            longitude,
            latitude,
            countryName,
            countryCode,
            postcode,
            city
        })
      } catch (error) {
        console.log(error)
      }
    })
  },[])

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAAQdJfud-NUJMImn5ldx-qqPfLufk4RwI"
  })

  // const handleClick= (post:Post) => {
  //   return (
  //     <InfoBox>
  //       {post.exerciseName}
  //     </InfoBox>
  // )}


  if(!isLoaded) return <div>Loading...</div>
  
  return (
    <GoogleMap 
      zoom={13} 
      center={{lat: location.latitude, lng: location.longitude }}
      mapContainerClassName="w-full h-[50%]"
    >
      {GymClass.map((post, index) => (
        // note for react18 use MarkerF instead of Marker
      <MarkerF 
        key = {index}
        position={{ lat: post.latitude, lng: post.longitude}}
        visible
        draggable
      />
      ))}
    </GoogleMap>
  )
}