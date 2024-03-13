import { useState } from 'react';
import './Contry.css';


const Cuntry = ({country, handlevisitedCountires}) => {
    const {name, flags} = country;
    const [visited, setVisited] = useState(false);
    const visitedHandeler = () =>{
        setVisited(!visited);
    }
    // console.log(handlevisitedCountires);
    function passWithParam () {
        handlevisitedCountires(country);
    }
    return (
        <div className={`country ${visited ? 'visited' : ''}`}>
            <img src={flags.png} alt="" className='flags' />
            <h3>Name:{name.common}</h3>
            <button onClick={visitedHandeler}>{visited && 'visited' || 'visite'}</button>
            <button onClick={passWithParam}>set as visited</button>
        </div>
    );
};
export default Cuntry;