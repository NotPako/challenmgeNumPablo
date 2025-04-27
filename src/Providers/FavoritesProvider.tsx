import React, { createContext, useState, ReactNode } from 'react';


interface FavoriteCountry {
    value: {
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
      };
}

interface FavoritesContextType {
  favorites: FavoriteCountry[];
  addFavorite: (country: FavoriteCountry) => void;
  removeFavorite: (countryName: string) => void;
  isFavoriteAll: (countryName: string) => boolean;
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
    setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.value.name.common !== countryName));
  };

  const isFavoriteAll = (countryName: string) => {
    return favorites.some((fav) => fav.value.name.common === countryName);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavoriteAll }}>
      {children}
    </FavoritesContext.Provider>
  );
};
