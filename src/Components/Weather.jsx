import React, { useEffect, useState } from 'react';
import clear from '../assets/clear.png';
import drizzle from '../assets/drizzle.png';
import cloud from '../assets/cloud.png';
import search from '../assets/search.png';
import humidity from '../assets/humidity.png';
import wind from '../assets/wind.png';

const apiKey = "ec84b9f2c438c9d2daeaa5ed2cba3001";

const Weather = () => {
  const [city, setCity] = useState("Karachi");
  const [temperature, setTemperature] = useState(null);
  const [humidityData, setHumidity] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(cloud);
  const [error, setError] = useState(null);

  const weatherSearch = async (cityName) => {
    setError(null); 
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${apiKey}&units=metric`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod === 200) {
        setTemperature(data.main.temp);
        setHumidity(data.main.humidity);
        setWindSpeed(data.wind.speed);

    
      } 
    } catch (error) {
      setError("Failed to fetch weather data");
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    weatherSearch();
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      weatherSearch(city);
    }
  }

  return (
    <div className="w-80 h-full p-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl mx-auto shadow-lg">
  <div className="flex items-center space-x-3 bg-white/30 p-2 rounded-full backdrop-blur-md">
    <input
      className="flex-1 bg-transparent border-none p-2 text-white placeholder-gray-200 focus:outline-none text-lg"
      type="text"
      placeholder="Enter City Name"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      onKeyDown={handleKeyDown}

      

    />
   
  <img className="w-5 h-5" src={search} alt="Search"
   onClick={() => weatherSearch(city)}
  /> 
</div>

  {error ? (
    <p className="text-red-400 text-center mt-3 text-lg">{error}</p>
  ) : (
    <div className="text-center mt-5">
      <img src={weatherIcon} className="mx-auto w-24 h-24 animate-fadeIn" alt="Weather Icon" />
      <h1 className="text-5xl text-white font-bold mt-2">
        {temperature !== null ? `${temperature}°C` : "--"}
      </h1>
      <h1 className="text-2xl text-gray-200">{city}</h1>
    </div>
  )}

  <div className="flex justify-between mt-6">
    <div className="flex items-center space-x-2 bg-white/20 p-3 rounded-xl shadow-md">
      <img className="h-8 w-8" src={humidity} alt="Humidity" />
      <div className="text-white">
        <p className="text-lg font-semibold">{humidityData !== null ? `${humidityData}%` : "--"}</p>
        <p className="text-sm text-gray-200">Humidity</p>
      </div>
    </div>

    <div className="flex items-center space-x-2 bg-white/20 p-3 rounded-xl shadow-md">
      <img className="h-8 w-8" src={wind} alt="Wind Speed" />
      <div className="text-white">
        <p className="text-lg font-semibold">{windSpeed !== null ? `${windSpeed} km/h` : "--"}</p>
        <p className="text-sm text-gray-200">Wind Speed</p>
      </div>
    </div>
  </div>
</div>

  );
};

export default Weather;
