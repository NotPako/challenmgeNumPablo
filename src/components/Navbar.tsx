import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {

  const navigate = useNavigate();
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo} onClick={() => navigate('/')}>Globify</h2>
      <div>
        <Link to="/Favourites" style={styles.link}>My Favourites</Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    padding: '0 20px',
    backgroundColor: '#333',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1000
  } as React.CSSProperties,
  link: {
    color: 'white',
    textDecoration: 'none',
    marginRight: '10rem'
  } as React.CSSProperties,
  logo: {
    margin: 0,
    cursor:'pointer',
  } as React.CSSProperties
};

export default Navbar;

