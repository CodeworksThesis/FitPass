export const getUserLocation = () => {
    let latitude:number
    let longitude:number

    if(navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition(async (position) => {
            latitude = position.coords.latitude
            longitude = position.coords.longitude
            const locationUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
            const response = await fetch(locationUrl)
            const {countryName, countryCode, postcode, city}  = await response.json();
            console.log(countryName, longitude, latitude)
            return {
                longitude,
                latitude,
                countryName,
                countryCode,
                postcode,
                city
            }
        })
    }
}
