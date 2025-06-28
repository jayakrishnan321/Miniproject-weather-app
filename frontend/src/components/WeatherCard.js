import React from 'react'
function WeatherCard({ weather }) {
    if (!weather) return null;

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 mt-6 w-full max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-2">{weather.name}</h2>
            <p className="text-lg">🌡️ Temp: {weather.main.temp}°C</p>
            <p>🌥️ Weather: {weather.weather[0].description}</p>
            <p>💨 Wind: {weather.wind.speed} m/s</p>
            <p>💧 Humidity: {weather.main.humidity}%</p>
        </div>
    );
}

export default WeatherCard;

