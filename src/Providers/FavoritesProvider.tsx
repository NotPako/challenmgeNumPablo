import React, { createContext, useState, ReactNode } from 'react';


interface FavoriteCountry {
  name: string;
  flag: string;
  population: number;
  region: string;
}

interface FavoritesContextType {
  favorites: FavoriteCountry[];
  addFavorite: (country: FavoriteCountry) => void;
  removeFavorite: (countryName: string) => void;
  isFavorite: (countryName: string) => boolean;
}


export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);


interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<FavoriteCountry[]>([]);

  const addFavorite = (country: FavoriteCountry) => {
    setFavorites((prevFavorites) => [...prevFavorites, country]);
  };

  const removeFavorite = (countryName: string) => {
    setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.name !== countryName));
  };

  const isFavorite = (countryName: string) => {
    return favorites.some((fav) => fav.name === countryName);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
