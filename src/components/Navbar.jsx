import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-pink-100 shadow-md fixed top-0 w-full z-20">
      <div className="text-xl font-bold text-pink-600">For Riya ❤️</div>
      <div className="space-x-4 text-sm md:text-base">
        <Link to="/" className="text-pink-600 hover:text-pink-800">Home</Link>
        <Link to="/gallery" className="text-pink-600 hover:text-pink-800">Gallery</Link>
        <Link to="/story" className="text-pink-600 hover:text-pink-800">Love Story</Link>
        <Link to="/secret" className="text-pink-600 hover:text-pink-800">Secret</Link>
      </div>
    </nav>
  );
}

export default Navbar;
