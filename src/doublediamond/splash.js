import React, { useState } from 'react';
import LeftBar from './LeftBar';
import Content from './Content';
import BottomBar from './BottomBar';
import './scss/diamond.css'; // Import the CSS file

const Splash = () => {

  return (
    <div className="app-container">
      <a href='/dd/home'><img  src='/img/dd/splash.png'/></a>
    </div>
  );
};

export default Splash;
