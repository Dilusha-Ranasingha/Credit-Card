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

  // Validation helpers
  const isValidName = (value) => /^[A-Za-z\s]+$/.test(value);
  const isValidNIC = (value) => /^\d{12}$/.test(value);

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
            onChange={(e) => {
              const val = e.target.value;
              if (val === '' || isValidName(val)) setName(val);
            }}
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
            maxLength={12}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, '');
              setNic(val.slice(0, 12));
            }}
          />
        </div>

        {/* Existing Customer Question */}
        <div>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => {
                if (!name || !nic) {
                  alert('Please enter your name and NIC before proceeding.');
                  return;
                }
                if (!isValidName(name)) {
                  alert('Full Name should only contain letters and spaces.');
                  return;
                }
                if (!isValidNIC(nic)) {
                  alert('NIC should contain exactly 12 digits.');
                  return;
                }
                alert(`Thanks ${name}! You selected "YES". We’ll proceed with your details.`);
                localStorage.setItem('customerName', name);
                localStorage.setItem('customerNIC', nic);
                navigate('/exist-customer-detail');
              }}
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