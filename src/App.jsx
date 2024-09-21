// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Fetch from 'react-fetch';
import City from './components/City';
import Forecast from './components/WeatherForecast';

const API_KEY = 'YOUR_API_KEY_HERE';

const App = () => {

  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  
  return (
    <div className="app-container">
      <City />
      <Forecast />
    </div>
  )
}

export default App