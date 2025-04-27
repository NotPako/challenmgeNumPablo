import React from 'react'
import { useState, ChangeEvent, useEffect} from 'react';
import './FilterBar.css';    
import ContinentDropdown from '../ContinentDropdown/ContinentDropdown';



interface FilterBarProps {
    listProd: (searchTerm: string) => void;
    setProducts: (products: any[]) => void; 
  }
  

export default function FilterBar({listProd, setProducts}: FilterBarProps) {

    const [search, setSearch] = useState<string>(''); 

    
    const inputSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
        var lowerCase = e.target.value.toLowerCase();
        setSearch(lowerCase);
    };
    
    useEffect(() => {
        if (search !== "") {
          const bring = setTimeout(() => {
            listProd(search);
          }, 500);
    
          return () => clearTimeout(bring);
        } else {
          setProducts([]);
        }
      }, [search]);


  return (
    <div className='filterBarDesign'>
        <input 
          type="text"
          placeholder="Search by country name"
          className="inputDesign"
          onChange={(e) => inputSearchHandler(e)}
        ></input>
        <ContinentDropdown/>
    </div>
  )
}
