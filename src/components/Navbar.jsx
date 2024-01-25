import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between relative">
        <div className="text-white font-bold text-2xl "><strong className="text-3xl">REC</strong>ursion</div>
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
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-gray-800">
              <a
                href="#"
                className="block text-white p-3 hover:bg-gray-700"
              >
                Interview Experience
              </a>
              <a
                href="#"
                className="block text-white p-3 hover:bg-gray-700"
              >
                Events
              </a>
              <a
                href="#"
                className="block text-white p-3 hover:bg-gray-700"
              >
                Getting Started
              </a>
              <a
                href="#"
                className="block text-white p-3 hover:bg-gray-700"
              >
                Meet The Team
              </a>
            </div>
          )}
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
