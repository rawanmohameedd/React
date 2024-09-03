import React, { useState, useEffect, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsOpen(false);
      
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  //repeated styles:
  const liStyles = 'py-[10px] px-[20px] m-[20px] hover:bg-color3';
  const liLinksStyles = 'no-underline text-inherit hover:no-underline hover:text-inherit';
  const dliStyles = 'w-full py-[8px] px-[12px] my-[5px] mx-0 hover:bg-color3';
  const dliLinksStyles = 'text-color2 no-underline w-full hover:text-color2';

  return (
    <header className="flex flex-row items-center justify-between bg-color1
      text-color2 text-lg font-bold w-full fixed top-0 left-0 px-5 py-0 m-0 md:mb-[20px]">

      <h2 className='text-[22px] pl-[2px]'>
        <a href='/' className='text-inherit hover:text-inherit'>Shop Now</a>
      </h2>

      <div className='relative w-full my-5 mx-0 flex justify-center items-center max-w-[150px]'>
        <span className='mr-2'><FaSearch /></span>
        <input
          type='text'
          placeholder='Search'
          className='md:w-[90%] p-[10px] pl-[40px] text-[16px] text-base shadow-md' />
      </div>

      <nav>
        <ul
          ref={menuRef}
          className={`list-none m-0 p-0 ${isOpen ? 'flex' : 'md:hidden'} flex-row md:absolute md:top-[40px] md:left-0 md:right-0 md:bg-color1`} >

          <li className={liStyles}>
            <a href='/' className={liLinksStyles}>Home</a>
          </li>
          <li className={liStyles}>
            <a href='#' className={liLinksStyles}>Categories</a>
          </li>
          <li className={liStyles}>
            <a href='#' className={liLinksStyles}>Offers</a>
          </li>

          <li className={liStyles}>
            <details className='group relative mr-8'>
              <summary> </summary>

              <ul className='flex flex-col absolute top-[100%] bg-color1 border-r-[4px] p-[10px]'>
                <li className={dliStyles}>
                  <a href='#' className={dliLinksStyles}>Profile</a>
                </li>
                <li className={dliStyles}>
                  <a href='#' className={dliLinksStyles}>View cart</a>
                </li>
                <li className={dliStyles}>
                  <a href='#' className={dliLinksStyles}>Settings</a>
                </li>
                <li className={dliStyles}>
                  <a href='#' className={dliLinksStyles}>Logout</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </nav>

      <button
        ref={buttonRef}
        className='md:block hidden bg-color1 border-none text-[24px] text-color2 cursor-pointer'
        onClick={toggleMenu}>
        ☰
      </button>
    </header>
  );
};
