import Card from './Card';
import React from 'react';

function App() {

  const [currentWeather, setCurrentWeather] = React.useState({});
  const url="http://api.weatherstack.com/current?access_key=a9e46baa27e226e744e600d52ef3cc2f&query=Chandigarh";

  React.useEffect(() =>{
    fetch(url)
    .then(res => res.json())
    .then(data => setCurrentWeather(data.current))
  }, []);  

  const weatherData = {
    "city": "Chandigarh",
    "temp": currentWeather.temperature,
    "time": currentWeather.observation_time,
    "tod": currentWeather.is_day === "yes" ? "Day": "Night",
    "weather": currentWeather.weather_descriptions,
    "icon": currentWeather.weather_icons,
    "humidity": currentWeather.humidity, //in %
    "wind_speed": currentWeather.wind_speed, //in kmph
    "precipitation": currentWeather.precip
  };

  return (
    <div className="App">
      <div className="card-container">
        <Card cityWeather = {weatherData}/>
      </div>
    </div>
  );
}

export default App;
