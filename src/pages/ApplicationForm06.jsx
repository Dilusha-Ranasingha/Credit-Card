import React, { useState } from 'react';
import ProgressIndicator from '../components/ProgressIndicator';
import { useNavigate } from 'react-router-dom';

const ApplicationForm06 = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const steps = [
    "Personal Details", "Contact Details", "Employment Details", "Cashback Details", "Supplementary Card", "Almost there!", "Identity Verification"
  ];
  const currentStep = 6;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    navigate('/application-form-07');
  };

  const handlePrevious = () => {
    navigate('/application-form-05');
  };

  return (
    <div className="bg-gradient-to-br from-red-100 to-blue-100 min-h-screen py-12 px-4 flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-xl p-10 w-full max-w-4xl space-y-8">
        <ProgressIndicator steps={steps} currentStep={currentStep} />
        <h2 className="text-2xl font-bold text-red-700 text-center mb-4">Help us verify your identity</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <select name="nicType" onChange={handleChange} className="p-3 border rounded-lg">
            <option value="">Please Select your NIC Type</option>
            <option value="EIC">EIC</option>
          </select>
          <input name="nicFront" onChange={handleChange} type="text" placeholder="NIC Front Side" className="p-3 border rounded-lg" />
          <input name="nicRear" onChange={handleChange} type="text" placeholder="Rear Side" className="p-3 border rounded-lg" />
          <input name="salarySlip1" onChange={handleChange} type="text" placeholder="Latest Salary Slip Slip 1" className="p-3 border rounded-lg" />
          <input name="salarySlip2" onChange={handleChange} type="text" placeholder="Slip 2" className="p-3 border rounded-lg" />
          <input name="salarySlip3" onChange={handleChange} type="text" placeholder="Slip 3" className="p-3 border rounded-lg" />
          <input name="otherIncomeProof" onChange={handleChange} type="text" placeholder="Other Income Proof" className="p-3 border rounded-lg" />
          <input name="miscAttachment1" onChange={handleChange} type="text" placeholder="Miscellaneous Attachment" className="p-3 border rounded-lg" />
          <input name="miscAttachment2" onChange={handleChange} type="text" placeholder="Attachment" className="p-3 border rounded-lg" />
          <input name="miscAttachment3" onChange={handleChange} type="text" placeholder="Attachment" className="p-3 border rounded-lg" />
          <input name="promoterCode" onChange={handleChange} type="text" placeholder="Promoter Code" className="p-3 border rounded-lg" />
          <input name="remarks" onChange={handleChange} type="text" placeholder="Remarks (if any)" className="p-3 border rounded-lg" />
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

export default ApplicationForm06;