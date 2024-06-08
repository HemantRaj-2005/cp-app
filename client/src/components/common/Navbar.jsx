import React, { useState } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-gray-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center py-4 px-2">
                <img src='logo.png' alt="Logo" className="h-8 w-8 mr-2" />
                <span className='px-2 py-1 bg-gradient-to-r from-purple-900 via-indigo-900 to-gray-950 rounded-lg text-white shadow-2xl transition-transform hover:scale-105' >
                  SkillCrafter
                </span>
              </a>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/problems" className="hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium">Problems</a>
              <a href="/contests" className="hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium">Contests</a>
              <a href="/discuss" className="hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium">Discuss</a>
              <a href="/interview" className="hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium">Interview</a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <a href="/auth" className="py-2 px-3 bg-orange-400 hover:bg-yellow-500 rounded-md text-sm font-medium text-white">Login</a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="outline-none mobile-menu-button">
              <svg className="w-6 h-6 text-gray-100" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* for mobile menu  */}

      <div className={`mobile-menu ${isOpen ? '' : 'hidden'}`}>
        <ul>
          <li><a href="/" className="block text-sm px-2 py-4 text-gray-100 bg-gray-800 hover:bg-gray-700">Home</a></li>

          <li><a href="/problems" className="block text-sm px-2 py-4 text-gray-100 bg-gray-800 hover:bg-gray-700">Problems</a></li>

          <li><a href="/contests" className="block text-sm px-2 py-4 text-gray-100 bg-gray-800 hover:bg-gray-700">Contests</a></li>

          <li><a href="/discuss" className="block text-sm px-2 py-4 text-gray-100 bg-gray-800 hover:bg-gray-700">Discuss</a></li>

          <li><a href="/interview" className="block text-sm px-2 py-4 text-gray-100 bg-gray-800 hover:bg-gray-700">Interview</a></li>

          <li><a href="/auth" className="block text-sm px-2 py-4 text-gray-100 bg-orange-600 hover:bg-yellow-500">Login</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
