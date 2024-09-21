// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import City from './components/City';
import Temperature from './components/Temperature';
import WeatherCondition from './components/WeatherCondition';
import WeatherIcon from './components/WeatherIcon';

const API_KEY = 'YOUR_API_KEY';

const App = () => {

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=New%20York&appid=${API_KEY}&units=metric`)
      .then(response => response.json())
      .then(data => setWeatherData(data));
  }, []);

  if (!weatherData) return <div>Loading...</div>;

  const { name, main, weather } = weatherData;
  const temp = main.temp;
  const condition = weather[0].main;
  const icon = weather[0].icon;

  return (
    <div className="app-container">
      <City name={name} />
      <Temperature temp={temp} />
      <WeatherCondition condition={condition} />
      <WeatherIcon icon={icon} />
    </div>
  )
}

export default App