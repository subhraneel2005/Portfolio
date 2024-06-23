// components/Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-slate-700 to-slate-900 shadow fixed w-full z-10">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-400">
          Brandify
        </h1>
        <nav className="hidden md:flex justify-center items-center">
          <ul className="flex space-x-4">
            <li><Link to="hero" spy={true} smooth={true} duration={500} className="text-white hover:text-gray-300 cursor-pointer">Home</Link></li>
            <li><Link to="services" spy={true} smooth={true} duration={500} className="text-white hover:text-gray-300 cursor-pointer">Services</Link></li>
            <li><Link to="portfolio" spy={true} smooth={true} duration={500} className="text-white hover:text-gray-300 cursor-pointer">Portfolio</Link></li>
            <li><Link to="about" spy={true} smooth={true} duration={500} className="text-white hover:text-gray-300 cursor-pointer">About Us</Link></li>
            <li><Link to="contact" spy={true} smooth={true} duration={500} className="text-white hover:text-gray-300 cursor-pointer">Contact</Link></li>
          </ul>
        </nav>
        <div className="md:hidden">
          {/* Hamburger menu for mobile */}
          <button onClick={toggleMenu} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-slate-700 to-slate-900 fixed top-0 left-0 h-screen w-full flex flex-col justify-center items-center">
          {/* Close button */}
          <button onClick={closeMenu} className="absolute top-4 right-4 text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <ul className="flex flex-col space-y-4">
            <li><Link to="hero" spy={true} smooth={true} duration={500} className="text-white hover:text-gray-300 cursor-pointer" onClick={closeMenu}>Home</Link></li>
            <li><Link to="services" spy={true} smooth={true} duration={500} className="text-white hover:text-gray-300 cursor-pointer" onClick={closeMenu}>Services</Link></li>
            <li><Link to="portfolio" spy={true} smooth={true} duration={500} className="text-white hover:text-gray-300 cursor-pointer" onClick={closeMenu}>Portfolio</Link></li>
            <li><Link to="about" spy={true} smooth={true} duration={500} className="text-white hover:text-gray-300 cursor-pointer" onClick={closeMenu}>About Us</Link></li>
            <li><Link to="contact" spy={true} smooth={true} duration={500} className="text-white hover:text-gray-300 cursor-pointer" onClick={closeMenu}>Contact</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
