import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout"; // Adjusted path to Layout.jsx
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import HeartDiseaseCalculator from "./components/HeartDiseaseCalculator";
import Analytics from "./components/Analytics"; // ✅ Added Analytics Import
import Login from "./components/Login"; 
import Signup from "./components/Signup"; 
import Exercise from "./components/Exercise"; // ✅ Import Exercise.jsx
import Healthy from "./components/Healthy"; // ✅ Import Healthy.jsx
import Pulse from "./components/Pulse"; // ✅ Import Pulse.jsx
import AdminDashboard from "./components/AdminDashboard";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/heart-disease-calculator" element={<HeartDiseaseCalculator />} />
          <Route path="/analytics" element={<Analytics />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/exercise" element={<Exercise />} /> 
          <Route path="/healthy" element={<Healthy />} /> 
          <Route path="/pulse" element={<Pulse />} /> 
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;