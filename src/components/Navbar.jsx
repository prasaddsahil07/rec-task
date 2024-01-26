import React, { useState } from 'react';
import Hamburger from 'hamburger-react';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between relative">
        <div className="text-white font-bold text-2xl">
          <strong className="text-3xl">REC</strong>ursion
        </div>
        <div className="hidden md:flex items-center space-x-4 text-xl">
          <a
            href="#"
            className="text-white transition duration-200 hover:text-orange-500 hover:underline"
          >
            Interview Experience
          </a>
          <a
            href="#"
            className="text-white transition duration-200 hover:text-orange-500 hover:underline"
          >
            Events
          </a>
          <a
            href="#"
            className="text-white transition duration-200 hover:text-orange-500 hover:underline"
          >
            Getting Started
          </a>
          <a
            href="#"
            className="text-white transition duration-200 hover:text-orange-500 hover:underline"
          >
            Meet The Team
          </a>
        </div>
        <div className="md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="text-white focus:outline-none relative z-10"
          >
            <div className="transition-all duration-300">
              <Hamburger
                toggled={isMenuOpen}
                toggle={setMenuOpen}
                size={24}
                rounded
                duration={0.3} // Adjust the duration as needed
                color="white"
                label="Show menu"
                direction="left"
              />
            </div>
          </button>
          <div
            className={`absolute top-full left-0 right-0 bg-gray-800 overflow-hidden transition-all duration-300 ${
              isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            {isMenuOpen && (
              <div>
                <a href="#" className="block text-white p-3 hover:bg-gray-700">
                  Interview Experience
                </a>
                <a href="#" className="block text-white p-3 hover:bg-gray-700">
                  Events
                </a>
                <a href="#" className="block text-white p-3 hover:bg-gray-700">
                  Getting Started
                </a>
                <a href="#" className="block text-white p-3 hover:bg-gray-700">
                  Meet The Team
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="hidden md:block">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-transform transform hover:scale-110"
          >
            LogIn
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
