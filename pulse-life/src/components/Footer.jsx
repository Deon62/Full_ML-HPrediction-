import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-night-100 p-4 text-center">
      <div className="container mx-auto">
        <p className="font-sans text-sm md:text-base">&copy; {new Date().getFullYear()} Pulse Life. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-red-600 hover:text-green-700 dark:text-gray-400 dark:hover:text-gray-100" size={24} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-red-600 hover:text-green-700 dark:text-gray-400 dark:hover:text-gray-100" size={24} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-red-600 hover:text-green-700 dark:text-gray-400 dark:hover:text-gray-100" size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;