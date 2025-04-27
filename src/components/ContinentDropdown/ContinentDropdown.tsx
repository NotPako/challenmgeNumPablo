import React, { useState } from 'react';
import './ContinentDropdown.css'; 

const ContinentDropdown: React.FC = () => {
  const [selectedContinent, setSelectedContinent] = useState<string>('');

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedContinent(e.target.value);
  };

  return (
    <div>
      <select 
        id="continent" 
        value={selectedContinent} 
        onChange={handleSelectChange}
        className='dropdownDesign'
      >
        <option value="">All</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default ContinentDropdown;
