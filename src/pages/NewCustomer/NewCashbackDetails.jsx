import React, { useState } from 'react';
import ProgressIndicator from '../../components/ProgressIndicator';
import { useNavigate } from 'react-router-dom';

const NewCashbackDetails = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const steps = [
    "Personal Details", "Contact Details", "Employment Details", "Cashback Details", "Supplementary Card", "Almost there!", "Identity Verification"
  ];
  const currentStep = 4;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    navigate('/#');
  };

  const handlePrevious = () => {
    navigate('/#');
  };

  return (
    <div className="bg-gradient-to-br from-red-100 to-blue-100 min-h-screen py-12 px-4 flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-xl p-10 w-full max-w-4xl space-y-8">
        <ProgressIndicator steps={steps} currentStep={currentStep} />
        <h2 className="text-2xl font-bold text-red-700 mb-4 text-center">Here's the best thing about DFCC credit cards</h2>
        <p className="text-gray-700 text-left">
          If you maintain a DFCC Bank account, 1% of the monthly credit card spend will be credited to a nominated account.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <p className="text-gray-700 text-left">
              Since you're a new customer, your cashback will be credited to your DFCC credit card by default.<br />
              Want it to go to a DFCC account instead? Just click below!
            </p>
          </div>
          <div className="md:col-span-2 flex items-center gap-4">
            <input
              type="checkbox"
              id="nominateAccount"
              name="nominateAccount"
              checked={formData.nominateAccount || false}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  nominateAccount: e.target.checked,
                }))
              }
              className="mr-2 h-5 w-5 text-red-600 focus:ring-red-500 border-gray-300 rounded"
            />
            <label htmlFor="nominateAccount" className="text-gray-800 cursor-pointer">
              I want to nominate a DFCC account to receive my cashback.
            </label>
          </div>
          {formData.nominateAccount && (
            <input
              type="text"
              name="dfccAccountNumber"
              placeholder="DFCC Account Number*"
              value={formData.dfccAccountNumber || ''}
              onChange={handleChange}
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          )}
          <div className="md:col-span-2">
            <p className="text-gray-700 text-left">
              The 1% of the supplementary card spend will be credited to the same account mentioned above.<br />Card Settlement
            </p>
          </div>
        </div>

        <div className="pt-6 flex justify-center w-full">
          <button onClick={handlePrevious} className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition font-semibold text-lg">
            Previous
          </button>
          <button onClick={handleNext} className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition font-semibold text-lg ml-4">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewCashbackDetails;