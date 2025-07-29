import React, { useState } from 'react';
import ProgressIndicator from '../components/ProgressIndicator';
import { useNavigate } from 'react-router-dom';

const IdentityVerification = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const steps = [
    "Personal Details", "Contact Details", "Employment Details", "Cashback Details", "Supplementary Card", "Almost there!", "Identity Verification"
  ];
  const currentStep = 7;

  const handlePrevious = () => {
    navigate('/almost-there');
  };

  const handleSubmit = () => {
    console.log("Form submitted");
  };

  return (
    <div className="bg-gradient-to-br from-red-100 to-blue-100 min-h-screen py-12 px-4 flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-xl p-10 w-full max-w-4xl space-y-8">
        <ProgressIndicator steps={steps} currentStep={currentStep} />
        <h2 className="text-2xl font-bold text-red-700 text-center mb-4">You're almost done!</h2>
        <p className="text-center text-gray-700">To complete your application, please click the mobile link we've sent you.</p>
        <p className="text-center text-gray-700">This will take you to a quick and secure step where you'll verify your identity and provide your signature.</p>
        <p className="text-center text-gray-700">You'll have 24 hours to complete this step - your details will be safely saved until then, before the link expires.</p>
        <p className="text-center text-gray-700">Thank you for choosing us - we're excited to have you on board!</p>

        <div className="text-center pt-6">
          <button onClick={handlePrevious} className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition font-semibold text-lg">
            Previous
          </button>
          <button onClick={handleSubmit} className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition font-semibold text-lg ml-4">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default IdentityVerification;