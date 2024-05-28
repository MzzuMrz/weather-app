import React from "react";
import "../styles/components/currentWeather.scss";

function CurrentWeather({ weather }) {
  if (!weather) {
    return <p>Loading weather data...</p>; // Maneja el caso de que no hay datos disponibles
  }

  const { temp, city, description, date, time, icon } = weather;

  return (
    <div className="current-weather">
      <div className="current-weather__temperature">{Math.round(temp)}°</div>
      <div className="current-weather__info">
        <p className="current-weather__city">{city}</p>
        <div className="current-weather__datetime">
          <p className="current-weather__time">{time}</p>
          <p className="current-weather__date">{date}</p>
        </div>
      </div>
      <div className="current-weather__icon">
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
        />
      </div>
    </div>
  );
}

export default CurrentWeather;
