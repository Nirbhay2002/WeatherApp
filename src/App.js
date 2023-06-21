import Card from './Card';
import React from 'react';

function App() {

  const [allWeather, setAllWeather] = React.useState({});
  const url="http://api.weatherstack.com/current?access_key=a9e46baa27e226e744e600d52ef3cc2f&query=Chandigarh"

  React.useEffect(() =>{
    fetch(url)
    .then(res => res.json())
    .then(data => setAllWeather(data.current))
  }, []);  

  console.log(allWeather);

  const weatherData = {
    "city": "Chandigarh",
    "temp": allWeather.temperature,
    "time": allWeather.observation_time,
    "tod": allWeather.is_day === "yes" ? "Day": "Night",
    "weather": allWeather.weather_descriptions
  };

  return (
    <div className="App">
      <Card cityWeather = {weatherData}/>
    </div>
  );
}

export default App;
