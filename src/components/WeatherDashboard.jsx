import React, { useState, useCallback } from "react";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";
import SearchBar from "./SearchBar";
import "../styles/components/weatherDashboard.scss";

function WeatherDashboard() {
  const [currentWeather, setCurrentWeather] = useState({
    temp: 16,
    feels_like: 15,
    temp_min: 10,
    temp_max: 20,
    city: "London",
    description: "Cloudy",
    icon: "04d",
    humidity: 80,
    windSpeed: 5,
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
  });

  const [forecast, setForecast] = useState([]);

  const handleSearch = useCallback(async (city) => {
    const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok) {
        setCurrentWeather({
          temp: data.main.temp,
          feels_like: data.main.feels_like,
          temp_min: data.main.temp_min,
          temp_max: data.main.temp_max,
          city: data.name,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),
        });
        setForecast([
          {
            maxTemp: data.main.temp_max,
            minTemp: data.main.temp_min,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            day: "Today",
            detail: data.weather[0].description.toUpperCase(),
          },
        ]);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setCurrentWeather(null);
      setForecast([]);
    }
  }, []);

  return (
    <div className="weather-dashboard">
      <div className="weather-forecast-dashboard__searchbar">
        <SearchBar onSearch={handleSearch} />
      </div>
      <CurrentWeather weather={currentWeather} />
      <WeatherForecast onSearch={handleSearch} forecast={forecast} />
    </div>
  );
}

export default WeatherDashboard;
