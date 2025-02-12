import { useState } from "react";
import Navbar from "../components/Navbar";
import Chatbot from "../components/Chatbot";

const Layout = ({ children }) => {
  const [isChatVisible, setIsChatVisible] = useState(false);

  return (
    <div className="relative">
      <Navbar />
      <main className="min-h-screen">{children}</main>

      {/* Chatbot */}
      <Chatbot 
        isVisible={isChatVisible} 
        toggleVisibility={() => setIsChatVisible(!isChatVisible)} 
      />

      {/* Floating Chat Icon */}
      {!isChatVisible && (
        <button
          onClick={() => setIsChatVisible(true)}
          className="fixed bottom-10 right-8 w-16 h-16 bg-red-600 text-white text-3xl flex items-center justify-center rounded-full shadow-lg active:scale-90"
        >
          💬
        </button>
      )}
    </div>
  );
};

export default Layout;