import React from 'react';
import './CountryCard.css';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';


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

  const [isFavorite, setIsFavorite] = useState<boolean>(false);  // Estado para marcar como favorito

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);  // Alternar entre favorito/no favorito
  };

  return (
    <div className='countryInfoDesign'>
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

      {/* Icono de estrella */}
      <div 
        className={`favoriteIcon ${isFavorite ? 'active' : ''}`} 
        onClick={toggleFavorite}
      >
        <FaStar size={24} color={isFavorite ? 'gold' : 'gray'} />
      </div>
    </div>
  );
};

export default CountryCard;