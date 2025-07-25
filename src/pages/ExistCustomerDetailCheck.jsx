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
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white p-6 rounded-xl shadow-xl max-w-lg w-full text-center space-y-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Hi Mr. {name}!</h2>
        <p className="text-yellow-600 text-sm">Great news - you're already a valued DFCC Bank customer! 🎉</p>
        <p className="text-gray-700 text-sm">
          To make things easier for you, we can fast-track your application using the details we already have.Let's start by confirming your contact number:
        </p>
        
        <p className="text-gray-800 text-sm">
          Is <span className="font-semibold">+94{maskPhone(phone)}</span> the number you're still using?
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleVerify}
            className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition"
          >
            Yes
          </button>
          <button
            onClick={handleSkip}
            className="bg-red-400 text-white px-4 py-2 rounded-full hover:bg-red-500 transition"
          >
            Skip
          </button>
        </div>
        <p className="text-red-600 text-xs">
          By clicking "Yes", you authorize DFCC Bank to retrieve and use your existing information to help pre-fill your application.
        </p>
        <p className="text-gray-600 text-xs">Click Yes & we'll send you a quick mobile OTP verification link.</p>
      </div>
    </div>
  );
};

export default ExistCustomerDetailCheck;