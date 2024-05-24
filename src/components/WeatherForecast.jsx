// src/components/WeatherForecast.jsx
import React from "react";
import SearchBar from "./SearchBar";
import "../styles/components/weatherForecast.scss";
import {
  FaCloud,
  FaTemperatureHigh,
  FaTemperatureLow,
  FaWater,
  FaWind,
} from "react-icons/fa";

function WeatherDetail({ label, value, Icon, color }) {
  return (
    <div className="detail__info">
      <div>{label}</div>
      <div className="detail__icon">
        <p>{value}</p>
        <Icon color={color} size={24} />
      </div>
    </div>
  );
}

function HourlyForecast({ time, weatherType, temp, Icon }) {
  return (
    <div className="hourly__info">
      <div className="hourly__box">
        <Icon size={36} />
        <div className="hourly__detail">
          <p>{time}</p>
          <p>{weatherType}</p>
        </div>
      </div>
      <div className="hourly__temp">
        <p>{temp}</p>
      </div>
    </div>
  );
}

function WeatherForecast({ forecast, onSearch }) {
  // Datos hardcodeados de forecast y hourlyForecast si no están presentes en el payload
  const dailyForecast = forecast.length
    ? forecast
    : [
        {
          maxTemp: 28,
          minTemp: 22,
          humidity: 70,
          windSpeed: 15,
          day: "Monday",
          detail: "THUNDERSTORM WITH LIGHT FRIZZE",
        },
      ];

  const hourlyForecast = [
    {
      time: "12:00",
      weatherType: "Partly Cloudy",
      temp: "19°C",
    },
    {
      time: "13:00",
      weatherType: "Partly Cloudy",
      temp: "20°C",
    },
    {
      time: "14:00",
      weatherType: "Partly Cloudy",
      temp: "21°C",
    },
    {
      time: "15:00",
      weatherType: "Partly Cloudy",
      temp: "22°C",
    },
    {
      time: "16:00",
      weatherType: "Cloudy",
      temp: "21°C",
    },
    {
      time: "17:00",
      weatherType: "Cloudy",
      temp: "20°C",
    },
    {
      time: "18:00",
      weatherType: "Cloudy",
      temp: "19°C",
    },
    {
      time: "19:00",
      weatherType: "Cloudy",
      temp: "18°C",
    },
    {
      time: "20:00",
      weatherType: "Cloudy",
      temp: "17°C",
    },
    {
      time: "21:00",
      weatherType: "Rain",
      temp: "16°C",
    },
    {
      time: "22:00",
      weatherType: "Rain",
      temp: "15°C",
    },
    {
      time: "23:00",
      weatherType: "Rain",
      temp: "14°C",
    },
    {
      time: "00:00",
      weatherType: "Rain",
      temp: "13°C",
    },
  ];

  return (
    <div className="weather-forecast">
      <div className="weather-forecast__searchbar">
        <SearchBar onSearch={onSearch} />
      </div>
      <h1 className="weather-forecast__title">Weather Details...</h1>

      <div className="weather-forecast__details">
        {dailyForecast.map((item, index) => (
          <div key={index} className="daily-forecast">
            <p className="weather-forecast__detail">{item.detail}</p>
            <WeatherDetail
              label="Max Temp"
              value={`${item.maxTemp}°C`}
              Icon={FaTemperatureHigh}
              color="DFA1A1"
            />
            <WeatherDetail
              label="Min Temp"
              value={`${item.minTemp}°C`}
              Icon={FaTemperatureLow}
              color="6D97CA"
            />
            <WeatherDetail
              label="Humidity"
              value={`${item.humidity}%`}
              Icon={FaWater}
              color="DFA1A1"
            />
            <WeatherDetail
              label="Cloudy"
              value={`${item.humidity}%`}
              Icon={FaCloud}
            />
            <WeatherDetail
              label="Wind Speed"
              value={`${item.windSpeed} km/h`}
              Icon={FaWind}
            />
          </div>
        ))}
      </div>
      <hr className="weather-forecast__divider" />
      <p className="weather-forecast__title2">Today’s Weather Forecast...</p>
      <div className="weather-forecast__hourly">
        {hourlyForecast.map((d, index) => (
          <HourlyForecast
            key={index}
            time={d.time}
            weatherType={d.weatherType}
            temp={d.temp}
            Icon={FaTemperatureLow}
          />
        ))}
      </div>
    </div>
  );
}

export default WeatherForecast;
