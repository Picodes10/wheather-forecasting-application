// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Temperature.css';

const Temperature = ({ temp }) => (
  <div className="temperature">
    <h2>{temp}°C</h2>
  </div>
);

export default Temperature;