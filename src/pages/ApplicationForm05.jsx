import React, { useState } from 'react';
import ProgressIndicator from '../components/ProgressIndicator';
import { useNavigate } from 'react-router-dom';

const ApplicationForm05 = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const steps = [
    "Personal Details", "Contact Details", "Employment Details", "Cashback Details", "Supplementary Card", "Almost there!", "Identity Verification"
  ];
  const currentStep = 5;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    navigate('/application-form-06');
  };

  const handlePrevious = () => {
    navigate('/application-form-04');
  };

  return (
    <div className="bg-gradient-to-br from-red-100 to-blue-100 min-h-screen py-12 px-4 flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-xl p-10 w-full max-w-4xl space-y-8">
        <ProgressIndicator steps={steps} currentStep={currentStep} />
        <h2 className="text-2xl font-bold text-red-700 text-center mb-4">Provide details for an additional cardholder</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2 flex items-center gap-4">
            <p className="text-gray-700 text-sm">Do you wish to offer supplementary credit card to an immediate family member over 18 years old ?</p>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="supplementaryCard" onChange={(e) => setFormData((prev) => ({ ...prev, supplementaryCard: e.target.checked }))} />
              <span>Yes</span>
            </label>
          </div>
          <select name="relationship" onChange={handleChange} className="p-3 border rounded-lg">
            <option value="">Spouse</option>
            <option value="Son">Son</option>
            <option value="Daughter">Daughter</option>
          </select>
          <input name="nic" onChange={handleChange} type="text" placeholder="NIC No." className="p-3 border rounded-lg" />
          <input name="previousNic" onChange={handleChange} type="text" placeholder="Previous NIC Number (if applicable)" className="p-3 border rounded-lg" />
          <input name="surname" onChange={handleChange} type="text" placeholder="Surname" className="p-3 border rounded-lg" />
          <input name="otherNames" onChange={handleChange} type="text" placeholder="Other Names" className="p-3 border rounded-lg" />
          <input name="nameOnCard" onChange={handleChange} type="text" placeholder="Names to appear on the card" className="p-3 border rounded-lg" />
          <input name="dob" onChange={handleChange} type="date" placeholder="25/05/1950" className="p-3 border rounded-lg" />
          <select name="gender" onChange={handleChange} className="p-3 border rounded-lg">
            <option value="">Male</option>
            <option value="Female">Female</option>
          </select>
          <select name="nationality" onChange={handleChange} className="p-3 border rounded-lg">
            <option value="">Sri Lankan</option>
            <option value="Other">Other</option>
          </select>
          <div className="md:col-span-2 flex items-center gap-4">
            <p className="text-gray-700 text-sm">Would you like your credit card to be delivered to the same address as your primary card</p>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="sameDelivery" onChange={(e) => setFormData((prev) => ({ ...prev, sameDelivery: e.target.checked }))} />
              <span>No</span>
            </label>
          </div>
          <input name="address" onChange={handleChange} type="text" placeholder="Address" className="p-3 border rounded-lg" />
          <input name="city" onChange={handleChange} type="text" placeholder="City" className="p-3 border rounded-lg" />
          <input name="mobile" onChange={handleChange} type="text" placeholder="Mobile Number" className="p-3 border rounded-lg" />
          <input name="landlineHome" onChange={handleChange} type="text" placeholder="Landline-Home" className="p-3 border rounded-lg" />
          <input name="officeNumber" onChange={handleChange} type="text" placeholder="Office Number*" className="p-3 border rounded-lg" />
          <input name="email" onChange={handleChange} type="email" placeholder="Email ID*" className="p-3 border rounded-lg" />
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

export default ApplicationForm05;