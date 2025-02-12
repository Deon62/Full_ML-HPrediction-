import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa"; // Import social icons
// Image for sections
import h5 from "../assets/images/h5.png";
import h2 from "../assets/images/h2.png";
import sample2 from "../assets/images/sample2.png";

const About = () => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-12 mt-16">
      {/* Template 1 */}
      <div className="relative flex flex-col md:flex-row items-center gap-10">
        <img src={h5} alt="h5" className="w-full md:w-1/3 rounded-lg" />
        <div className="relative w-full md:w-1/2 text-center md:text-left">
          <h1 className="absolute text-gray-300 text-9xl font-bold -z-10 top-0 transform -translate-y-1/2">01</h1>
          <h2 className="text-red-500 text-2xl font-bold">Pulse-life</h2>
          <h3 className="text-gray-800 text-sm uppercase font-semibold mb-4">About us - Heart Disease Prediction</h3>
          <p className="text-gray-600 mb-6">
            Pulse Life is dedicated to helping people lead healthier lives by providing insights on heart health, prevention, and disease management. Heart disease is the No. 1 killer worldwide, and stroke ranks second globally. Even when those conditions don’t result in death, they cause disability and diminish quality of life. We want to see a world free of cardiovascular diseases and stroke.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition" onClick={() => navigate("/pulse")}>
            Read More
          </button>
        </div>
        {/* Line after Template 1 */}
        <div className="absolute top-1/2 right-0 w-2 h-32 bg-red-500"></div>
      </div>

      {/* Template 2 - The Exercise Advantage */}
      <div className="relative flex flex-col md:flex-row-reverse items-center gap-10">
        <img src={sample2} alt="Sample 2" className="w-full md:w-1/3 rounded-lg" />
        <div className="relative w-full md:w-1/2 text-center md:text-left">
          <h1 className="absolute text-gray-300 text-9xl font-bold -z-10 top-0 transform -translate-y-1/2">02</h1>
          <h2 className="text-red-500 text-2xl font-bold">The Exercise Advantage</h2>
          <h3 className="text-gray-800 text-sm uppercase font-semibold mb-4">Sweat for a stronger heart</h3>
          <p className="text-gray-600 mb-6">
            Regular physical activity is a powerful tool in preventing heart disease. Exercise improves cardiovascular health by reducing blood pressure, lowering cholesterol levels, and maintaining a healthy weight. Incorporating just 30 minutes of moderate exercise, like brisk walking, into your daily routine can significantly enhance heart health and longevity.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition" onClick={() => navigate("/exercise")}>
            Read More
          </button>
        </div>
        {/* Line wrapping from right to left of Template 2 */}
        <div className="absolute top-1/2 left-0 w-2 h-32 bg-green-500"></div>
      </div>

      {/* Template 3 */}
      <div className="relative flex flex-col md:flex-row items-center gap-10">
        <img src={h2} alt="H2" className="w-full md:w-1/3 rounded-lg" />
        <div className="relative w-full md:w-1/2 text-center md:text-left">
          <h1 className="absolute text-gray-300 text-9xl font-bold -z-10 top-0 transform -translate-y-1/2">03</h1>
          <h2 className="text-red-500 text-2xl font-bold">Healthy for Good</h2>
          <h3 className="text-gray-800 text-sm uppercase font-semibold mb-4">Your path to a healthier tomorrow</h3>
          <p className="text-gray-600 mb-6">
            From expert articles to personalized health tracking, Pulse Life provides ways to eat smart in order to maintain a healthy heart and cardiovascular system. We provide the best of healthy recipes with heart check certified foods.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition" onClick={() => navigate("/healthy")}>
            Read More
          </button>
        </div>
        {/* Line after Template 3 */}
        <div className="absolute top-1/2 right-0 w-2 h-32 bg-yellow-500"></div>
      </div>

      {/* Manually Added Footer */}
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

export default About;