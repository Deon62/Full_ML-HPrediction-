import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Section1 from './section1'; // Updated component name
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get('/api/restaurants')
      .then(response => {
        setRestaurants(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the restaurants!', error);
      });
  }, []);

  // Dummy data for testing (without images)
  const dummyRestaurants = [
    { id: 1, name: "Restaurant 1" },
    { id: 2, name: "Restaurant 2" },
    { id: 3, name: "Restaurant 3" },
    { id: 4, name: "Restaurant 4" },
    { id: 5, name: "Restaurant 5" },
  ];

  return (
    <div className="bg-white dark:bg-night-100 text-gray-900 dark:text-gray-600">
      <Navbar />
      <Section1 /> {/* Corrected component name */}
      <footer className="bg-white p-6 text-center mt-16">
              <div className="container mx-auto">
                <p className="font-sans text-sm md:text-base text-gray-700">&copy; {new Date().getFullYear()} Pulse Life. All rights reserved.</p>
                <div className="flex justify-center space-x-6 mt-3">
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-red-600 hover:text-green-700" size={26} />
                  </a>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-red-600 hover:text-green-700" size={26} />
                  </a>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-red-600 hover:text-green-700" size={26} />
                  </a>
                </div>
              </div>
            </footer>
    </div>
  );
};

export default Home;