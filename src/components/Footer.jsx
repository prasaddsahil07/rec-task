// src/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-600 to-gray-900 text-white p-10">
      <div className="absolute top-0 left-0 w-0 h-0 border-solid border-transparent border-8 border-gray-800"></div>

      <div className="container mx-auto flex flex-col items-center relative z-10">
        <div className="flex items-center space-x-4 mb-4">
          <img
            src="/image.png" 
            alt="Logo"
            className="h-10"
          />
        </div>
        <div className="flex items-center space-x-8 text-xl mb-4">
          <div className="text-lg font-semibold">
            <p>NIT Durgapur</p>
            <p>Durgapur, West Bengal</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Email</p>
            <p>recursion.nit@gmail.com</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Phone</p>
            <p>Akshay A Baiju: +9194757584</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-white hover:text-gray-300">
            <FaFacebook />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <FaTwitter />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <FaInstagram />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <FaDiscord />
          </a>
        </div>
        <div className="m-4 text-xl">
            <p>&copy; 2024 All Rights Reserved</p></div>
        </div>
    </footer>
  );
};

export default Footer;
