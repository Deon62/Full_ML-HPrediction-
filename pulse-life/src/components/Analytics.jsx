import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from "recharts";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa"; 

const Analytics = () => {
  const cholesterolData = [
    { name: "Cholesterol", value: 200 },
    { name: "BMI", value: 27 },
    { name: "eGFR", value: 90 },
    { name: "SBP", value: 120 },
  ];

  const COLORS = ["#11c252", "#ed1a1a"]; // Green for No Failure, Red for Failure

  const heartRiskData = [
    { name: "No Failure", value: 70 },
    { name: "Failure", value: 30 },
  ];

  const riskEstimates = [10, 20, 30, 40, 50].map((years) => ({
    years,
    risk: Math.floor(Math.random() * 100),
  }));

  const doctors = [
    { name: "Dr. John Doe", contact: "123-456-7890" },
    { name: "Dr. Jane Smith", contact: "987-654-3210" },
    { name: "Dr. Alan Brown", contact: "555-555-5555" },
  ];

  // Function to download report as JSON
  const downloadReport = () => {
    const report = {
      cholesterolData,
      heartRiskData,
      riskEstimates,
      doctors,
    };

    const blob = new Blob([JSON.stringify(report, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "heart_disease_analysis.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-6 space-y-8 pt-24"> {/* Added pt-24 to prevent navbar overlap */}
      
      {/* Title */}
      <h2 className="text-lg font-semibold text-center mb-6">
        Welcome Max, here is your Heart Disease Analysis
      </h2>

      {/* Graphs Section: Bar Chart (Left) & Pie Chart (Right) */}
      <div className="flex flex-col md:flex-row justify-center items-center space-x-6">
        {/* Bar Chart */}
        <div className="w-full md:w-1/2">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={cholesterolData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <ResponsiveContainer width={250} height={250}>
            <PieChart>
              <Pie data={heartRiskData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
                {heartRiskData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          {/* Pie Chart Legend */}
          <div className="flex space-x-4 mt-4">
            <div className="flex items-center">
              <span className="w-4 h-4 bg-red-600 rounded-full mr-2"></span>
              <span>Failure</span>
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 bg-green-600 rounded-full mr-2"></span>
              <span>No Failure</span>
            </div>
          </div>
        </div>
      </div>

      {/* Heart Failure Risk Estimations */}
      <div className="flex justify-center">
        <div className="w-3/4">
          <h3 className="text-lg font-bold text-red-600 mb-2">Heart Failure Risk Estimations</h3>
          <table className="w-full border border-green-600">
            <tbody>
              {riskEstimates.map((risk, index) => (
                <tr key={index} className="border-b border-green-600">
                  <td className="p-3 text-center">
                    Estimated risk of heart failure in {risk.years}-years: {risk.risk}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recommended Doctors (75% width, centered) */}
      <div className="w-3/4 mx-auto">
        <h3 className="text-lg font-bold text-red-600 mb-3">Recommended Doctors</h3>
        <table className="w-full bg-white border">
          <thead>
            <tr>
              <th className="border px-4 py-2">Doctor</th>
              <th className="border px-4 py-2">Contact</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{doctor.name}</td>
                <td className="border px-4 py-2">{doctor.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Download Report Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={downloadReport}
          className="px-6 py-2 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition duration-300"
        >
          Download Report
        </button>
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

export default Analytics;