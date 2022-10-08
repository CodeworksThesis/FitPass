export const getUserLocation = () => {
    let latitude:number
    let longitude:number
    const success = async (position: GeolocationPosition) => {
        latitude = position.coords.latitude
        longitude = position.coords.longitude
        const locationUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        const response = await fetch(locationUrl)
        const {countryName, countryCode, postcode, city}  = await response.json();
        console.log(countryName, countryCode, longitude, latitude,city)
        return {
            longitude,
            latitude,
            countryName,
            countryCode,
            postcode,
            city
        }
    }
    const error = () => {
        console.log('Unable to retrieve position')
    }
    return navigator.geolocation.getCurrentPosition(success, error);
}

