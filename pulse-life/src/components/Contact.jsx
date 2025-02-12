import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { FaPaperPlane } from "react-icons/fa"; // Import paper plane icon
import emailjs from "emailjs-com";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_fkxwqe7", // EmailJS Service ID
        "template_ef01rgr", // EmailJS Template ID
        e.target, // This will automatically collect the form data
        "-hzfRaa9YXNOq7dsE" // EmailJS User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSending(false);
          alert("Your message was sent successfully!");
        },
        (error) => {
          console.log(error.text);
          setIsSending(false);
          alert("Oops, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-night-200 flex flex-col items-center py-10 flex-grow">
      {/* Updated Heading */}
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mt-16 mb-6">
        Talk to us more at <span className="text-red-600">Pulse-Life</span>
      </h1>

      <p className="text-lg text-gray-700 dark:text-gray-200 text-center max-w-2xl mb-10">
        Have any questions or feedback? We would love to hear from you! Reach
        out to us using the form below or via our contact details.
      </p>

      <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-6">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 py-2 pl-3 w-full rounded-md border border-gray-800 focus:outline-2 focus:border-none focus:outline-orange-200 placeholder:text-gray-500"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 py-2 pl-3 w-full rounded-md border border-gray-800 focus:outline-2 focus:border-none focus:outline-orange-200 placeholder:text-gray-500"
              placeholder="youremail@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 py-2 pl-3 w-full rounded-md border border-gray-800 focus:outline-2 focus:border-none focus:outline-orange-200 placeholder:text-gray-500"
              required
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Updated "Send Message" Button */}
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            disabled={isSending}
          >
            {isSending ? (
              <span className="flex items-center">
                <LoadingSpinner />
                Sending...
              </span>
            ) : (
              <>
                Send message
                <FaPaperPlane className="text-white text-sm ml-2" />
              </>
            )}
          </button>
        </form>
      </div>

      <div className="mt-10 text-center">
        <p className="text-xl text-gray-700 dark:text-gray-200">
          Or reach out to us directly:
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-200 mt-3">
          Phone: +123 456 789
        </p>
        <p className="mt-4">
          <a
            href="https://wa.me/123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline text-sm"
          >
            Chat with us on WhatsApp
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;