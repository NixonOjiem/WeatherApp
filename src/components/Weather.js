
//The Weather component takes the weather data and disp
import React from 'react';

const Weather = ({ data }) => {
  return (
    <div className="weather">
      <h2>{data.name}</h2>
      <p>{data.weather[0].description}</p>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
    </div>
  );
};

export default Weather;
