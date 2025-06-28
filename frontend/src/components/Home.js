import { useState } from "react";
import React from 'react'

import axios from "axios"
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
    const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
 const API_KEY = process.env.REACT_APP_API_KEY;
 const goToHistory = () => {
    navigate("/history");
  };

   const getWeather = async () => {
    if (!city) return;
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
     
      
     const data = await res.json();

    if (res.ok) {
      setWeather(data);
       const newSearch = {
        city: data.name,
        time: new Date().toISOString(),
      };

      await axios.post("http://localhost:5000/api/weather", newSearch);
      console.log("Search saved to database:", newSearch);

    } else {
      setWeather(null);
      alert(`City "${city}" not found. Please try again.`);
    }

    } catch (err) {
      console.error("Error fetching weather:", err);
    }
  };
  return (
     <div className="min-h-screen bg-blue-100 p-10">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">Weather App</h1>

      <div className="flex justify-center gap-4">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 rounded border w-64"
        />
        <button
          onClick={getWeather}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2">
  <button onClick={goToHistory}  className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition duration-200">
    History
  </button>
</div>
      </div>
    
      </div>
  )
}

export default Home
