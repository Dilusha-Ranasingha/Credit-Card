import React, { useState } from 'react';
import ProgressIndicator from '../components/ProgressIndicator';
import { useNavigate } from 'react-router-dom';

const CashbackDetails = () => {
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
    navigate('/supplementary-card');
  };

  const handlePrevious = () => {
    navigate('/employment-details');
  };

  return (
    <div className="bg-gradient-to-br from-red-100 to-blue-100 min-h-screen py-12 px-4 flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-xl p-10 w-full max-w-4xl space-y-8">
        <ProgressIndicator steps={steps} currentStep={currentStep} />
        <h2 className="text-2xl font-bold text-red-700 text-center mb-4">Here's the best thing about DFCC credit cards</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2 flex items-center gap-4">
            <p className="text-gray-700 text-sm">Would you like to nominate an account for this amazing promotion?</p>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="nominateAccount"
                checked={!!formData.nominateAccount}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    nominateAccount: e.target.checked,
                    // Optionally clear dfccAccount if unchecked
                    ...(e.target.checked ? {} : { dfccAccount: "" })
                  }))
                }
              />
              <span>Yes</span>
            </label>
          </div>
          {formData.nominateAccount && (
            <>
              <input
                name="dfccAccount"
                value={formData.dfccAccount || ""}
                onChange={handleChange}
                type="text"
                placeholder="DFCC Account Number *"
                className="p-3 border rounded-lg"
              />
              <div className="flex justify-start w-full md:col-span-2">
                <span className="text-gray-500 font-semibold">or</span>
              </div>
            </>
          )}
          <div className="md:col-span-2 flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="creditToAccount"
                checked={!!formData.creditToAccount}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    creditToAccount: e.target.checked
                  }))
                }
              />
              <span>Credit to DFCC Credit card Account</span>
            </label>
          </div>
          <div className="md:col-span-2 flex items-center gap-4">
            <p className="text-gray-700 text-sm">Would you like to setup an automatic settlement for the credit card from DFCC Bank account?</p>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="autoSettlement"
                checked={!!formData.autoSettlement}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    autoSettlement: e.target.checked
                  }))
                }
              />
              <span>Yes</span>
            </label>
          </div>
          <input
            name="accountNo"
            value={formData.accountNo || ""}
            onChange={handleChange}
            type="text"
            placeholder="Account No *"
            className="p-3 border rounded-lg"
          />
          <input
            name="debitPercentage"
            value={formData.debitPercentage || ""}
            onChange={handleChange}
            type="number"
            placeholder="% *"
            className="p-3 border rounded-lg"
          />
        </div>

        <div className="text-center pt-6">
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

export default CashbackDetails;