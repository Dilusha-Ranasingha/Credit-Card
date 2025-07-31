import React, { useState, useEffect } from 'react';
import { Upload } from 'lucide-react';
import ProgressIndicator from '../components/ProgressIndicator';
import { useNavigate } from 'react-router-dom';

const Almostthere = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const steps = [
    "Personal Details", "Contact Details", "Employment Details", "Cashback Details", "Supplementary Card", "Almost there!", "Identity Verification"
  ];
  const currentStep = 6;

  useEffect(() => {
    const storedOtherIncome = localStorage.getItem('otherIncome') || 'no';
    const storedAffinityCard = localStorage.getItem('affinityCard') || 'no';
    // Handle typos in localStorage keys
    const storedAnnualOtherIncome = localStorage.getItem('annualOtherlncome') || localStorage.getItem('annualOtherIncome') || '';
    const storedSourceOfOtherIncome = localStorage.getItem('sourceOfOtherlncome') || localStorage.getItem('sourceOfOtherIncome') || '';
    const storedOtherIncomeDescription = localStorage.getItem('otherIncomeDescription') || '';
    setFormData((prev) => ({
      ...prev,
      otherIncome: storedOtherIncome,
      affinityCard: storedAffinityCard,
      annualOtherIncome: storedAnnualOtherIncome,
      sourceOfOtherIncome: storedSourceOfOtherIncome,
      otherIncomeDescription: storedOtherIncomeDescription,
    }));
    console.log('Local Storage Data:', {
      otherIncome: storedOtherIncome,
      affinityCard: storedAffinityCard,
      annualOtherIncome: storedAnnualOtherIncome,
      sourceOfOtherIncome: storedSourceOfOtherIncome,
      otherIncomeDescription: storedOtherIncomeDescription,
    });
  }, []);

  const handleChange = (e) => {
    const { name, files, value } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleNext = () => {
    navigate('/identity-verification');
  };

  const handlePrevious = () => {
    navigate('/supplementary-card');
  };

  const FileUploadField = ({ label, name, required = false }) => (
    <div className="space-y-2">
      <label className="block text-sm text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <input
          type="file"
          name={name}
          onChange={handleChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          required={required}
        />
        <div className="flex items-center justify-between px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-red-400 hover:bg-red-50 transition-colors cursor-pointer">
          <span className="text-gray-500 text-sm">
            {formData[name] ? formData[name].name : 'Choose file...'}
          </span>
          <Upload className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </div>
  );

  const OtherIncomeProofSection = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-900 border-b border-gray-200 pb-2">
        Other Income Proof
      </h3>
      <div className="max-w-md">
        <div className="relative">
          <input
            type="file"
            name="otherIncomeProof"
            onChange={handleChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="flex items-center justify-between px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-red-400 hover:bg-red-50 transition-colors cursor-pointer">
            <span className="text-gray-500 text-sm">Browse</span>
            <Upload className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );

  const MemberIDSection = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-900 border-b border-gray-200 pb-2">
        Member ID
      </h3>
      <div className="max-w-md">
        <input
          name="memberId"
          onChange={handleChange}
          type="text"
          placeholder="Member ID *"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-red-100 to-blue-100 min-h-screen py-12 px-4 flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-xl p-10 w-full max-w-4xl space-y-8">
        <ProgressIndicator steps={steps} currentStep={currentStep} />
        
        <div className="text-center mb-8">
          <h1 className="text-xl italic text-red-700 text-center mb-4">
            "Help us verify your identity"
          </h1>
        </div>
        <div>
          <h2 className="text-xl text-align-left font-bold text-gray-800">Upload Documents</h2>
        </div>

        <div className="space-y-8">
          {/* NIC Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900 border-b border-gray-200 pb-2">
              NIC
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FileUploadField label="Front Side" name="nicFront" required />
              <FileUploadField label="Rear Side" name="nicRear" required />
            </div>
          </div>

          {/* Latest Salary Slip Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900 border-b border-gray-200 pb-2">
              Latest Salary Slip
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FileUploadField label="Slip 1" name="salarySlip1" required />
              <FileUploadField label="Slip 2" name="salarySlip2" required />
              <FileUploadField label="Slip 3" name="salarySlip3" required />
            </div>
          </div>

          {/* Conditional Sections */}
          {formData.otherIncome === 'no' && formData.affinityCard === 'no' && null}
          {formData.otherIncome === 'yes' && formData.affinityCard === 'no' && <OtherIncomeProofSection />}
          {formData.otherIncome === 'no' && formData.affinityCard === 'yes' && <MemberIDSection />}
          {formData.otherIncome === 'yes' && formData.affinityCard === 'yes' && (
            <>
              <OtherIncomeProofSection />
              <MemberIDSection />
            </>
          )}

          {/* Miscellaneous Attachments Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900 border-b border-gray-200 pb-2">
              Miscellaneous Attachments
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FileUploadField label="Attachment" name="miscAttachment1" />
              <FileUploadField label="Attachment" name="miscAttachment2" />
              <FileUploadField label="Attachment" name="miscAttachment3" />
            </div>
          </div>

          {/* Additional Fields Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Promoter Code
                </label>
                <input
                  name="promoterCode"
                  onChange={handleChange}
                  type="text"
                  placeholder="Code*"
                  className="w-full max-w-md p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Remarks (If any)
                </label>
                <textarea
                  name="remarks"
                  onChange={handleChange}
                  placeholder="Remarks*"
                  rows="4"
                  className="w-full max-w-md p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                />
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-gray-700">
              Please retain original copies of the attached documents for verification purpose.
            </p>
          </div>
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

export default Almostthere;