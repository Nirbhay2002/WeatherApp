import Card from './Card';
import Navbar from './Navbar';
import React from 'react';

function App() {
  
  const apiKey = "CTciAfIaBaELQ3MK6xkCcMgavG5xIGdj";
 
  const [country, setCountry] = React.useState("India");
  const [weatherData, setWeatherData] = React.useState([]);

  

  
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
  return (
    <div className="App">
      <Navbar weather= {weatherData} handleChange={handleChange}/>

      <h1 className="content-heading">Showing Weather for {country}</h1>
      {locationData}
    </div>
  );
}

export default App;
