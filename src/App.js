/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
//The fetchWeather function in App.js fetches the weather data from OpenWeatherMap.
import React, { useState } from 'react';
import Weather from './components/Weather';
import Search from './components/Search';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=60077607769ebd70253401d3ec23b891`);
    const data = await response.json();
    setWeather(data);
  };

  return (
    <div className="App">
      <h1>The weather app</h1>

      <Search fetchWeather={fetchWeather} />
      {weather && <Weather data={weather} />}
    </div>
  );
}

export default App;
