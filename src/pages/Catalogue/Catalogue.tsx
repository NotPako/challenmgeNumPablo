import React from 'react'
import {useState, useEffect} from 'react';
import {bringCountries} from '../../services/apiCalls'
import CountryCard from '../../components/CountryCard/CountryCard';
import './Catalogue.css';


interface Country {
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
}

const Catalogue: React.FC = ()  =>{

    const [countries, setCountries] = useState<Country[]>([]);

    useEffect(() => {
      if (countries.length === 0) {
        bringCountries()
          .then((res) => {
            setCountries(res.data);
            console.log(res.data);
          })
          .catch((error) => console.log(error));
      }
    }, [countries]);

  return (
    <div style = {{padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}> 
       <div className="countryGridDesign">
        {countries.map((country, index) => (
            <div key={index}>
            <CountryCard value={country}/>
            </div>
        ))}
    </div>
      
    </div>
  )
}

export default Catalogue;
