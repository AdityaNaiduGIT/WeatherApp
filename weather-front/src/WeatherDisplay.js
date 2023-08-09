import React from "react";

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) {
    return null;
  }

  return (
    <div>
      <h2>Weather Information</h2>
      <p>City: {weatherData.name}</p>
      <p>Temperature: {weatherData.main.temp} K</p>
      <p>Weather: {weatherData.weather[0].description}</p>
      {/* Add more fields as needed */}
    </div>
  );
};

export default WeatherDisplay;
