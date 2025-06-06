import {useState, useEffect} from 'react';
import CountryCard from '../../components/CountryCard/CountryCard';
import { useFavorites } from '../../Providers/FavoritesProvider';
import { useNavigate } from 'react-router-dom';
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
    isFavorite?: boolean;
}
export default function Favourites() {
    const [countries, setCountries] = useState<Country[]>([]);
    const { favorites } = useFavorites();
    const navigate = useNavigate();

    useEffect(() => {
      setCountries(favorites);
    }, [favorites]);




  return (
    <>
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5rem', color: 'white' }}> 
        <h1>My Favorites</h1>
        <p>These are the countries you marked as favorites</p>
        <p> <button className="explore-button" onClick={() => navigate('/Explore')}>
        Back to Explorer
      </button></p>
      </div>
    <div style = {{padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}> 
       <div className="countryGridDesign">
        {countries.length == 0 ? (
          <div className="placeholder">No favorites found</div>
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
