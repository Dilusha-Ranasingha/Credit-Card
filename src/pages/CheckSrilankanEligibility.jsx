import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckSrilankanEligibility = () => {
  const [name, setName] = useState('');
  const [nic, setNic] = useState('');

  const navigate = useNavigate();

  const handleProceed = () => {
    if (!name || !nic) {
      alert('Please enter your name and NIC before proceeding.');
      return;
    }
    alert(`Thanks ${name}! You selected "YES". We’ll proceed with your details.`);
    localStorage.setItem('customerName', name);
    localStorage.setItem('customerNIC', nic);
    navigate('/exist-customer-detail');
  };

  const handleSkip = () => {
    navigate('/credit-limit-select');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-100 to-blue-300">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-lg w-full space-y-6">
        <h2 className="text-2xl font-bold text-red-700 text-center mb-4">Complete Your Verification</h2>

        {/* Name Field */}
        <div>
          <label className="block text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* NIC Field */}
        <div>
          <label className="block text-gray-700 mb-1">NIC Number</label>
          <input
            type="text"
            placeholder="Enter your NIC"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            value={nic}
            onChange={(e) => setNic(e.target.value)}
          />
        </div>

        {/* Existing Customer Question */}
        <div>
          <div className="flex gap-4 justify-center">
            <button
              onClick={handleProceed}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
            >
              Proceed
            </button>
            <button
              onClick={handleSkip}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
            >
              Skip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckSrilankanEligibility;