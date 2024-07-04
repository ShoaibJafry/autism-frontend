import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="header-container">
      <img src={logo} alt="Your Logo" />
      <h1>AUTISM SPECTRUM DISORDER DETECTION</h1>
    </header>
  );
};

export default Header;
