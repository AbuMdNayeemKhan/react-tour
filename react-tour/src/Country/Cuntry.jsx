import { useState } from 'react';
import './Contry.css';


const Cuntry = ({country}) => {
    const {name, flags} = country;
    const [visited, setVisited] = useState(false);
    const visitedHandeler = () =>{
        setVisited(!visited);
    }
    return (
        <div className='country'>
            <img src={flags.png} alt="" className='flags' />
            <h3>Name:{name.common}</h3>
            <button onClick={visitedHandeler}>{visited && 'visited' || 'visite'}</button>
        </div>
    );
};
export default Cuntry;