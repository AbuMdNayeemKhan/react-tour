import { useEffect } from "react";
import { useState } from "react";
import Cuntry from "../Country/Cuntry";
import './Cuntries.css'

const Countries = () => {
    const [country, setCountry] = useState([]);
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountry(data))
    },[])

    return(
        <div>
            <h3 className="text-center">Countries: {country.length}</h3>
            <div className="country-container">
                {
                    country.map(country => <Cuntry key={country.cca3} country={country}></Cuntry>)
                }
            </div>
        </div>
    )
};



export default Countries;