import React, {useState, useEffect, useContext, createContext, ReactNode, useMemo} from 'react'

const defaultLocation = {
    longitude: 2.2,
    latitude: 41.4,
    countryName: '',
    countryCode: '',
    postcode: '',
    city: ''
}

// export const LocationContext = createContext(defaultLocation)

// export const LocationProvider = ({children}:{children: ReactNode}) => {
//     const [location, setLocation] = useState(defaultLocation)
//     const [loading, setLoading] = useState(false)
    
//     useEffect(() => {
//         navigator.geolocation.getCurrentPosition(async (position) => {
//           const latitude = position.coords.latitude
//           const longitude = position.coords.longitude
//           const locationUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`

//           try {
//             setLoading(true)
//             const response = await fetch(locationUrl)
//             const {countryName, countryCode, postcode, city}  = await response.json();
//             setLocation({
//                 longitude,
//                 latitude,
//                 countryName,
//                 countryCode,
//                 postcode,
//                 city
//             })
//           } catch (error) {
//             console.log(error)
//           } finally {
//             setLoading(false)
//           }
//         })
//       },[])

//       const memoedValue = useMemo(()=> ({
//         location,
//         loading
//       }),[location, loading])

//       return (
//         <LocationContext.Provider value={memoedValue}>
//             {children}
//         </LocationContext.Provider>
//       )
// }

// export const useLocation() {
//     return useContext(LocationContext)
// }
