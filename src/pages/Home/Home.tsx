import React from 'react';
import Catalogue from '../Catalogue/Catalogue';
import './Home.css'




const Home: React.FC = () => {
  return (
    <>
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' ,backgroundColor:'rgb(7, 26, 61)', minHeight:'100vh'}}> 
        <div style={{marginTop:'5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', color:'white'}}>
        <h1>Welcome to Globify</h1>
        <p>Explore the globe thanks to a fantastic API</p>
        <Catalogue/>
        </div>
        
      </div>
    </>
  );
};

export default Home;

