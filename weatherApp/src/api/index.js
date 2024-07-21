const baseUrl = "http://api.weatherapi.com/v1/current.json?key=43493a82e76740fcbb875810241907";


export const getWeatherDataForCity =  async (city) => {
    const response = await fetch(`${baseUrl}&q=${city}&aqi=yes`)
    return await response.json();
}

export const getWeatherDataForLocation =  async (lat,lon) => {
    const response = await fetch(`${baseUrl}&q=${lat},${lon}&aqi=yes`)
    return await response.json();
}