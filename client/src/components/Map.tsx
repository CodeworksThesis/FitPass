import React, { useState, useEffect } from 'react'
import { GoogleMap, useLoadScript, MarkerF, InfoWindow } from '@react-google-maps/api';
import { GymClass } from '../mocks/GymClassMock';
import { Post } from '../../../globalTypes/Post.d';

interface locationProps {
  longitude:number,
  latitude:number,
  countryName:string,
  countryCode:string,
  postcode:string,
  city:string
}

const initialMarker = {
    id: '',
    studioName: '',
    exerciseName: '',
    desc: '',
    duration: 0, // minutes
    longitude:0,
    latitude:0,
    classDate: new Date(Date.now()),
    exerciseType: '',
    price: '',
    postPic:''
}

const defaultLocation = {
  longitude: 2.2,
  latitude: 41.4,
  countryName: '',
  countryCode: '',
  postcode: '',
  city: ''
}

export default function Map() {
  const [location, setLocation] = useState<locationProps>(defaultLocation)
  const [selectedMarker, setSelectedMarker] = useState<Post>(initialMarker)
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAAQdJfud-NUJMImn5ldx-qqPfLufk4RwI"
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

  

  const handleClick= (post:Post) => {
    setSelectedMarker(post)  
  }

  if(!isLoaded) return <div>Loading...</div>
  
  return (
    <>
    { isLoaded &&
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
        onClick={() => handleClick(post)}
      />))}
      {
        selectedMarker && (
          <InfoWindow position={{lat: selectedMarker.latitude, lng: selectedMarker.longitude}}>
            <div className="flex flex-col w-24 h-24 rounded-md">
              <h2 className="text-bold">{selectedMarker.exerciseName}</h2>
              <p>{selectedMarker.studioName}</p>
            </div>
          </InfoWindow>
        )
        }
    </GoogleMap>}
  </>
  )
}