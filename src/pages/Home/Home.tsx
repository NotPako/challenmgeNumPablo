import React from 'react';
import Catalogue from '../Catalogue/Catalogue';
import './Home.css'



const Home: React.FC = () => {
  return (
    <>
      <div style={{ padding: '20px' }}>
        <h1>Welcome to the Home Page</h1>
        <p>This is your basic home screen content.</p>
        <Catalogue/>
      </div>
    </>
  );
};

export default Home;

