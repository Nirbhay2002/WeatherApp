const Card = ({cityWeather, city}) => {

    const styleBackground ={
        backgroundColor: cityWeather.tod === "Day" ? "linear-gradient(to bottom right, rgb(6, 123, 201), rgb(255, 255, 255))": "black",
    };
    const styleContent = {
        color: cityWeather.tod === "Day" ? "black" : "white"
    };
    return ( 
                <div className="card-info">
                    <div className="card-left" style={styleBackground}>
                        <h1 style={styleContent}>{city}</h1>
                        <p style={styleContent}>{cityWeather.is_Day? "Day": "Night"}</p>
                        <h1 style={styleContent}>{cityWeather.temperature}<sup>o</sup>C</h1>
                        <p style={styleContent}>{cityWeather.weather_descriptions}</p>
                    </div>
                    <div className="card-right">
                        <div className="card-right-labels">
                            <p>PRECIPITATION </p>
                            <p>HUMIDITY </p>
                            <p>WIND </p>
                        </div>
                        <div className="card-right-details">
                            <p>{cityWeather.precip} mm</p>
                            <p>{cityWeather.humidity}%</p>
                            <p>{cityWeather.wind_speed} km/h</p>
                        </div> 
                    </div>
                </div>
     );
}
 
export default Card;