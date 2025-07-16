import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ExistCustomerDetailCheck = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const nic = localStorage.getItem('customerNIC');
    const customerName = localStorage.getItem('customerName');

    if (!nic || !customerName) {
      alert("Missing data. Please go back and fill the form.");
      navigate('/check-srilankan-eligibility'); // or the previous route
      return;
    }

    // Mocked backend API call (simulate real fetch using NIC)
    // Replace this with actual API call in future
    const mockPhone = '0771234569'; // Pretend you got this from DB So after the backend implementation API replace that code instent of '0771234569'.
    /*
            const fetchCustomerDetails = async () => {
            const nic = localStorage.getItem('customerNIC');
            const response = await fetch(`/api/customers/${nic}`);
            const data = await response.json();
            setName(data.name);
            setPhone(data.phone);
            };
    */
    setName(customerName);
    setPhone(mockPhone);
  }, []);

  const maskPhone = (number) =>
    number ? number.slice(0, 3) + '****' + number.slice(-2) : '';

  const handleVerify = () => {
    alert("Verified successfully!");
    navigate("/credit-limit-select");
  };

  const handleSkip = () => {
    alert("You chose to skip verification.");
    navigate("/credit-limit-select");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-100 to-blue-300">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-lg w-full text-center space-y-6">
        <h2 className="text-2xl font-bold text-red-700 mb-2">Verify Your Details</h2>

        <div className="text-gray-800 text-left space-y-3">
          <p><span className="font-semibold">Name:</span> {name}</p>
          <p><span className="font-semibold">Phone Number:</span> {maskPhone(phone)}</p>
          <p className="mt-4">
            Do you have the mobile number <span className="font-semibold">{maskPhone(phone)}</span> with you?
          </p>
        </div>

        <div className="flex justify-center gap-6 pt-4">
          <button
            onClick={handleVerify}
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
          >
            Verify
          </button>
          <button
            onClick={handleSkip}
            className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition"
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExistCustomerDetailCheck;