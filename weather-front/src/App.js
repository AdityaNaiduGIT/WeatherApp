import React, { useState } from "react";
import WeatherForm from "./WeatherForm";
import WeatherDisplay from "./WeatherDisplay";
import { Navbar } from "./Components/Navbar";
import {Animation} from './Components/WeatherAnimation/Animation'
import "./App.css"

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const handleWeatherData = (data) => {
    setWeatherData(data);
  };

  return (
    <div>
      <Navbar />
      <Animation/>
      <WeatherForm onWeatherData={handleWeatherData} />
      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
};

export default App;
