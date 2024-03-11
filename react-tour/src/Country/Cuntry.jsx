import './Contry.css';


const Cuntry = ({country}) => {
    const {name, flags} = country;
    return (
        <div className='country'>
            <img src={flags.png} alt="" className='flags' />
            <h3>Name:{name.common}</h3>
        </div>
    );
};
export default Cuntry;