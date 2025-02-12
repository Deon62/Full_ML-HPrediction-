import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import sample from "../assets/images/banner1.jpg";
import sample3 from "../assets/images/banner3.jpg";
import h5 from "../assets/images/h5.png";  

const Pulse = () => {
  return (
    <div className="min-h-screen pt-28 px-6">
      {/* Title Section with Red Line */}
      <div className="relative mb-12 flex items-center">
        <div className="absolute left-0 w-2 h-20 bg-red-500"></div> {/* Red Line */}
        <img src={h5} alt="Pulse Icon" className="w-24 h-auto mr-6 ml-4" />
        <div className="relative z-10">
          <h1 className="absolute text-gray-300 text-8xl font-bold -z-10 top-0 transform -translate-y-1/2">
            01
          </h1>
          <h2 className="text-3xl font-bold text-red-600">Pulse-Life</h2>
          <p className="text-lg text-gray-700">FUEL YOUR LIFE WITH ENERGY</p>
        </div>
      </div>
      
      <div className="flex justify-center space-x-6 mb-4">
        <img src={sample} alt="Pulse Sample" className="w-1/2 h-auto rounded-lg shadow-md" />
        <img src={sample3} alt="Pulse Sample 3" className="w-1/2 h-auto rounded-lg shadow-md" />
      </div>

      {/* Text Sections with Red Line */}
      <div className="w-full text-gray-700 mb-12 px-6">
        {[
          {
            title: "About Pulse Life",
            content: "Pulse Life is dedicated to helping people lead healthier lives by providing insights on heart health, prevention, and disease management..."
          },
          {
            title: "Our Vision",
            content: "At Pulse Life, we envision a world where every individual is empowered with the knowledge and resources to take control of their heart health..."
          },
          {
            title: "Our Goals",
            content: "Raise Awareness: Educate the public about the risk factors, symptoms, and prevention methods for heart disease and stroke..."
          },
          {
            title: "Our Programs and Services",
            content: "Educational Workshops: Host workshops and seminars to educate communities about heart health, prevention, and disease management..."
          },
          {
            title: "Join Us",
            content: "At Pulse Life, we believe that everyone has a role to play in the fight against cardiovascular diseases..."
          }
        ].map((section, index) => (
          <div key={index} className="relative shadow-lg p-6 mb-6 rounded-lg bg-white flex">
            <div className="absolute left-0 w-1 h-14 bg-blue-900"></div> {/* Red Line */}
            <div className="pl-6"> {/* Padding to prevent overlap */}
              <span className="text-red-600 font-semibold">{section.title}</span><br />
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

export default Pulse;