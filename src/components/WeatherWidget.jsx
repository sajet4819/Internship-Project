import React, { useEffect, useState } from "react";
import axios from "axios";

const WeatherWidget = ({ location = "Pune" }) => { // ✅ Default location set to Pune
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const API_KEY = "4a3c9c916e6b76f11ab5a17b1154a51b"; // ✅ Your API key

  useEffect(() => {
    const fetchWeather = async () => {
      if (!location || location.trim() === "") {
        setError("Invalid location.");
        return;
      }

      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather`,
          {
            params: {
              q: location,
              appid: API_KEY,
              units: "metric",
            },
          }
        );

        setWeather(response.data);
        setError(null);
      } catch (err) {
        console.error("Weather API Error:", err.response || err.message);
        
        if (err.response) {
          if (err.response.status === 401) {
            setError("Invalid API key. Please check your OpenWeather API key.");
          } else if (err.response.status === 404) {
            setError("City not found. Try another location.");
          } else {
            setError("Failed to fetch weather data. Try again later.");
          }
        } else {
          setError("Network error. Please check your connection.");
        }
      }
    };

    fetchWeather();
  }, [location]);

  return (
    <div className="card p-3 mb-3">
      <h5>Weather in {location}</h5>
      {error ? (
        <p className="text-danger">{error}</p>
      ) : weather ? (
        <p>{weather.main.temp}°C, {weather.weather[0].description}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherWidget;
