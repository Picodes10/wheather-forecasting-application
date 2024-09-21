// eslint-disable-next-line no-unused-vars
import React from 'react';
import './WeatherIcon.css';

const WeatherIcon = ({ icon }) => (
  <div className="icon">
    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather icon" />
  </div>
);

export default WeatherIcon;