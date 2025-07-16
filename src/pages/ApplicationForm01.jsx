import React, { useState } from 'react';
import ProgressIndicator from '../components/ProgressIndicator';
import { useNavigate } from 'react-router-dom';

const ApplicationForm01 = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const steps = [
    "Personal Details", "Contact Details", "Employment Details", "Cashback Details", "Supplementary Card", "Almost there!", "Identity Verification"
  ];
  const currentStep = 1;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    navigate('/application-form-02');
  };

  return (
    <div className="bg-gradient-to-br from-red-100 to-blue-100 min-h-screen py-12 px-4 flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-xl p-10 w-full max-w-4xl space-y-8">
        <ProgressIndicator steps={steps} currentStep={currentStep} />
        <h2 className="text-2xl font-bold text-red-700 text-center mb-4">We would like to know more about you</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <select name="title" onChange={handleChange} className="p-3 border rounded-lg">
            <option value="">Title *</option>
            <option value="Mr">Mr</option>
            <option value="Ms">Ms</option>
            <option value="Mrs">Mrs</option>
          </select>
          <input name="surname" onChange={handleChange} type="text" placeholder="Surname *" className="p-3 border rounded-lg" />
          <input name="otherNames" onChange={handleChange} type="text" placeholder="Other Names *" className="p-3 border rounded-lg" />
          <input name="nameOnCard" onChange={handleChange} type="text" placeholder="Name to appear on the card *" className="p-3 border rounded-lg" />
          <input name="dob" onChange={handleChange} type="date" placeholder="Date of Birth *" className="p-3 border rounded-lg" />
          <select name="gender" onChange={handleChange} className="p-3 border rounded-lg">
            <option value="">Gender *</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input name="nic" onChange={handleChange} type="text" placeholder="NIC Number *" className="p-3 border rounded-lg" />
          <input name="previousNic" onChange={handleChange} type="text" placeholder="Previous NIC No (if applicable)" className="p-3 border rounded-lg" />
          <select name="nationality" onChange={handleChange} className="p-3 border rounded-lg">
            <option value="">Nationality *</option>
            <option value="Sri Lankan">Sri Lankan</option>
            <option value="Other">Other</option>
          </select>
          <input name="countryOfBirth" onChange={handleChange} type="text" placeholder="Country of Birth *" className="p-3 border rounded-lg" />
          <select name="maritalStatus" onChange={handleChange} className="p-3 border rounded-lg">
            <option value="">Marital Status *</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
          </select>
          <input name="dependents" onChange={handleChange} type="number" placeholder="Number of Dependents *" className="p-3 border rounded-lg" />
          <input name="motherMaiden" onChange={handleChange} type="text" placeholder="Mother's Maiden Name *" className="p-3 border rounded-lg" />
          <select name="education" onChange={handleChange} className="p-3 border rounded-lg">
            <option value="">Highest Education Level *</option>
            <option value="O/L">O/L</option>
            <option value="A/L">A/L</option>
            <option value="Diploma">Diploma</option>
            <option value="Degree">Degree</option>
            <option value="Postgraduate">Postgraduate</option>
          </select>
          <div className="md:col-span-2 flex items-center gap-4">
            <p className="text-gray-700 text-sm">Are you a member of a family/business associate or business partner holding a senior public office?</p>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="govMember" onChange={(e) => setFormData((prev) => ({ ...prev, govMember: e.target.checked }))} />
              <span>Yes</span>
            </label>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-800">Reference Contact</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <input name="refName" onChange={handleChange} type="text" placeholder="Name *" className="p-3 border rounded-lg" />
          <div className="flex gap-2 items-center">
            <span className="text-gray-600">+94</span>
            <input name="refMobile" onChange={handleChange} type="text" placeholder="Mobile No *" className="p-3 border rounded-lg w-full" />
          </div>
          <input name="refRelation" onChange={handleChange} type="text" placeholder="Relationship *" className="p-3 border rounded-lg" />
        </div>

        <div className="text-center pt-6">
          <button onClick={handleNext} className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition font-semibold text-lg">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm01;