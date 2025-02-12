import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import banner3 from "../assets/images/banner3.jpg";
import banner4 from "../assets/images/banner4.jpg";
import sample2 from "../assets/images/sample2.png";  

const Exercise = () => {
  return (
    <div className="min-h-screen pt-28 px-6">
      {/* Title Section with Red Line */}
      <div className="relative mb-12 flex items-center">
        <div className="absolute left-0 w-2 h-20 bg-green-600"></div> {/* Red Line */}
        <img src={sample2} alt="Exercise Icon" className="w-24 h-auto mr-6 ml-4" />
        <div className="relative z-10">
          <h1 className="absolute text-gray-300 text-8xl font-bold -z-10 top-0 transform -translate-y-1/2">
            02
          </h1>
          <h2 className="text-3xl font-bold text-green-600">The Exercise Advantage</h2>
          <p className="text-lg text-gray-700">SWEAT FOR A STRONGER HEART</p>
        </div>
      </div>
      
      <div className="flex justify-center space-x-6 mb-4">
        <img src={banner3} alt="Exercise Banner 3" className="w-1/2 h-auto rounded-lg shadow-md" />
        <img src={banner4} alt="Exercise Banner 4" className="w-1/2 h-auto rounded-lg shadow-md" />
      </div>

      {/* Text Sections with Red Line */}
      <div className="w-full text-gray-700 mb-12 px-6">
        {[
          {
            title: "Regular Exercise for a Healthy Heart",
            content: "Regular exercise is one of the best ways to strengthen your heart and prevent heart failure. Engaging in physical activity improves circulation, lowers blood pressure, and helps maintain a healthy weight..."
          },
          {
            title: "Benefits of Regular Exercise",
            content: "Improved Circulation: Exercise enhances blood flow, ensuring that your heart pumps efficiently and effectively..."
          },
          {
            title: "Recommended Types of Exercise",
            content: "Aerobic Exercises: Walking, cycling, swimming, dancing. Strength Training: Weight lifting, resistance bands. Flexibility and Balance Exercises: Yoga, Tai Chi."
          },
          {
            title: "Final Thought",
            content: "By incorporating these exercises into your routine, you can significantly improve your heart health and overall well-being..."
          }
        ].map((section, index) => (
          <div key={index} className="relative shadow-lg p-6 mb-6 rounded-lg bg-white flex">
            <div className="absolute left-0 w-1 h-14 bg-blue-900"></div> {/* Red Line */}
            <div className="pl-6"> {/* Padding to prevent overlap */}
              <span className="text-green-600 font-semibold">{section.title}</span><br />
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

export default Exercise;