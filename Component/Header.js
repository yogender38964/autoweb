// src/Component/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../css/header.css'; // Ensure this path is correct

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="logo">Logo</div>
          <div className="menu-toggle" onClick={toggleMenu}>
            <span className="menu-icon">&#9776;</span> {/* Hamburger icon */}
          </div>
          <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
            <li className="nav-item"><Link to="/">Home</Link></li>
            <li className="nav-item"><Link to="/about">About</Link></li>
            <li className="nav-item"><Link to="/Services">Services</Link></li>
            <li className="nav-item"><a href="#contact">Contact</a></li> {/* redirect to current page contact */} 
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
