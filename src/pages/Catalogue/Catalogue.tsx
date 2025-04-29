import React from 'react'
import {useState, useEffect} from 'react';
import { useCountries } from '../../Providers/CountriesProvider';
import CountryCard from '../../components/CountryCard/CountryCard';
import './Catalogue.css';
import FilterBar from '../../components/FilterBar/FilterBar';


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
    isFavorite?: boolean;
}

const Catalogue: React.FC = ()  =>{


    const [allCountries, setAllCountries] = useState<Country[]>([]);
    
    const { countries } = useCountries()


  useEffect(() => {
    setAllCountries(countries);
  }, [countries])

    const listProd = (input: string) => {
      const filteredData = allCountries.filter((el) => {
        if (input === "") {
          return true;
        } else {
          return el.name.common.toLowerCase().includes(input.toLowerCase());
        }
      });
    
      setAllCountries(filteredData);
    };

    const listProdContinent = (input: string) => {
      const filteredData = allCountries.filter((el) => {
        if (input === "") {
          return true;
        } else {
          return el.region.toLowerCase().includes(input.toLowerCase());  
        }
      });
    
      setAllCountries(filteredData);
    };

  return (
    <div style = {{padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}> 
    <FilterBar listProd={listProd} setCountries={setAllCountries} listProdContinent={listProdContinent}/>
       <div className="countryGridDesign">
        {allCountries.length == 0 ? (
          <div className="placeholder">No countries found</div>
        ) :
        (allCountries.map((country, index) => (
            <div key={index}>
            <CountryCard value={country}/>
            </div>
        )))
      }
    </div>
      
    </div>
  )
}

export default Catalogue;
