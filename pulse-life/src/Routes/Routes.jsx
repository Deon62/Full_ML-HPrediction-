import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About"; // Import About page
import Contact from "../components/Contact";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />  {/* Add About route */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;