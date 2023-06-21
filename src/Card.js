const Card = ({cityWeather}) => {

    const styleBackground ={
        backgroundColor: cityWeather.tod === "Day" ? "linear-gradient(to bottom right, rgb(6, 123, 201), rgb(255, 255, 255))": "black",
    }
    const styleContent = {
        color: cityWeather.tod === "Day" ? "black" : "white"
    }
    return ( 
        
                <div className="card-info">
                    <div className="card-left" style={styleBackground}>
                        <h1 style={styleContent}>{cityWeather && cityWeather.city}</h1>
                        <p style={styleContent}>{cityWeather && cityWeather.temp}<sup>o</sup>C</p>
                        <p style={styleContent}>{cityWeather && cityWeather.tod}</p>
                        <p style={styleContent}>{cityWeather && cityWeather.weather}</p>
                    </div>
                    <div className="card-right">
                        <div className="card-right-labels">
                            <p>PRECIPITATION </p>
                            <p>HUMIDITY </p>
                            <p>WIND </p>
                        </div>
                        <div className="card-right-details">
                            <p>{cityWeather && cityWeather.precipitation} mm</p>
                            <p>{cityWeather && cityWeather.humidity}%</p>
                            <p>{cityWeather && cityWeather.wind_speed}%</p>
                        </div> 
                    </div>
                </div>
     );
}
 
export default Card;