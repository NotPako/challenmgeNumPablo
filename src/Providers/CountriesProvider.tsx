import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { bringCountries } from '../services/apiCalls';


interface Country {
  name: {
    common: string;
    official: string;
  };
  flags: {
    png: string;
    svg: string;
  };
  population: number;
  region: string;
}

interface CountriesContextType {
  countries: Country[];
  addCountry: (country: Country) => void;
  removeCountry: (name: string) => void;
}

const CountriesContext = createContext<CountriesContextType | undefined>(undefined);


export const CountriesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [countries, setCountries] = useState<Country[]>([]);

    useEffect(() => {
        if (countries.length === 0) {
          bringCountries()
            .then((res) => {
              setCountries(res.data);
            })
            .catch((error) => console.log(error));
        }
      }, []);

  const addCountry = (country: Country) => {
    setCountries((prev) => [...prev, country]);
  };

  const removeCountry = (name: string) => {
    setCountries((prev) => prev.filter((c) => c.name.common !== name));
  };

  return (
    <CountriesContext.Provider value={{ countries, addCountry, removeCountry }}>
      {children}
    </CountriesContext.Provider>
  );
};


export const useCountries = () => {
  const context = useContext(CountriesContext);
  if (!context) {
    throw new Error('useCountries debe usarse dentro de un CountriesProvider');
  }
  return context;
};
