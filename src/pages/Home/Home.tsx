import React from 'react';
import Catalogue from '../Catalogue/Catalogue';
import './Home.css'



const Home: React.FC = () => {
  return (
    <>
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}> 
        <h1>Welcome to Globify</h1>
        <p>Explore the globe thanks to a fantastic API</p>
        <Catalogue/>
      </div>
    </>
  );
};

export default Home;

