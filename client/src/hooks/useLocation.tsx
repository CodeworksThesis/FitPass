import React from "react";
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

export interface locationProps {
    longitude: number,
    latitude: number,
    countryName: string,
    countryCode: string,
    postcode: string,
    city: string
  }
export const defaultLocation = {
    longitude: 2.2,
    latitude: 41.4,
    countryName: '',
    countryCode: '',
    postcode: '',
    city: ''
  }

interface Props {
    location: locationProps,
    setLocation: React.Dispatch<React.SetStateAction<locationProps>>
  }
  
const LocationContext = createContext<Props>({
    location: defaultLocation,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setLocation: () => {}
  })

export const LocationProvider = ({children}: {children: React.ReactNode}) => {
    const [location, setLocation] = useState<locationProps>(defaultLocation)
    const { user } = useAuth0()

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
      }, [user])

      const memoedValue = useMemo(() => ({
        location,
        setLocation
      }), [location])
    
      return (
        <LocationContext.Provider value={memoedValue}>
          {children}
        </LocationContext.Provider>
      )
}

export function useLocation() {
    return useContext(LocationContext);
  }