// eslint-disable-next-line no-unused-vars
import React from 'react';
import './WeatherCondition.css';

const WeatherCondition = ({ condition }) => (
  <div className="condition">
    <p>{condition}</p>
  </div>
);

export default WeatherCondition;