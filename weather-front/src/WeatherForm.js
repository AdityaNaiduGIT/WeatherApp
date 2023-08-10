import React, { useState } from "react";
import axios from "axios";
import './App.css'

const WeatherForm = ({ onWeatherData }) => {
  const [city, setCity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`/api/weather/?city=${city}`);
      onWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="center-align">
      <form onSubmit={handleSubmit}>
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping">🔍</span>
          <input type="text"
            class="form-control"
            placeholder="Enter city name"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            value={city}
            onChange={(e) => setCity(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-secondary m-3">Get Weather</button>
      </form>
    </div>
  );
};

export default WeatherForm;
