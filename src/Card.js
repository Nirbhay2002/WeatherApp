

const Card = ({weather, temperature, city, latitude, longitude}) => {
    // const Card = ({cityWeather, cityTemperature, cityPrecip, cityWind, city})
    const styleBackground ={
        background: weather.IsDayTime? "linear-gradient(to bottom right, rgb(6, 123, 201), rgb(255, 255, 255))": "linear-gradient(to bottom right, rgb(0,0,0) 50%, rgb(66, 66, 66) 100%)",
    };
    const styleContent = {
        color: weather.IsDayTime? "black" : "white"
    };
    return ( 
            <div className="card-info">
                    <div className="card-left" style={styleBackground}>
                        {/* {weather.IsDayTime?<img src={logoBlack} />: <img src={logoWhite} />} */}
                        <h1 style={styleContent}>{city}</h1>
                        <p style={styleContent}>{weather.IsDayTime? "Day": "Night"}</p>
                        <h1 style={styleContent}>{temperature}<sup>o</sup>C</h1>
                        <p style={styleContent}>It's {weather.WeatherText} today</p>
                    </div>
                    <div className="card-right">
                        <div className="card-right-labels">
                            <p>LATITUDE </p>
                            <p>LONGITUDE </p>
                            {/* <p>WIND SPEED </p> */}
                        </div>
                        <div className="card-right-details">
                            <p>{latitude}<sup>o</sup> </p>
                            <p>{longitude}<sup>o</sup></p>
                            {/* <p>{cityWind.Value} km/h</p> */}
                        </div> 
                    </div>
                </div>          
     );
}
 
export default Card;