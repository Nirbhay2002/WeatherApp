import Card from './Card';
import Navbar from './Navbar';
import React from 'react';
// import useFetch from './useFetch';

function App() {
  
  const apiKey = "CTciAfIaBaELQ3MK6xkCcMgavG5xIGdj";
  // const [locationQuery,setLocationQuery] = React.useState("Chandigarh");
  // const [locationCode, setLocationCode] = React.useState("");
  // const [currentWeather, setCurrentWeather] = React.useState({});
  // const [currentTemperature, setCurrentTemperature] = React.useState({});
  // const [currentPrecip, setCurrentPrecip] = React.useState({});
  // const [currentWind, setCurrentWind] = React.useState({});
  const [country, setCountry] = React.useState("India");
  const [weatherData, setWeatherData] = React.useState([]);

  // const url=`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${locationQuery}`;
  // React.useEffect(() =>{
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(data => setLocationCode(data[0].Key))
    // .then(fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locationCode}?apikey=CTciAfIaBaELQ3MK6xkCcMgavG5xIGdj&details=true`)
    // .then(res => res.json())
    // .then(data => setCurrentWeather(data)))
    
  // },[])

  // const newUrl = `http://dataservice.accuweather.com/currentconditions/v1/202350?apikey=${apiKey}&details=true`;
  const newUrl = `http://dataservice.accuweather.com/currentconditions/v1/topcities/50?apikey=${apiKey}`;
  
  // React.useEffect(() =>{
  //   fetch(newUrl)
  //   .then(res => res.json())
  //   .then(data => {
  //     // setIsPending(false);
  //     setCurrentTemperature(data[0].Temperature.Metric);
  //   })
  // }, [newUrl]);  

  // React.useEffect(() =>{
  //   fetch(newUrl)
  //   .then(res => res.json())
  //   .then(data => setCurrentWeather(data[0]))
  // }, [newUrl]);

  // React.useEffect(() =>{
  //   fetch(newUrl)
  //   .then(res => res.json())
  //   .then(data => setCurrentPrecip(data[0].PrecipitationSummary.Precipitation.Metric))
  // }, [newUrl]);

  // React.useEffect(() =>{
  //   fetch(newUrl)
  //   .then(res => res.json())
  //   .then(data => setCurrentWind(data[0].Wind.Speed.Metric))
  // }, [newUrl]);


  // const {currentTemperature, currentPrecip, currentWeather, currentWind} = useFetch(newUrl);
  


  // const addLocation = (location) =>{
  //   setLocationQuery(location);
  // }



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

  // console.log(locationWeather);
  // const locationWeather = currentWeather.map(() =>{
  //   return <Card cityWeather = {currentWeather.WeatherText} cityTemperature = {currentWeather.Temperature.Metric.Value} city={currentWeather.EnglishName}/>
    
  // })
  const handleChange = (event) =>{
    setCountry(event.target.value);
};
  return (
    <div className="App">
      <Navbar weather= {weatherData} handleChange={handleChange}/>

      {/* <Card cityWeather = {currentWeather} 
      cityTemperature = {currentTemperature} 
      cityPrecip = {currentPrecip} 
      cityWind={currentWind} 
      city={locationQuery}
      /> */}
      {/* {locationWeather} */}
      <h1 className="content-heading">Showing Weather for {country}</h1>
      {locationData}
    </div>
  );
}

export default App;
