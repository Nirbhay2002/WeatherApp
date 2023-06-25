import React from 'react';

const Navbar = ({weather,handleChange}) => {

    const [displayDropDown, setDisplayDropDown] = React.useState(false);

    const toggleDropDown = () =>{
        setDisplayDropDown(prevState => {
            return !prevState;
        });
    };

    

    // const handleSubmit = (event) =>{
    //     event.preventDefault();
    // }

    const countryArray = weather.map(location => {
        return location.Country.EnglishName;
    });

    const removeDuplicates = (countryArray) => {
        return countryArray.filter((item,
            index) => countryArray.indexOf(item) === index);
    }
    const options = removeDuplicates(countryArray).map(country =>{
        return <option>{country}</option>
    })

    return ( 
        <div>
            <div className="navbar">
                <div className="navbar-logo">
                    <h1>WeatherIt</h1>
                </div>
                <div className="navbar-links">
                    <p onClick={toggleDropDown}>{displayDropDown? "Hide": "Select country"}</p>
                </div>
            </div>
            {displayDropDown && 
                <div className="navbar-dropdown">
                    <form>
                        <select onChange={handleChange}>
                            {/* <option>India</option>
                            <option>United States of America</option>
                            <option>China</option>
                            <option>Canada</option> */}
                            {options}
                        </select> <br></br>
                    </form>
                </div>}
        </div>
        
     );
}
 
export default Navbar;