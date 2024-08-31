import React, { useState, useEffect } from 'react';
import './navbar.css';
import { FaSearch } from 'react-icons/fa';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (event.target.closest('.container') !== document.querySelector('.container')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);   
  }, []);

  return (
    <header className='container'>
      <h2>Shop Now</h2>

      <div className='search-bar'>
        <span className="search-icon"><FaSearch /></span>
        <input type='text' placeholder='Search' />
      </div>

      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='#'>Categories</a></li>
          <li><a href='#'>Offers</a></li>
          <li>
            <details>
              <summary>Profile</summary>
              <ul>
                <li><a href='#'>View cart</a></li>
                <li><a href='#'>Settings</a></li>
                <li><a href='#'>Logout</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </nav>
      <button className='toggle' onClick={toggleMenu}>
        ☰
      </button>
    </header>
  );
};