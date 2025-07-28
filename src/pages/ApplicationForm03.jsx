import React, { useState } from 'react';
import ProgressIndicator from '../components/ProgressIndicator';
import { useNavigate } from 'react-router-dom';

const ApplicationForm03 = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const steps = [
    "Personal Details", "Contact Details", "Employment Details", "Cashback Details", "Supplementary Card", "Almost there!", "Identity Verification"
  ];
  const currentStep = 3;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    navigate('/application-form-04');
  };

  const handlePrevious = () => {
    navigate('/application-form-02');
  };

  return (
    <div className="bg-gradient-to-br from-red-100 to-blue-100 min-h-screen py-12 px-4 flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-xl p-10 w-full max-w-4xl space-y-8">
        <ProgressIndicator steps={steps} currentStep={currentStep} />
        <h2 className="text-2xl font-bold text-red-700 text-center mb-4">Let's learn about your professional background</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <select name="employmentType" onChange={handleChange} className="p-3 border rounded-lg">
            <option value="">Employment Type *</option>
            <option value="Salaried">Salaried</option>
            <option value="Self-Employed">Self-Employed</option>
          </select>
          <input name="employerName" onChange={handleChange} type="text" placeholder="Name of the employer *" className="p-3 border rounded-lg" />
          <input name="employerAddress" onChange={handleChange} type="text" placeholder="Address *" className="p-3 border rounded-lg" />
          <input name="city" onChange={handleChange} type="text" placeholder="City *" className="p-3 border rounded-lg" />
          <input name="industry" onChange={handleChange} type="text" placeholder="Industry type *" className="p-3 border rounded-lg" />
          <input name="employedSince" onChange={handleChange} type="date" placeholder="Employed since *" className="p-3 border rounded-lg" />
          <select name="employmentStatus" onChange={handleChange} className="p-3 border rounded-lg">
            <option value="">Employment Status *</option>
            <option value="Permanent">Permanent</option>
            <option value="Contract">Contract</option>
          </select>
          <input name="position" onChange={handleChange} type="text" placeholder="Position/Job title *" className="p-3 border rounded-lg" />
          <input name="monthlyIncome" onChange={handleChange} type="number" placeholder="Rs. Monthly Income *" className="p-3 border rounded-lg" />
          <input name="allowances" onChange={handleChange} type="number" placeholder="Variable Allowances (Monthly) *" className="p-3 border rounded-lg" />
          <div className="md:col-span-2 flex items-center gap-4">
            <p className="text-gray-700 text-sm">Do you have any other income?</p>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="otherIncome" onChange={(e) => setFormData((prev) => ({ ...prev, otherIncome: e.target.checked }))} />
              <span>Yes</span>
            </label>
          </div>
          {formData.otherIncome && (
            <>
              <input
                name="annualOtherIncome"
                onChange={handleChange}
                type="number"
                min="0"
                placeholder="Annual other income *"
                className="p-3 border rounded-lg"
              />
              <select name="sourceOfOtherIncome" onChange={handleChange} className="p-3 border rounded-lg">
                <option value="">Source of Other Income *</option>
                <option value="Earnings from Business Interest">Earnings from Business Interest</option>
                <option value="Investment Income">Investment Income</option>
                <option value="Deposit Interest income">Deposit Interest income</option>
                <option value="Other">Other</option>
              </select>
            </>
          )}
          <select name="cardAddress" onChange={handleChange} className="p-3 border rounded-lg">
            <option value="">To which address would you wish to receive th Credit Card ?</option>
            <option value="Permanent">Permanent</option>
            <option value="Residential">Residential</option>
            <option value="Office">Office</option>
          </select>
          <select name="mailAddress" onChange={handleChange} className="p-3 border rounded-lg">
            <option value="">To which address would you wish to receive the mail correspondence ?</option>
            <option value="Permanent">Permanent</option>
            <option value="Residential">Residential</option>
            <option value="Office">Office</option>
          </select>
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

export default ApplicationForm03;