import Card from './Card';
import Navbar from './Navbar';
import React from 'react';

function App() {

  const [country, setCountry] = React.useState("India");
  const [weatherData, setWeatherData] = React.useState([]);
  // const [locationKey, setLocationKey] = React.useState("");
  
  const apiKey = "CTciAfIaBaELQ3MK6xkCcMgavG5xIGdj";
  // const locationApi = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${country}`
  // const currentConditionsApi = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`

  
  const newUrl = `http://dataservice.accuweather.com/currentconditions/v1/topcities/50?apikey=${apiKey}`;


  React.useEffect(() =>{
    fetch(newUrl)
    .then(res => res.json())
    .then(data => setWeatherData(data))
  }
  ,[])
  
  const locationData = weatherData.map(location =>
    {
      return location.Country.EnglishName === country && <Card temperature={location.Temperature.Metric.Value} weather={location} city={location.EnglishName} latitude={location.GeoPosition.Latitude} longitude={location.GeoPosition.Longitude}/>
    }
  )

  const handleChange = (event) =>{
    setCountry(event.target.value);
};

  // const handleSubmit = (e) =>{
  //   e.preventDefault();
  //   fetch(locationApi)
  //   .then(res => res.json())
  //   .then(data => setLocationKey(data.Key))
  //   .then(
  //     fetch(currentConditionsApi)
  //     .then(res=>res.json())
  //     .then(data => setWeatherData(data))
  //   )

  // }
  return (
    <div className="App">
      <Navbar weather= {weatherData} handleChange={handleChange} />

      <h1 className="content-heading">Showing Weather for {country}</h1>
      {locationData}
    </div>
  );
}

export default App;
