import React from "react";
import './WeatherDisplay.css'

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) {
    return null;
  }

  const {
    city,
    current: { temp, feels_like, pressure, humidity, description },
    wind: { speed, deg },
    clouds: { all },
    sys: { country, sunrise, sunset },
    timezone,
  } = weatherData;

  return (
    <div className="card">
    <div className="card-header">
      <h2>Weather Information for {city}</h2>
      <div className="card-content">
        <h3>Current Weather</h3>
        <p>Temperature: {temp} °C</p>
        <p>Feels Like: {feels_like} °C</p>
        <p>Pressure: {pressure} hPa</p>
        <p>Humidity: {humidity}%</p>
        <p>Description: {description}</p>

        <h3>Wind</h3>
        <p>Speed: {speed} m/s</p>
        <p>Degrees: {deg}</p>

        <h3>Clouds</h3>
        <p>All: {all}%</p>

        <h3>Sunrise and Sunset</h3>
        <p>Country: {country}</p>
        <p>Sunrise: {new Date(sunrise * 1000).toLocaleTimeString()}</p>
        <p>Sunset: {new Date(sunset * 1000).toLocaleTimeString()}</p>

        <h3>Timezone</h3>
        <p>Timezone Offset: {timezone}</p>
        </div>
    </div>
    </div>
  );
};

export default WeatherDisplay;
