import React, { useState, useEffect, useMemo } from 'react'
import { GoogleMap, useLoadScript, MarkerF, InfoWindow } from '@react-google-maps/api';
import { GymClass } from '../mocks/GymClassMock';
import { Post } from '../../../globalTypes/Post.d';
import { formatDate, formatTime} from '../utils/time';
import { isDisplayInfoWindow } from '../utils/location';
interface locationProps {
  longitude:number,
  latitude:number,
  countryName:string,
  countryCode:string,
  postcode:string,
  city:string
}
const defaultLocation = {
  longitude: 41.4,
  latitude: 2.2,
  countryName: '',
  countryCode: '',
  postcode: '',
  city: ''
}

const initialMarker = {
    id: '',
    studioName: '',
    exerciseName: '',
    desc: '',
    duration: 0, // minutes
    longitude:defaultLocation.longitude,
    latitude:defaultLocation.latitude,
    classDate: new Date(Date.now()),
    exerciseType: '',
    price: '',
    postPic:''
}



export default function Map() {
  const [location, setLocation] = useState<locationProps>(defaultLocation)
  const [selectedMarker, setSelectedMarker] = useState<Post>(initialMarker)
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLEMAP_APIKEY as string
  })
  const center = useMemo(() => ({lat:location.latitude, lng:location.longitude}),[location]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude
      const locationUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
      
      try {
        const response = await fetch(locationUrl)
        const { countryName, countryCode, postcode, city }  = await response.json();
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
    <div className="rounded-lg overflow-hidden">
    { isLoaded && 
    <GoogleMap 
      zoom={13}
      center={center}
      mapContainerClassName="w-full h-[30rem] mt-[10%] overflow-hidden"
      onClick={() => setSelectedMarker(initialMarker)}
    >
      {GymClass && GymClass.map((post, index) => (
        // note for react18 use MarkerF instead of Marker
      <MarkerF 
        key = {index}
        position={{ lat: post.latitude, lng: post.longitude}}
        onMouseOver={() => handleClick(post)}
      />))}
      {
        isDisplayInfoWindow(selectedMarker) && (
          <InfoWindow 
            position={{lat: selectedMarker.latitude, lng: selectedMarker.longitude}}
            onCloseClick={() => setSelectedMarker(initialMarker)}
          >
            <div className="flex flex-col w-48 h-48 rounded-md cursor-pointer">
              <div className="w-full h-[50%] overflow-hidden rounded-lg">
                <img src={selectedMarker.postPic} alt={selectedMarker.exerciseName} className="w-full h-full object-cover" />
              </div>
              <h2 className="font-bold text-xl">{selectedMarker.exerciseName}</h2>
              <p className="text-sm">{selectedMarker.studioName}</p>
              <p className="text-sm">{formatDate(selectedMarker.classDate)}</p>
              <p className="text-sm">{formatTime(selectedMarker.classDate)}</p>
            </div>
          </InfoWindow>
        )
        }
    </GoogleMap>}
  </div>
  )
}