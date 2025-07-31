import React, { useState } from 'react';
import ProgressIndicator from '../components/ProgressIndicator';
import { useNavigate } from 'react-router-dom';

const ContactDetails = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const steps = [
    "Personal Details", "Contact Details", "Employment Details", "Cashback Details", "Supplementary Card", "Almost there!", "Identity Verification"
  ];
  const currentStep = 2;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    navigate('/employment-details');
  };

  const handlePrevious = () => {
    navigate('/personal-details');
  };

  return (
    <div className="bg-gradient-to-br from-red-100 to-blue-100 min-h-screen py-12 px-4 flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-xl p-10 w-full max-w-4xl space-y-8">
        <ProgressIndicator steps={steps} currentStep={currentStep} />
        <h2 className="text-xl italic text-red-700 text-center mb-4">"Let's stay in touch"</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input name="permanentAddress" onChange={handleChange} type="text" placeholder="Permanent Address *" className="p-3 border rounded-lg" />
          <select name="residence" onChange={handleChange} className="p-3 border rounded-lg">
            <option value="">Residence *</option>
            <option value="Owned">Owned</option>
            <option value="Rented">Rented</option>
          </select>
          <input name="city" onChange={handleChange} type="text" placeholder="City *" className="p-3 border rounded-lg" />
          <div className="md:col-span-2 flex items-center gap-4">
            <p className="text-gray-700 text-sm">Residential address same as the permanent address ?</p>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="sameAddress" onChange={(e) => setFormData((prev) => ({ ...prev, sameAddress: e.target.checked }))} />
              <span>Yes</span>
            </label>
          </div>
          {!formData.sameAddress && (
            <>
              <input name="residentialAddress" onChange={handleChange} type="text" placeholder="Residential Address *" className="p-3 border rounded-lg" />
              <input name="residentialCity" onChange={handleChange} type="text" placeholder="Residential City *" className="p-3 border rounded-lg" />
            </>
          )}
          <input name="mobile" onChange={handleChange} type="text" placeholder="Mobile Number *" className="p-3 border rounded-lg" />
          <input name="landlineHome" onChange={handleChange} type="text" placeholder="Landline-Home *" className="p-3 border rounded-lg" />
          <input name="officeNo" onChange={handleChange} type="text" placeholder="Office no." className="p-3 border rounded-lg" />
          <input name="email" onChange={handleChange} type="email" placeholder="abc@gmail.com" className="p-3 border rounded-lg" />
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

export default ContactDetails;