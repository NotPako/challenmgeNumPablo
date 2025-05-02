import React from 'react'
import background from '../../assets/earthBackground.jpg';

const Landing: React.FC = () => {
  return (
    <div  style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        filter: 'brightness(0.5)',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
      }}> 
         
    </div>
  )
}

export default Landing;
