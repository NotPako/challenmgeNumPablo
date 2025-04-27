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
      


  return (
    <div className='filterBarDesign'>
        <input 
          type="text"
          placeholder="Search by country name"
          className="inputDesign"
          onChange={(e) => inputSearchHandler(e)}
        ></input>
        <ContinentDropdown handleSelectChange={handleSelectChange} selectedContinent={selectedContinent}/>
    </div>
  )
}
