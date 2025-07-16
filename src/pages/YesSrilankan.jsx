import React, { useState } from 'react';

const YesSrilankan = () => {
  const [isAbove18, setIsAbove18] = useState(null);
  const [hasHighIncome, setHasHighIncome] = useState(null);
  const [isResident, setIsResident] = useState(true); // Default to Yes
  const [incomeScale, setIncomeScale] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleNext = () => {
    if (isAbove18 === null || hasHighIncome === null || isResident === null || (!isResident && !mobileNumber) || (isResident && !incomeScale) || !agreed) {
      alert("Please complete all fields and agree to the terms.");
      return;
    }

    // Continue with next logic (navigate, save, etc.)
    alert("Eligibility info submitted successfully!");
    window.location.href = "/check-srilankan-eligibility";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-100 to-blue-300">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-xl w-full space-y-6">
        <h2 className="text-2xl font-bold text-red-700 mb-2 text-center">Check Eligibility</h2>

        {/* Question 1 */}
        <div className="flex items-center justify-between">
          <span className="text-gray-800">Are you above 18 years?</span>
          <div className="space-x-3">
            <button
              onClick={() => setIsAbove18(true)}
              className={`px-4 py-1 rounded ${isAbove18 === true ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
            >
              Yes
            </button>
            <button
              onClick={() => setIsAbove18(false)}
              className={`px-4 py-1 rounded ${isAbove18 === false ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
            >
              No
            </button>
          </div>
        </div>

        {/* Question 2 */}
        <div className="flex items-center justify-between">
          <span className="text-gray-800">Is your monthly income above Rs. 100,000?</span>
          <div className="space-x-3">
            <button
              onClick={() => setHasHighIncome(true)}
              className={`px-4 py-1 rounded ${hasHighIncome === true ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
            >
              Yes
            </button>
            <button
              onClick={() => setHasHighIncome(false)}
              className={`px-4 py-1 rounded ${hasHighIncome === false ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
            >
              No
            </button>
          </div>
        </div>

        {/* Question 3 */}
        <div className="flex items-center justify-between">
          <span className="text-gray-800">Are you a resident of Sri Lanka?</span>
          <div className="space-x-3">
            <button
              onClick={() => setIsResident(true)}
              className={`px-4 py-1 rounded ${isResident === true ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
            >
              Yes
            </button>
            <button
              onClick={() => setIsResident(false)}
              className={`px-4 py-1 rounded ${isResident === false ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
            >
              No
            </button>
          </div>
        </div>

        {/* Conditional Content based on Residency */}
        {isResident ? (
          <div>
            <label className="block text-gray-800 mb-1">Select your minimum gross income scale:</label>
            <select
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              value={incomeScale}
              onChange={(e) => setIncomeScale(e.target.value)}
            >
              <option value="">-- Select income scale --</option>
              <option value="250000-350000">Rs. 250,000 - 350,000</option>
              <option value="350001-500000">Rs. 350,001 - 500,000</option>
              <option value="500001+">Rs. 500,001 and above</option>
            </select>
          </div>
        ) : (
          <div>
            <div className="w-full border-2 border-red-600 rounded-md p-4 bg-red-50 text-red-700">
              <p>Looks like you're applying from outside Sri Lanka! Drop your number below - we'll be in touch soon. We're excited to have you on board!</p>
            </div>
            <div>
              <input
                type="text"
                placeholder="Mobile Number"
                className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                value={mobileNumber}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  setMobileNumber(value);
                }}
                maxLength={10}
              />
              {mobileNumber && mobileNumber.length !== 10 && (
                <span className="text-red-600 text-sm">Mobile number must be exactly 10 digits.</span>
              )}
            </div>
          </div>
        )}
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            className="mt-1"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
          />
          <label className="text-sm text-gray-700">
            I have read and agreed with the <span className="font-medium text-red-700">General Terms and Conditions</span>.
          </label>
        </div>

        {/* Next Button */}
        <div className="text-center">
          <button
            onClick={handleNext}
            className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default YesSrilankan;