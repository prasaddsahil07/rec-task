// src/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-xl"><strong>REC</strong>ursion</div>
        <div className="flex items-center space-x-4">
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
          </a><a
            href="#"
            className="text-white transition duration-200 hover:text-orange-500 hover:underline"
          >
            Meet The Team
          </a>
        </div>
        <div><button
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
