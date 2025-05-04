import React from 'react';
import './Landing.css';

const Landing: React.FC = () => {
  return (
    <div className="landingContainer">
      <div className="backgroundLayer" />
      <div className="landingContent">
        <h1>Welcome to Globify</h1>
      </div>
    </div>
  );
};

export default Landing;