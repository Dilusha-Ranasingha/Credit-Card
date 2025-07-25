import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddNIC = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [preview, setPreview] = useState('/path/to/mock-id-image.jpg'); // Mock existing ID image path
  const navigate = useNavigate();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (!uploadedImage) {
      alert('Please upload an ID image first.');
      return;
    }
    // Mock API call - replace with actual API call later
    console.log('Uploading image:', uploadedImage);
    alert('Image upload simulated. API call will be added here later.');
    // Future API call example: fetch('/api/upload-nic', { method: 'POST', body: uploadedImage })
  };

  const handleSkip = () => {
    navigate('/credit-limit-select');
  };

return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <div className="bg-white p-6 rounded-xl shadow-xl w-[600px] text-center space-y-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Update Your NIC</h2>
            <p className="text-gray-600 text-sm">Please upload a clear image of your National Identity Card (NIC).</p>

            {/* Existing ID Image Display */}
            <div className="border-2 border-gray-300 rounded-lg p-4">
                <h3 className="text-gray-700 font-semibold mb-2">Current NIC Image</h3>
                <img
                    src={preview}
                    alt="Current NIC"
                    className="w-full h-48 object-contain bg-gray-100 rounded-md"
                />
            </div>

            {/* Upload New ID Image */}
            <div className="border-2 border-gray-300 rounded-lg p-4">
                <h3 className="text-gray-700 font-semibold mb-2">Upload New NIC Image</h3>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-600 file:text-white hover:file:bg-red-700"
                />
                {uploadedImage && (
                    <p className="text-green-600 text-sm mt-2">Image selected: {uploadedImage.name}</p>
                )}
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4">
                <button
                    onClick={handleSubmit}
                    className="w-full max-w-[150px] bg-red-600 text-white py-2 rounded-full hover:bg-red-700 transition"
                >
                    Submit
                </button>
                <button
                    onClick={handleSkip}
                    className="w-full max-w-[150px] bg-red-400 text-white py-2 rounded-full hover:bg-red-500 transition"
                >
                    Skip
                </button>
            </div>
        </div>
    </div>
);
};

export default AddNIC;