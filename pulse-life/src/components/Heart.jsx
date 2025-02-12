import React from "react";
import Footer from './Footer';
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import h2 from "../assets/images/h2.png";  // Import the new image

const Healthy = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-28 px-6"> {/* Increased padding-top to avoid navbar overlap */}
      {/* Title Section */}
      <div className="relative mb-12 flex items-center"> {/* Use flex to align image and title */}
        {/* Image on the left */}
        <img src={h2} alt="Healthy Icon" className="w-20 h-auto mr-6" /> {/* Small image with margin on right */}
        
        {/* Titles */}
        <div className="relative z-10"> {/* Ensure text is above "02" */}
          <h2 className="text-3xl font-bold text-red-600">The Healthy Advantage</h2>
          <p className="text-lg text-gray-700">NOURISH YOUR BODY FOR A STRONGER LIFE</p>
        </div>
      </div>
      
      {/* Image Section */}
      <div className="flex justify-center space-x-6 mb-4">
        <img src={banner1} alt="Healthy Banner 1" className="w-1/2 h-auto rounded-lg shadow-md" />
        <img src={banner2} alt="Healthy Banner 2" className="w-1/2 h-auto rounded-lg shadow-md" />
      </div>
      
      {/* Text Section - Full Width */}
      <div className="w-full text-gray-700 mb-12 px-6">
        <p className="text-lg">
          Maintaining a healthy lifestyle is key to living a long and happy life. A balanced diet, 
          regular physical activity, and good mental health practices all contribute to your overall well-being. 
          Prioritize nutritious foods, exercise, and self-care to keep your body and mind in optimal condition!
        </p>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Healthy;