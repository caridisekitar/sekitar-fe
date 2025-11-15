"use client";
import React, { useState } from 'react';

const Logo: React.FC = () => (
  <div className="flex items-center space-x-3">
    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-500">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 13V21C1 21.2652 1.10536 21.5196 1.29289 21.7071C1.48043 21.8946 1.73478 22 2 22H7V11H17V22H22C22.2652 22 22.5196 21.8946 22.7071 21.7071C22.8946 21.5196 23 21.2652 23 21V8L12 1L1 8V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    <span className="text-2xl font-bold text-white">Sekitar</span>
  </div>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ["Home", "Cari Kos", "Maps", "Wishlist", "Kalkulator Budget"];

  return (
    <header className="absolute top-0 left-0 right-0 z-30 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map(link => (
            <a href="#" key={link} className="text-white hover:text-gray-200 transition-colors">{link}</a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center space-x-4">
          <button className="text-white px-6 py-2 rounded-md border border-white hover:bg-white hover:text-blue-500 transition-colors">Masuk</button>
          <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors">Daftar</button>
        </div>
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-white/90 backdrop-blur-sm mt-4 mx-4 rounded-lg p-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            {navLinks.map(link => (
              <a href="#" key={link} className="text-gray-800 hover:text-blue-500 transition-colors">{link}</a>
            ))}
             <div className="flex flex-col space-y-2 pt-4 border-t">
              <button className="w-full text-blue-500 px-6 py-2 rounded-md border border-blue-500 hover:bg-blue-500 hover:text-white transition-colors">Masuk</button>
              <button className="w-full bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors">Daftar</button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;