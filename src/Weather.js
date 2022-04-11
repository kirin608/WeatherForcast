import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Weather = props => {

  const [weatherData, setWeatherData] = useState()

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  async function getWeather(pos) {
    const crd = pos.coords;
    const latitude = crd.latitude
    const longitude = crd.longitude

    const weatherData = await axios.get( `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York`);
    setWeatherData(weatherData.data)
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect(() => navigator.geolocation.getCurrentPosition(getWeather, error, options), []);

  return React.cloneElement(props.children, weatherData)
}

export default Weather;