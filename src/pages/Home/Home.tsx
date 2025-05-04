import React from 'react';
import {motion} from 'framer-motion'
import Catalogue from '../Catalogue/Catalogue';
import './Home.css'




const Home: React.FC = () => {
  return (
    <>
    
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
        style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' ,backgroundColor:'rgb(7, 26, 61)', minHeight:'100vh'}}> 
        <div style={{marginTop:'5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', color:'white'}}>
        <h1>Explorer</h1>
        <p>Find your country and click on it to find more details</p>
        <Catalogue/>
        </div>
        
      </motion.div>
    </>
  );
};

export default Home;

