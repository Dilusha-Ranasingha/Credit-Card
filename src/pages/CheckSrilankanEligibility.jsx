import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckSrilankanEligibility = () => {
  const [name, setName] = useState('');
  const [nic, setNic] = useState('');
  const [mobile, setMobile] = useState('');
  const [errors, setErrors] = useState({});

  // Mock in-memory data for NIC to mobile number mapping
  const mockCustomerData = {
    '940000000001': '0771234567', // NIC: mobile
    '940000000002': '0712345678',
    '940000000003': '0755555555',
  };

  const navigate = useNavigate();

  // Validation helpers
  const isValidName = (value) => /^[A-Za-z\s]+$/.test(value);
  const isValidNIC = (value) => /^\d{12}$/.test(value);
  const isValidMobile = (value) => /^0\d{9}$/.test(value);

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Full Name is required.';
    else if (!isValidName(name)) newErrors.name = 'Full Name should only contain letters and spaces.';

    if (!nic) newErrors.nic = 'NIC is required.';
    else if (!isValidNIC(nic)) newErrors.nic = 'NIC should contain exactly 12 digits.';

    if (!mobile) newErrors.mobile = 'Mobile Number is required.';
    else if (!isValidMobile(mobile)) newErrors.mobile = 'Mobile Number should be 10 digits and start with 0.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProceed = () => {
    if (!validate()) return;

    // Check if NIC exists in mock data
    const dbMobile = mockCustomerData[nic];
    if (!dbMobile) {
      alert('NIC not found in database. Please contact support.');
      return;
    }

    // Store data in localStorage
    localStorage.setItem('customerName', name);
    localStorage.setItem('customerNIC', nic);
    localStorage.setItem('customerMobile', mobile);
    localStorage.setItem('dbMobile', dbMobile); // Store the database mobile for /exist-customer-detail

    // Navigate based on mobile number match
    if (mobile === dbMobile) {
      navigate('/add-nic');
    } else {
      navigate('/exist-customer-detail');
    }
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
            onChange={(e) => {
              const val = e.target.value;
              setName(val);
              setErrors((prev) => ({ ...prev, name: '' }));
            }}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
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
              setErrors((prev) => ({ ...prev, nic: '' }));
            }}
          />
          {errors.nic && <p className="text-red-500 text-sm mt-1">{errors.nic}</p>}
        </div>

        {/* Mobile Number Field */}
        <div>
          <label className="block text-gray-700 mb-1">Mobile Number</label>
          <input
            type="text"
            placeholder="Enter your mobile number"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            value={mobile}
            maxLength={10}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, '');
              setMobile(val.slice(0, 10));
              setErrors((prev) => ({ ...prev, mobile: '' }));
            }}
          />
          {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
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