import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Home from './pages/Home/Home';
import Favourites from './pages/Favourites/Favourites';
import { FavoritesProvider } from './Providers/FavoritesProvider';
import { CountriesProvider } from './Providers/CountriesProvider';
import './App.css';
import Landing from './pages/Landing/Landing';

const App: React.FC = () => {
  return (
    <FavoritesProvider>
      <CountriesProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path="/Explore" element={<Home />} />
            <Route path="/Favourites" element={<Favourites />} />
          </Routes>
        </Router>
      </CountriesProvider>
    </FavoritesProvider>
  );
};

export default App;

