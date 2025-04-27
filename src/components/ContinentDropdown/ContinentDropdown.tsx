
import './ContinentDropdown.css'; 

interface ContinentDropdownProps {
    selectedContinent: string;
    handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  }

const ContinentDropdown: React.FC<ContinentDropdownProps> = ({selectedContinent, handleSelectChange}) => {

  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', width: '100%', marginLeft: '2rem' }}>
        <label>
            Select by region:
        </label>
      <select 
        id="continent" 
        value={selectedContinent} 
        onChange={handleSelectChange}
        className='dropdownDesign'
      >
        <option value="">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default ContinentDropdown;
