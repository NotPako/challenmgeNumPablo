import React, { useContext } from 'react';
import './CountryCard.css';
import { useState } from 'react';
import { FaStar, FaTrashAlt } from 'react-icons/fa';
import { FavoritesContext } from '../../Providers/FavoritesProvider';
import { useCountries } from '../../Providers/CountriesProvider';


interface CountryCardProps {
  value: {
    name: {
      common: string;
      official: string;
      nativeName?: {
        [key: string]: {
          official: string;
          common: string;
        };
      };
    };
    flags: {
      png: string;
      svg: string;
      alt?: string;
    };
    population: number;
    region: string;
  };
}


const CountryCard: React.FC<CountryCardProps> = ({ value }) => {

  const {removeCountry} = useCountries();

  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const [isRemoving, setIsRemoving] = useState<boolean>(false);

  const handleRemoveCountry = () => {
  setIsRemoving(true); 
  setTimeout(() => {
    removeCountry(value.name.common); 
  }, 300); 
};


  const toggleFavorite = () => {
    if(!isFavorite){
      //addFavorite(null);
    }
    setIsFavorite((prev) => !prev);  
  };

  return (
    <div className={`countryInfoDesign ${isRemoving ? 'removing' : ''}`}>
    <h4>{value.name.common}</h4>
    <img
      className="img-thumbnail"
      src={value.flags.png}
      alt={`Flag of ${value.name.common}`}
      width='120'
      height='80'
    />
    <div className='populationAndRegion'>
      <div>Population: {value.population.toLocaleString()}</div>
      <div>Region: {value.region}</div>
    </div>
    <div className='iconContainer'>
      <div 
        className={`favoriteIcon ${isFavorite ? 'active' : ''}`} 
        onClick={toggleFavorite}
      >
        <FaStar size={24} color={isFavorite ? 'gold' : 'gray'} />
      </div>
      <div className='deleteIcon'>
        <FaTrashAlt size={24} color='red' onClick={() => handleRemoveCountry()} />
      </div>
    </div>
  </div>
  
  );
};

export default CountryCard;