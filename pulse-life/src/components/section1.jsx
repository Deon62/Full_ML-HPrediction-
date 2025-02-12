import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaHeart } from 'react-icons/fa'; // Import heart icon
import pulseLogo from '../assets/images/pulse.png';
import sample from '../assets/images/main.png';
import sample1 from '../assets/images/sample1.png';
import sample2 from '../assets/images/sample2.png';
import sample3 from '../assets/images/sample3.png';
import pulse2 from '../assets/images/pulse2.png'; // New image import

const Section1 = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="relative h-screen bg-white dark:bg-night-100 flex items-center justify-center">
      <div className="relative z-10 text-left w-full max-w-screen-xl mx-auto flex flex-wrap items-center">
        
        {/* Left Content */}
        <div className="flex-1 pl-2"> {/* Adjusted padding to move closer */}
          
          {/* Logo and Heart Disease Prediction Text */}
          <div className="flex items-center space-x-0.5 mb-4">
            <img src={pulseLogo} alt="Pulse Life" className="w-16 h-16 md:w-26 md:h-22" />
            <h3 className="text-xl md:text-2xl font-bold">
              <span className="text-red-600">Heart</span> - <span className="text-green-600">Disease Prediction</span>
            </h3>
          </div>

          {/* Headings */}
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">
            Trusted leader in <span className="text-red-600">Heart Life</span>.
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-6">
            Enjoy a Disease Free Life
          </h2>

          {/* Placeholder Text */}
          <p className="text-gray-600 text-sm md:text-lg mb-6">
            Predict your chance of having a heart disease by machine learning because prevention is better than cure!.
          </p>

          {/* Read More Button */}
          <button 
            className="px-6 py-3 bg-red-300 text-green-600 font-bold rounded-lg hover:bg-gray-800 transition flex items-center"
            onClick={() => navigate('/heart-disease-calculator')} // Navigate on click
          >
            <FaHeart className="text-red-600 mr-2" /> {/* Red Heart Icon */}
            Calculator
          </button>
        </div>

        {/* Right Content: Main Image and Smaller Images */}
        <div className="relative flex-1 flex items-center justify-center">
          
          {/* Pulse2 Image Positioned Behind the Main Image on the Left Side */}
          <img src={pulse2} alt="Heart Pulse Left" className="absolute bottom-20 left-4 w-48 md:w-64 rounded-full object-cover z-0" />

          {/* Main Sample Image */}
          <img src={sample} alt="Main Sample" className="w-2/3 md:w-1/2 rounded-full object-cover z-10" style={{ marginRight: '20px' }} />

          {/* Pulse2 Image Positioned Behind the Main Image on the Right Side, Flipped */}
          <img src={pulse2} alt="Heart Pulse Right" className="absolute bottom-28 right-18 w-44 md:w-64 rounded-full object-cover z-0 transform scale-x-[-1]" />

          {/* Smaller Images */}
          <div className="flex flex-col space-y-3">
            <img src={sample1} alt="Sample 1" className="w-28 h-28 md:w-36 md:h-32 rounded-full" />
            <img src={sample2} alt="Sample 2" className="w-28 h-28 md:w-36 md:h-32 rounded-full" />
            <img src={sample3} alt="Sample 3" className="w-28 h-28 md:w-36 md:h-32 rounded-full" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Section1;