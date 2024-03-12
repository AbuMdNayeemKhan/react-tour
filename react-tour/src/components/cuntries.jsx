import { useEffect } from "react";
import { useState } from "react";
import Cuntry from "../Country/Cuntry";
import './Cuntries.css'

const Countries = () => {
    const [country, setCountry] = useState([]);
    const [visitedCountires, setvisitedCountires] = useState([]);
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountry(data))
    },[])

    const handlevisitedCountires = (country) =>{
        console.log('add this to your visited country');
        console.log(country);
    }

    return(
        <div>
            <h3 className="text-center">Countries: {country.length}</h3>
            <div>
                <h5>Visited Country</h5>
                <ul>

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