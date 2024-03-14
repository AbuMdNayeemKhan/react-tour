import { useEffect } from "react";
import { useState } from "react";
import Cuntry from "../Country/Cuntry";
import './Cuntries.css'

const Countries = () => {
    const [country, setCountry] = useState([]);
    const [visitedCountires, setVisitedCountires] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountry(data))
    }, []);
    // console.log(country);
    const handlevisitedCountires = (country) => {
        const newVisitedCountries = [...visitedCountires, country];
        setVisitedCountires(newVisitedCountries);
    }

    const handelvisitedFlags = (flag) => {
        const newVisitedFlag = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlag);
    }


    return(
        <div>
            <h3 className="text-center">Countries: {country.length}</h3>
            <h4 className="text-center">Countries: {visitedCountires.length}</h4>
            <div>
                {/* list of the visited countrys start */}
                <ul>
                    {
                        visitedCountires.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
                {/* list of the visited countrys ended */}
                {/* list of the visited counrys flag start */}
                <ul className="flag-container">
                    {
                        visitedFlags.map((flag, idx) => <img key={idx} src={flag}/>)
                    }
                </ul>
                {/* list of the visited counrys flag ended */}
            </div>
            <div className="country-container">
                {
                    country.map(country => <Cuntry key={country.cca3} handlevisitedCountires={handlevisitedCountires} country={country} handelvisitedFlags={handelvisitedFlags}></Cuntry>)
                }
            </div>
        </div>
    )
};



export default Countries;