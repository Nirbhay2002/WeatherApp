const Card = (props) => {
    return ( 
        <div className="card-container">
            <h1>{props.cityWeather.city}</h1>
            <p>{props.cityWeather.temp}</p>
            <p>{props.cityWeather.tod}</p>
        </div>
     );
}
 
export default Card;