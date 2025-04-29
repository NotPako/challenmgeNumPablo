import React from 'react'
import {useState, useEffect} from 'react';
import {bringCountries} from '../../services/apiCalls'
import CountryCard from '../../components/CountryCard/CountryCard';
import FilterBar from '../../components/FilterBar/FilterBar';
import './Favourites.css';


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
    continents: string[];
}
export default function Favourites() {
    const [countries, setCountries] = useState<Country[]>([]);
    const [allCountries, setAllCountries] = useState<Country[]>([]); 



    useEffect(() => {
      if (countries.length === 0) {
        bringCountries()
          .then((res) => {
            setCountries(res.data);
            setAllCountries(res.data);
          })
          .catch((error) => console.log(error));
      }
    }, []);

    const listProd = (input: string) => {
      const filteredData = countries.filter((el) => {
        if (input === "") {
          return true;
        } else {
          return el.name.common.toLowerCase().includes(input.toLowerCase());
        }
      });
    
      setCountries(filteredData);
    };

    const listProdContinent = (input: string) => {
      const filteredData = allCountries.filter((el) => {
        if (input === "") {
          return true;
        } else {
          return el.region.toLowerCase().includes(input.toLowerCase());  
        }
      });
    
      setCountries(filteredData);
    };

  return (
    <>
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}> 
        <h1>My Favorites</h1>
        <p>These are the countries you marked as favorites</p>
      </div>
    <div style = {{padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}> 
    <FilterBar listProd={listProd} setCountries={setCountries} listProdContinent={listProdContinent}/>
       <div className="countryGridDesign">
        {countries.length == 0 ? (
          <div className="placeholder">No products found</div>
        ) :
        (countries.map((country, index) => (
            <div key={index}>
            <CountryCard value={country}/>
            </div>
        )))
      }
    </div>
      
    </div>
    </>
  )
}
