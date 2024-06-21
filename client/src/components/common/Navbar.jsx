import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="bg-gray-900 text-gray-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center py-4 px-2">
                <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2" />
                <span className="px-2 py-1 bg-gradient-to-r from-purple-900 via-indigo-900 to-gray-950 rounded-lg text-white shadow-2xl transition-transform hover:scale-105">
                  SkillCrafter
                </span>
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/problems" className="hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                Problems
              </Link>
              <Link to="/contests" className="hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                Contests
              </Link>
              <Link to="/discuss" className="hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                Discuss
              </Link>
              <Link to="/interview" className="hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                Interview
              </Link>
              {user && (
                <Link to="/dashboard" className="hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                  Dashboard
                </Link>
              )}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            {user ? (
              <button onClick={handleLogout} className="py-2 px-3 bg-red-500 hover:bg-red-700 rounded-md text-sm font-medium text-white">
                Sign Out
              </button>
            ) : (
              <Link to="/auth" className="py-2 px-3 bg-orange-400 hover:bg-yellow-500 rounded-md text-sm font-medium text-white">
                Login
              </Link>
            )}
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

      {/* Mobile menu */}
      <div className={`mobile-menu ${isOpen ? '' : 'hidden'}`}>
        <ul>
          <li>
            <Link to="/" className="block text-sm px-2 py-4 text-gray-100 bg-gray-800 hover:bg-gray-700">
              Home
            </Link>
          </li>
          <li>
            <Link to="/problems" className="block text-sm px-2 py-4 text-gray-100 bg-gray-800 hover:bg-gray-700">
              Problems
            </Link>
          </li>
          <li>
            <Link to="/contests" className="block text-sm px-2 py-4 text-gray-100 bg-gray-800 hover:bg-gray-700">
              Contests
            </Link>
          </li>
          <li>
            <Link to="/discuss" className="block text-sm px-2 py-4 text-gray-100 bg-gray-800 hover:bg-gray-700">
              Discuss
            </Link>
          </li>
          <li>
            <Link to="/interview" className="block text-sm px-2 py-4 text-gray-100 bg-gray-800 hover:bg-gray-700">
              Interview
            </Link>
          </li>
          {user && (
            <li>
              <Link to="/dashboard" className="block text-sm px-2 py-4 text-gray-100 bg-gray-800 hover:bg-gray-700">
                Dashboard
              </Link>
            </li>
          )}
          {user ? (
            <li>
              <button onClick={handleLogout} className="block text-sm px-2 py-4 text-gray-100 bg-red-500 hover:bg-red-700 w-full text-left">
                Sign Out
              </button>
            </li>
          ) : (
            <li>
              <Link to="/auth" className="block text-sm px-2 py-4 text-gray-100 bg-orange-600 hover:bg-yellow-500">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
