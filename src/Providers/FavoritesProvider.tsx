import React, { createContext, useState, ReactNode, useContext } from 'react';


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

interface FavoritesContextType {
  favorites: Country[];
  addFavorite: (country: Country) => void;
  removeFavorite: (countryName: string) => void;
  isFavoriteAll: (countryName: string) => boolean;
}


export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);


interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<Country[]>([]);

  const addFavorite = (country: Country) => {
    setFavorites((prevFavorites) => [...prevFavorites, country]);
  };

  const removeFavorite = (countryName: string) => {
    setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.name.common !== countryName));
  };

  const isFavoriteAll = (countryName: string) => {
    return favorites.some((fav) => fav.name.common === countryName);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavoriteAll }}>
      {children}
    </FavoritesContext.Provider>
  );
};


export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

