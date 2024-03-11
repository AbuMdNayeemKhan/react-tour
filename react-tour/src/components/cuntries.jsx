import { useEffect } from "react";
import { useState } from "react";
import Cuntry from "../Country/Cuntry";

const Countries = () => {
    const [country, setCountry] = useState([]);
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountry(data))
    },[])

    return(
        <div>
            {
                country.map(country => <Cuntry key={country.cca3} country={country}></Cuntry>)
            }
        </div>
    )
};



export default Countries;