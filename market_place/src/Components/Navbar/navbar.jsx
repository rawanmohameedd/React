import React, { useState } from 'react';
import './navbar.css';
import { FaSearch } from 'react-icons/fa';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='container'>
      <h2>Shop Now</h2>

      <div className='searc-bar'>
        <span className="search-icon"><FaSearch/></span> 
        <input type='text' placeholder='Search'/>
      </div>

      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Categories</a></li>
          <li><a href='#'>Offers</a></li>
          <li><a href='#'>Profile</a></li>
        </ul>
      </nav>
      <button className='toggle' onClick={toggleMenu}>
        ☰
      </button>
    </header>
  );
};
