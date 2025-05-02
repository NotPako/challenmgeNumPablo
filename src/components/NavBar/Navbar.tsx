import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import EarthImage from '../../assets/earth.png';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLanding = location.pathname === '/';
  const [animateToNavbar, setAnimateToNavbar] = useState(false);

  const handleEarthClick = () => {
    if (isLanding) {
      setAnimateToNavbar(true);
      setTimeout(() => {
        navigate('/Explore');
      }, 1000); 
    } else {
      navigate('/');
    }
  };

  useEffect(() => {
    if (!isLanding) {
      setAnimateToNavbar(true);
    }
  }, [isLanding]);

  return (
    <>
      <nav style={styles.nav}>
        <div style={styles.logoContainer}>
          <h2 style={styles.logo} onClick={() => navigate('/')}>Globify</h2>
          <img
            src={EarthImage}
            alt="Earth"
            className={`earth ${isLanding && !animateToNavbar ? 'start-large' : 'navbar-small'}`}
            onClick={handleEarthClick}
          />
        </div>
        <Link to="/Favourites" style={styles.link}>My Favourites</Link>
      </nav>
    </>
  );
};

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    padding: '0 20px',
    background: 'rgba(0, 0, 0, 0.7)',
    height: '5rem',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1000
  } as React.CSSProperties,

  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    position: 'relative'
  } as React.CSSProperties,

  link: {
    color: 'white',
    textDecoration: 'none',
    marginRight: '10rem'
  } as React.CSSProperties,

  logo: {
    margin: 0,
    cursor: 'pointer',
  } as React.CSSProperties,
};

export default Navbar;



