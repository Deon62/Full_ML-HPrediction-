import { useState } from "react";
import PropTypes from "prop-types";
import { IoClose } from "react-icons/io5";
import { BsFillSendFill } from "react-icons/bs";
import axios from "axios";

const Chatbot = ({ isVisible, toggleVisibility }) => {
  const [messages, setMessages] = useState([]); // State for storing messages
  const [input, setInput] = useState(""); // State for input field
  const [showReasoning, setShowReasoning] = useState(null); // State for showing reasoning

  const handleSendMessage = async () => {
    if (input.trim()) {
      // User message
      const userMessage = { text: input, isUser: true };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      try {
        const response = await axios.post("/api/chatbot", { message: input });
        const botResponse = {
          text: response.data.text,
          reasoning: response.data.reasoning,
          isUser: false,
        };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
      } catch (error) {
        console.error("Error sending message:", error);
      }

      setInput(""); // Clear input field
    }
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return isVisible ? (
    <div className="fixed bottom-14 right-3 sm:right-6 md:right-10 w-[320px] sm:w-[600px] h-[400px] bg-neutral-200 dark:bg-night-200 shadow-xl rounded-lg flex flex-col p-4 z-30">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-200">
          Chat with Us
        </h3>
        <button
          onClick={toggleVisibility}
          className="text-gray-800 hover:text-red-100 dark:text-gray-100"
        >
          <IoClose className="text-2xl" />
        </button>
      </div>
      {/* Messages Section */}
      <div className="flex-grow overflow-y-auto bg-gray-100 dark:bg-night-100 rounded p-2 space-y-2">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 ${message.isUser
              ? "ml-auto mb-4 bg-orange-800 text-white"
              : "self-start bg-gray-300 dark:bg-gray-600 text-black dark:text-white"
              } px-4 py-2 rounded-lg max-w-xs`}
          >
            <span>{message.text}</span>
            {!message.isUser && message.reasoning && (
              <button
                className="text-sm text-blue-500 underline"
                onClick={() => setShowReasoning(index)}
              >
                💭
              </button>
            )}
          </div>
        ))}
      </div>
      {/* Reasoning Modal */}
      {showReasoning !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40">
          <div className="bg-white p-4 rounded-lg shadow-lg w-[300px] text-center">
            <h4 className="font-bold mb-2">Chatbot&apos;s Thought</h4>
            <p>{messages[showReasoning]?.reasoning}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => setShowReasoning(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {/* Input Section */}
      <div className="mt-2 gap-2 flex items-center w-full">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleInputKeyDown}
          placeholder="Type your message..."
          className="py-3 pl-3 rounded border-2 border-gray-800 dark:border-gray-600 bg-gray-200 dark:bg-night-100 text-gray-900 dark:text-gray-200 placeholder:text-gray-600 text-base text-wrap w-full"
        />
        <button
          className="px-3 py-3 bg-red-500 mr-2 rounded-md active:scale-95"
          onClick={handleSendMessage}
        >
          <BsFillSendFill className="text-gray-100 text-2xl" />
        </button>
      </div>
    </div>
  ) : null;
};

// Add PropTypes for validation
Chatbot.propTypes = {
  isVisible: PropTypes.bool,
  toggleVisibility: PropTypes.func, // Optional function
};

export default Chatbot;