import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import h1 from "../assets/images/h1.png";  

const Healthy = () => {
  return (
    <div className="min-h-screen pt-28 px-6">
      {/* Title Section with Red Line */}
      <div className="relative mb-12 flex items-center">
        <div className="absolute left-0 w-2 h-20 bg-yellow-500"></div> {/* Red Line */}
        <img src={h1} alt="Healthy Icon" className="w-24 h-auto mr-6 ml-4" />
        <div className="relative z-10">
          <h1 className="absolute text-gray-300 text-8xl font-bold -z-10 top-0 transform -translate-y-1/2">
            03
          </h1>
          <h2 className="text-3xl font-bold text-yellow-500">Healthy For Good</h2>
          <p className="text-lg text-gray-700">NOURISH YOUR BODY FOR A STRONGER LIFE</p>
        </div>
      </div>
      
      <div className="flex justify-center space-x-6 mb-4">
        <img src={banner1} alt="Healthy Banner 1" className="w-1/2 h-auto rounded-lg shadow-md" />
        <img src={banner2} alt="Healthy Banner 2" className="w-1/2 h-auto rounded-lg shadow-md" />
      </div>

      {/* Text Sections with Red Line */}
      <div className="w-full text-gray-700 mb-12 px-6">
        {[
          {
            title: "Healthy Eating for a Healthy Heart",
            content: "A balanced diet is one of the best things you can do for your heart. Eating heart-healthy foods like fruits, vegetables, whole grains, lean proteins, and healthy fats can lower your risk of heart disease..."
          },
          {
            title: "Essential Heart-Healthy Foods",
            content: "Fruits and Vegetables: Rich in vitamins, minerals, and antioxidants. Whole Grains: Brown rice, quinoa, oats help lower cholesterol..."
          },
          {
            title: "Final Thought",
            content: "Eating these foods consistently will nourish your body and strengthen your heart over time."
          }
        ].map((section, index) => (
          <div key={index} className="relative shadow-lg p-6 mb-6 rounded-lg bg-white flex">
            <div className="absolute left-0 w-1 h-14 bg-blue-900"></div> {/* Red Line */}
            <div className="pl-6"> {/* Padding to prevent overlap */}
              <span className="text-yellow-500 font-semibold">{section.title}</span><br />
              {section.content}
            </div>
          </div>
        ))}
      </div>

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

export default Healthy;