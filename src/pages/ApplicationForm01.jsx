import React from 'react';

const ApplicationForm01 = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <button className="bg-red-500 text-white px-4 py-2 rounded">Apply for a Credit Card</button>
          <div className="flex space-x-2">
            <span className="text-red-500">1</span>
            <span>Personal Details</span>
            <span className="text-red-500">2</span>
            <span>Contact Details</span>
            <span className="text-red-500">3</span>
            <span>Employment Details</span>
            <span className="text-red-500">4</span>
            <span>Cashback Details</span>
            <span className="text-red-500">5</span>
            <span>Supplementary Card</span>
            <span className="text-red-500">6</span>
            <span>Almost there!</span>
            <span className="text-red-500">7</span>
            <span>Identity Verification</span>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-center mb-6">"We would like to know more about you"</h2>
        <div className="space-y-4">
          <div className="flex space-x-4">
            <select className="w-1/4 p-2 border rounded">
              <option>Title *</option>
            </select>
            <input className="w-3/4 p-2 border rounded" placeholder="Surname *" />
          </div>
          <input className="w-full p-2 border rounded" placeholder="Other Names *" />
          <div className="flex space-x-4">
            <input className="w-1/2 p-2 border rounded" placeholder="Name to appear on the card *" />
            <input type="date" className="w-1/2 p-2 border rounded" placeholder="Date of Birth *" />
          </div>
          <div className="flex space-x-4">
            <select className="w-1/3 p-2 border rounded">
              <option>Gender *</option>
            </select>
            <input className="w-1/3 p-2 border rounded" placeholder="NIC Number *" />
            <input className="w-1/3 p-2 border rounded" placeholder="Previous NIC # (If Applicable)" />
          </div>
          <select className="w-full p-2 border rounded">
            <option>Nationality</option>
          </select>
          <div className="flex space-x-4">
            <input className="w-1/3 p-2 border rounded" placeholder="Country of birth" />
            <select className="w-1/3 p-2 border rounded">
              <option>Marital status *</option>
            </select>
            <input className="w-1/3 p-2 border rounded" placeholder="Number of dependents" />
          </div>
          <div className="flex space-x-4">
            <input className="w-1/2 p-2 border rounded" placeholder="Mother's maiden name *" />
            <select className="w-1/2 p-2 border rounded">
              <option>Highest education level *</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <span>Are you a member of your family/business associate/business partner holding a senior public office (Government judicial, Police or military).</span>
            <input type="radio" name="office" value="yes" /> Yes
            <input type="radio" name="office" value="no" /> No
          </div>
          <h3 className="text-lg font-semibold mt-6">"We would like to know some reference details of an alternative contact person"</h3>
          <div className="flex space-x-4">
            <input className="w-1/2 p-2 border rounded" placeholder="Name *" />
            <div className="w-1/2 flex items-center">
              <span className="mr-2">+94</span>
              <input className="w-full p-2 border rounded" placeholder="Mobile No *" />
            </div>
          </div>
          <input className="w-full p-2 border rounded" placeholder="Relationship *" />
        </div>
        <button className="w-full bg-red-500 text-white py-2 mt-6 rounded">Next</button>
      </div>
    </div>
  );
};

export default ApplicationForm01;