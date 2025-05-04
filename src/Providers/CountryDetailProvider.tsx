import React, { createContext, useContext, useState } from 'react';

interface CountryCardProps {
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

interface CountryDetailContextType {
  selectedCountry: CountryCardProps | null;
  setSelectedCountry: (country: CountryCardProps) => void;
}

const CountryDetailContext = createContext<CountryDetailContextType | undefined>(undefined);

export const useCountryDetail = () => {
  const context = useContext(CountryDetailContext);
  if (!context) throw new Error('useCountryDetail must be used within CountryDetailProvider');
  return context;
};

export const CountryDetailProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState<CountryCardProps | null>(null);

  return (
    <CountryDetailContext.Provider value={{ selectedCountry, setSelectedCountry }}>
      {children}
    </CountryDetailContext.Provider>
  );
};
