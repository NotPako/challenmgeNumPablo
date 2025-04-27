import React from 'react';
import './CountryCard.css';


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


  return (
    <div className='countryInfoDesign'>
      <h4>{value.name.common}</h4>
      <img
        className="img-thumbnail"
        src={value.flags.png}
        alt={`Flag of ${value.name}`}
        width='120'
        height='80'
      />
      <div className='populationAndRegion'>
        <div>Population: {value.population.toLocaleString()}</div>
        <div>Region: {value.region}</div>
      </div>
    </div>
  );
};

export default CountryCard;
