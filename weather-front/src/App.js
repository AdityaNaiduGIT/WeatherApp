import React, { useState } from "react";
import WeatherForm from "./WeatherForm";
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const handleWeatherData = (data) => {
    setWeatherData(data);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <WeatherForm onWeatherData={handleWeatherData} />
      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
};

export default App;
