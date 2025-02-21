import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeartDiseaseCalculator = ({ userName }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    smoking: "",
    blood_pressure: "",
    cholesterol: "",
    family_history: "",
    diabetes: "",
    high_bp: "",
    low_hdl: "",
    high_ldl: "",
    exercise: "",
    alcohol: "",
    stress: "",
    bmi: "",
    sleep: "",
    triglycerides: "",
    sugar_consumption: "",
    fasting_blood_sugar: "",
    crp: "",
    homocysteine: "",
  });

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Build features array in the order required by your model:
    const features = [
      parseFloat(formData.age),
      parseInt(formData.gender),
      parseInt(formData.smoking),
      parseFloat(formData.blood_pressure),
      parseFloat(formData.cholesterol),
      parseInt(formData.family_history),
      parseInt(formData.diabetes),
      parseInt(formData.high_bp),
      parseInt(formData.low_hdl),
      parseInt(formData.high_ldl),
      parseInt(formData.exercise),
      parseInt(formData.alcohol),
      parseInt(formData.stress),
      parseFloat(formData.bmi),
      parseFloat(formData.sleep),
      parseFloat(formData.triglycerides),
      parseInt(formData.sugar_consumption),
      parseFloat(formData.fasting_blood_sugar),
      parseFloat(formData.crp),
      parseFloat(formData.homocysteine)
    ];
    
    try {
      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ features })
      });

      // Get the text response and check if it's empty.
      const responseText = await response.text();
      if (!responseText) {
        setError("Received empty response from server.");
        setResult(null);
        return;
      }

      // Parse the response text to JSON.
      const data = JSON.parse(responseText);

      if (data.status === "success") {
        setResult({
          prediction: data.prediction === 1 ? "Yes" : "No",
          probability: (data.probability * 100).toFixed(2) + "%"
        });
        setError("");
      } else {
        setError(data.error || "Prediction failed");
        setResult(null);
      }
    } catch (err) {
      console.error("Error:", err);
      setError("An error occurred while predicting");
      setResult(null);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mt-8 mb-4">
        Heart Disease Prediction
      </h1>
      <form id="predictionForm" className="space-y-4" onSubmit={handleSubmit}>
        {/* Age */}
        <div className="form-group">
          <label htmlFor="age" className="block text-gray-700">Age:</label>
          <input 
            type="number"
            id="age"
            name="age"
            required
            className="w-full p-2 border rounded"
            onChange={handleChange}
          />
        </div>
        {/* Gender */}
        <div className="form-group">
          <label htmlFor="gender" className="block text-gray-700">Gender:</label>
          <select 
            id="gender" name="gender" required 
            className="w-full p-2 border rounded" 
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="0">Male</option>
            <option value="1">Female</option>
          </select>
        </div>
        {/* Smoking */}
        <div className="form-group">
          <label htmlFor="smoking" className="block text-gray-700">Smoking:</label>
          <select 
            id="smoking" name="smoking" required 
            className="w-full p-2 border rounded" 
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </div>
        {/* Blood Pressure */}
        <div className="form-group">
          <label htmlFor="blood_pressure" className="block text-gray-700">Blood Pressure:</label>
          <input 
            type="number"
            id="blood_pressure"
            name="blood_pressure"
            required
            className="w-full p-2 border rounded"
            onChange={handleChange}
          />
        </div>
        {/* Cholesterol */}
        <div className="form-group">
          <label htmlFor="cholesterol" className="block text-gray-700">Cholesterol Level:</label>
          <input 
            type="number"
            id="cholesterol"
            name="cholesterol"
            required
            className="w-full p-2 border rounded"
            onChange={handleChange}
          />
        </div>
        {/* Family History */}
        <div className="form-group">
          <label htmlFor="family_history" className="block text-gray-700">Family Heart Disease:</label>
          <select 
            id="family_history" name="family_history" required 
            className="w-full p-2 border rounded" 
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </div>
        {/* Diabetes */}
        <div className="form-group">
          <label htmlFor="diabetes" className="block text-gray-700">Diabetes:</label>
          <select 
            id="diabetes" name="diabetes" required 
            className="w-full p-2 border rounded" 
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </div>
        {/* High Blood Pressure */}
        <div className="form-group">
          <label htmlFor="high_bp" className="block text-gray-700">High Blood Pressure:</label>
          <select 
            id="high_bp" name="high_bp" required 
            className="w-full p-2 border rounded" 
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </div>
        {/* Low HDL */}
        <div className="form-group">
          <label htmlFor="low_hdl" className="block text-gray-700">Low HDL Cholesterol:</label>
          <select 
            id="low_hdl" name="low_hdl" required 
            className="w-full p-2 border rounded" 
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </div>
        {/* High LDL */}
        <div className="form-group">
          <label htmlFor="high_ldl" className="block text-gray-700">High LDL Cholesterol:</label>
          <select 
            id="high_ldl" name="high_ldl" required 
            className="w-full p-2 border rounded" 
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </div>
        {/* Exercise Habits */}
        <div className="form-group">
          <label htmlFor="exercise" className="block text-gray-700">Exercise Habits:</label>
          <select 
            id="exercise" name="exercise" required 
            className="w-full p-2 border rounded" 
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="0">Low</option>
            <option value="1">Medium</option>
            <option value="2">High</option>
          </select>
        </div>
        {/* Alcohol Consumption */}
        <div className="form-group">
          <label htmlFor="alcohol" className="block text-gray-700">Alcohol Consumption:</label>
          <select 
            id="alcohol" name="alcohol" required 
            className="w-full p-2 border rounded" 
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="0">Low</option>
            <option value="1">Medium</option>
            <option value="2">High</option>
            <option value="3">Unknown</option>
          </select>
        </div>
        {/* Stress Level */}
        <div className="form-group">
          <label htmlFor="stress" className="block text-gray-700">Stress Level:</label>
          <select 
            id="stress" name="stress" required 
            className="w-full p-2 border rounded" 
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="0">Low</option>
            <option value="1">Medium</option>
            <option value="2">High</option>
          </select>
        </div>
        {/* BMI */}
        <div className="form-group">
          <label htmlFor="bmi" className="block text-gray-700">BMI:</label>
          <input 
            type="number" step="0.1" 
            id="bmi" name="bmi" required 
            className="w-full p-2 border rounded" 
            onChange={handleChange}
          />
        </div>
        {/* Sleep Hours */}
        <div className="form-group">
          <label htmlFor="sleep" className="block text-gray-700">Sleep Hours:</label>
          <input 
            type="number" step="0.1" 
            id="sleep" name="sleep" required 
            className="w-full p-2 border rounded" 
            onChange={handleChange}
          />
        </div>
        {/* Triglycerides */}
        <div className="form-group">
          <label htmlFor="triglycerides" className="block text-gray-700">Triglyceride Level:</label>
          <input 
            type="number" 
            id="triglycerides" name="triglycerides" required 
            className="w-full p-2 border rounded" 
            onChange={handleChange}
          />
        </div>
        {/* Sugar Consumption */}
        <div className="form-group">
          <label htmlFor="sugar_consumption" className="block text-gray-700">Sugar Consumption:</label>
          <select 
            id="sugar_consumption" name="sugar_consumption" required 
            className="w-full p-2 border rounded" 
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="0">Low</option>
            <option value="1">Medium</option>
            <option value="2">High</option>
          </select>
        </div>
        {/* Fasting Blood Sugar */}
        <div className="form-group">
          <label htmlFor="fasting_blood_sugar" className="block text-gray-700">Fasting Blood Sugar:</label>
          <input 
            type="number" 
            id="fasting_blood_sugar" name="fasting_blood_sugar" required 
            className="w-full p-2 border rounded" 
            onChange={handleChange}
          />
        </div>
        {/* CRP Level */}
        <div className="form-group">
          <label htmlFor="crp" className="block text-gray-700">CRP Level:</label>
          <input 
            type="number" step="0.1" 
            id="crp" name="crp" required 
            className="w-full p-2 border rounded" 
            onChange={handleChange}
          />
        </div>
        {/* Homocysteine */}
        <div className="form-group">
          <label htmlFor="homocysteine" className="block text-gray-700">Homocysteine Level:</label>
          <input 
            type="number" step="0.1" 
            id="homocysteine" name="homocysteine" required 
            className="w-full p-2 border rounded" 
            onChange={handleChange}
          />
        </div>
        <button 
          type="submit" 
          className="w-full py-3 bg-[#800000] text-white font-bold rounded hover:bg-[#700000]"
        >
          Predict
        </button>
      </form>
      {result && (
        <div className="result mt-6 p-4 border rounded bg-gray-100">
          <p><strong>Prediction:</strong> {result.prediction}</p>
          <p><strong>Probability:</strong> {result.probability}</p>
        </div>
      )}
      {error && (
        <div className="mt-6 p-4 border rounded bg-red-200 text-red-700">
          <p>Error: {error}</p>
        </div>
      )}
    </div>
  );
};

export default HeartDiseaseCalculator;