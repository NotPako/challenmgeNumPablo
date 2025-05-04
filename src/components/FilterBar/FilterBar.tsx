import React from 'react'
import { useState, ChangeEvent, useEffect} from 'react';
import './FilterBar.css';    
import ContinentDropdown from '../ContinentDropdown/ContinentDropdown';
import { useCountries } from '../../Providers/CountriesProvider';



interface FilterBarProps {
    listProd: (searchTerm: string) => void;
    listProdContinent: (searchTerm: string) => void;
    setCountries: (countries: any[]) => void; 
  }
  

export default function FilterBar({listProd, setCountries, listProdContinent}: FilterBarProps) {

    const [search, setSearch] = useState<string>('');
    const [selectedContinent, setSelectedContinent] = useState<string>('');
    const {countries} = useCountries();
    const [populationOrder, setPopulationOrder] = useState<string>('');
    const [populationRange, setPopulationRange] = useState<string>('');

    const handlePopulationRange = (range: string) => {
  setPopulationRange(range);
};

    const handlePopulationFilter = (order: string) => {
  setPopulationOrder(order);
}; 

    
    const inputSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
        var lowerCase = e.target.value.toLowerCase();
        setSearch(lowerCase);
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedContinent(e.target.value);
      };
    
    useEffect(() => {
        if (search !== "") {
          const bring = setTimeout(() => {
            listProd(search);
          }, 500);
    
          return () => clearTimeout(bring);
        } else {
          setCountries(countries);
        }
      }, [search]);

      useEffect(() => {
        if (selectedContinent !== "") {
          const bring = setTimeout(() => {
            listProdContinent(selectedContinent);
          }, 500);
    
          return () => clearTimeout(bring);
        } else {
            setCountries(countries);
        }
      }, [selectedContinent]);

      useEffect(() => {
        if (populationOrder !== "") {
          const sorted = [...countries].sort((a, b) => {
            return populationOrder === "asc"
              ? a.population - b.population
              : b.population - a.population;
          });
          setCountries(sorted);
        } else {
          setCountries(countries);
        }
      }, [populationOrder]);

      useEffect(() => {
        if (populationRange !== "") {
          const filtered = countries.filter((country) => {
            const pop = country.population;
            switch (populationRange) {
              case "lt1m":
                return pop < 1_000_000;
              case "1m-10m":
                return pop >= 1_000_000 && pop <= 10_000_000;
              case "10m-100m":
                return pop > 10_000_000 && pop <= 100_000_000;
              case "gt100m":
                return pop > 100_000_000;
              default:
                return true;
            }
          });
      
          setCountries(filtered);
        } else {
          setCountries(countries);
        }
      }, [populationRange]);

      
      


  return (
    <div className='filterBarDesign'>
        <input 
          type="text"
          placeholder="Search by country name"
          className="inputDesign"
          onChange={(e) => inputSearchHandler(e)}
        ></input>
        <ContinentDropdown handleSelectChange={handleSelectChange} selectedContinent={selectedContinent}/>
        <select className="inputDesign" onChange={(e) => handlePopulationFilter(e.target.value)}>
    <option value="">Sort by population</option>
    <option value="asc">Lowest to highest</option>
    <option value="desc">Highest to lowest</option>
  </select>
  <select className="inputDesign" onChange={(e) => handlePopulationRange(e.target.value)}>
  <option value="">Filter by population range</option>
  <option value="lt1m">Less than 1M</option>
  <option value="1m-10m">1M - 10M</option>
  <option value="10m-100m">10M - 100M</option>
  <option value="gt100m">More than 100M</option>
</select>
    </div>
  )
}
