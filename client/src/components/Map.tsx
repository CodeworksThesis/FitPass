import React, { useState, useEffect, useMemo } from 'react'
import { GoogleMap, useLoadScript, MarkerF, InfoWindow } from '@react-google-maps/api';
import { Post } from '../../../globalTypes/Post.d';
import { formatDate, formatTime } from '../utils/time';
import { isDisplayInfoWindow } from '../utils/location';
import { useNavigate } from 'react-router-dom';

interface locationProps {
  longitude: number,
  latitude: number,
  countryName: string,
  countryCode: string,
  postcode: string,
  city: string
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
  longitude: defaultLocation.longitude,
  latitude: defaultLocation.latitude,
  classDate: new Date(Date.now()),
  exerciseType: '',
  price: '',
  postPic: ''
}

interface IMapProps {
  gymClassList: Post[]
  isHome: boolean
}

export default function Map({ gymClassList, isHome }: IMapProps) {
  const [location, setLocation] = useState<locationProps>(defaultLocation)
  const [selectedMarker, setSelectedMarker] = useState<Post>(initialMarker)
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLEMAP_APIKEY as string
  })
  const navigate = useNavigate()

  // useMemo to prevent the map from re-centering on every re-render

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude
      const locationUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`

      try {
        const response = await fetch(locationUrl)
        const { countryName, countryCode, postcode, city } = await response.json();
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
  }, [])

  const center = isHome
    ? useMemo(() => ({ lat: location.latitude, lng: location.longitude }), [location])
    : { lat: gymClassList[0].latitude, lng: gymClassList[0].longitude }

  const handleClick = (post: Post) => {
    setSelectedMarker(post)
  }
  if (!isLoaded) {
    return <div>Loading...</div>
  }

  return (
    <div className="rounded-lg overflow-hidden h-full">
      {isLoaded &&
        <GoogleMap
          zoom={11}
          center={center}
          mapContainerClassName="w-full h-full overflow-hidden"
          onClick={() => setSelectedMarker(initialMarker)}
        >
          {gymClassList && gymClassList.map((post) => (
            // note for react18 use MarkerF instead of Marker
            <MarkerF
              key={post.id}
              position={{ lat: post.latitude, lng: post.longitude }}
              onMouseOver={() => handleClick(post)}
            />))}
          {
            isDisplayInfoWindow(selectedMarker) && (
              <InfoWindow
                position={{ lat: selectedMarker.latitude, lng: selectedMarker.longitude }}
                onCloseClick={() => setSelectedMarker(initialMarker)}
              >
                <div
                  className="flex flex-col w-48 h-48 rounded-md cursor-pointer"
                  onClick={() => navigate(`/gymclass/${selectedMarker.id}`)}
                >
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