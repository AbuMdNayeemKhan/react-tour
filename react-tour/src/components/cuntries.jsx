import { useEffect } from "react";
import { useState } from "react";
import Cuntry from "../Country/Cuntry";
import './Cuntries.css'

const Countries = () => {
    const [country, setCountry] = useState([]);
    const [visitedCountires, setVisitedCountires] = useState([]);
    
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountry(data))
    }, []);

    const handlevisitedCountires = (country) => {
        const newVisitedCountries = [...visitedCountires, country];
        setVisitedCountires(newVisitedCountries);
    }
    return(
        <div>
            <h3 className="text-center">Countries: {country.length}</h3>
            <h4 className="text-center">Countries: {visitedCountires.length}</h4>
            <div>
                {/* <h5>Visited Country : {visitedCountires}</h5> */}
                <ul>
                    {
                        visitedCountires.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="country-container">
                {
                    country.map(country => <Cuntry key={country.cca3} handlevisitedCountires={handlevisitedCountires} country={country}></Cuntry>)
                }
            </div>
        </div>
    )
};



export default Countries;