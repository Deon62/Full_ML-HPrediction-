import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook

const HeartDiseaseCalculator = ({ userName }) => {
  const [formData, setFormData] = useState({
    sex: "",
    age: "",
    totalCholesterol: "",
    hdlCholesterol: "",
    sbp: "",
    bmi: "",
    egfr: "",
    diabetic: "",
    smoking: "",
    antiHypertensive: "",
    lipidLowering: "",
  });

  const [notification, setNotification] = useState("");
  const navigate = useNavigate(); // Initialize navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setNotification("Calculation complete! Please click the View Analytics button.");
    
    // Remove notification after 5 seconds
    setTimeout(() => {
      setNotification("");
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
  {/* Title */}
  <h1 className="text-3xl font-bold text-black text-center mt-16">
    Welcome <span className="text-green-600">{userName}</span> to our Heart Disease Prediction Calculator.
  </h1>
  <p className="text-lg font-medium text-gray-700 text-center mt-2">
    Please enter details in the fields below to get your prediction.
  </p>

      <form className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl space-y-4" onSubmit={handleSubmit}>
        {/* Sex */}
        <div>
          <label className="block text-gray-700">Sex</label>
          <select
            name="sex"
            className="w-full mt-1 p-2 border rounded-md"
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Other Inputs */}
        {[
          { name: "age", label: "Age (Years)", min: 1, max: 120 },
          { name: "totalCholesterol", label: "Total Cholesterol (mg/dL)", min: 130, max: 320 },
          { name: "hdlCholesterol", label: "HDL Cholesterol (mg/dL)", min: 20, max: 100 },
          { name: "sbp", label: "SBP (mmHg)", min: 90, max: 200 },
          { name: "bmi", label: "BMI", min: 18.5, max: 39.9 },
          { name: "egfr", label: "eGFR", min: 15, max: 140 },
        ].map(({ name, label, min, max }) => (
          <div key={name}>
            <label className="block text-gray-700">{label}</label>
            <input
              type="number"
              name={name}
              min={min}
              max={max}
              className="w-full mt-1 p-2 border rounded-md"
              onChange={handleChange}
              required
            />
          </div>
        ))}

        {/* Yes/No Options */}
        {[
          { name: "diabetic", label: "Diabetic?" },
          { name: "smoking", label: "Currently Smoking?" },
          { name: "antiHypertensive", label: "Anti-Hypertensive Medications?" },
          { name: "lipidLowering", label: "Lipid Lowering Medications?" },
        ].map(({ name, label }) => (
          <div key={name}>
            <label className="block text-gray-700">{label}</label>
            <select
              name={name}
              className="w-full mt-1 p-2 border rounded-md"
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        ))}

        {/* Notification */}
        {notification && (
          <div className="mt-4 p-3 text-white bg-green-600 rounded-md text-center font-semibold">
            {notification}
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button type="submit" className="px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700">
            Calculate
          </button>
          <button
            type="button"
            onClick={() => navigate("/analytics")} // Navigate to Analytics Page
            className="px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700"
          >
            View Analytics
          </button>
        </div>
      </form>
      
    </div>

  );
};

export default HeartDiseaseCalculator;