import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="hd-logo-title">
        <img src="./images/logo.png" className="hd-logo" alt="logo" />
        <h1 className="hd-title">KabutoWebi</h1>
      </div>
      <nav>
        <ul>
          <li className="home"><Link to="/">Home</Link></li>
          <li className="about"><Link to="/about">About</Link></li>
          <li className="works"><Link to="/works">Works</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
