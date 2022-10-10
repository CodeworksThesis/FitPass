import React,{useState, useEffect} from 'react';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import { GymClass } from '../mocks/GymClassMock'

interface locationProps {
  longitude:number,
  latitude:number,
  countryName:string,
  countryCode:string,
  postcode:string,
  city:string
}

export default function OpenMap() {
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


  return (
    <MapContainer center={[location.latitude,location.longitude]} zoom={13} scrollWheelZoom={false} className="w-[100%] h-[50%]">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        GymClass.map((post,index) => (
        <Marker key={index} position={[post.latitude, post.longitude]}>
          <Popup>
            {post.exerciseName}
          </Popup>
        </Marker>))
      }
  </MapContainer>
  )
}