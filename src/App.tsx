import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Favourites from './pages/Favourites/Favourites';
import { FavoritesProvider } from './Providers/FavoritesProvider';
import { CountriesProvider } from './Providers/CountriesProvider';

const App: React.FC = () => {
  return (
    <FavoritesProvider>
      <CountriesProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Favourites" element={<Favourites />} />
          </Routes>
        </Router>
      </CountriesProvider>
    </FavoritesProvider>
  );
};

export default App;

