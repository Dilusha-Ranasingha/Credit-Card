import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddNIC = () => {
    const [frontImage, setFrontImage] = useState(null);
    const [backImage, setBackImage] = useState(null);
    const [frontPreview, setFrontPreview] = useState('/path/to/mock-front-id-image.jpg');
    const [backPreview, setBackPreview] = useState('/path/to/mock-back-id-image.jpg');
    const navigate = useNavigate();

    const handleFrontImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFrontImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setFrontPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleBackImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setBackImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setBackPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        if (!frontImage || !backImage) {
            alert('Please upload both front and back images of your NIC.');
            return;
        }
        // Mock API call
        console.log('Uploading front image:', frontImage);
        console.log('Uploading back image:', backImage);
        alert('Image upload simulated. API call will be added here later.');
        // Future API call example: use FormData to send both images
    };

    const handleSkip = () => {
        navigate('/credit-limit-select');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-200">
            <div className="bg-white p-6 rounded-xl shadow-xl w-[600px] text-center space-y-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Update Your NIC</h2>
                <p className="text-gray-600 text-left text-md">Want to save time? <br /> <br /> Upload a clear image of your new NIC (front and back) to automatically fill in your name, address and NIC number. <br /><br />This is optional and only works with the new NIC format shown below.</p>

                {/* Existing ID Images Display */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="border-2 border-gray-300 rounded-lg p-4">
                        <h3 className="text-gray-700 font-semibold mb-2">Current NIC Front</h3>
                        <img
                            src={frontPreview}
                            alt="Current NIC Front"
                            className="w-full h-48 object-contain bg-gray-100 rounded-md"
                        />
                    </div>
                    <div className="border-2 border-gray-300 rounded-lg p-4">
                        <h3 className="text-gray-700 font-semibold mb-2">Current NIC Back</h3>
                        <img
                            src={backPreview}
                            alt="Current NIC Back"
                            className="w-full h-48 object-contain bg-gray-100 rounded-md"
                        />
                    </div>
                </div>

                {/* Upload New ID Images */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="border-2 border-gray-300 rounded-lg p-4">
                        <h3 className="text-gray-700 font-semibold mb-2">Upload NIC Front</h3>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFrontImageUpload}
                            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-600 file:text-white hover:file:bg-red-700"
                        />
                        {frontImage && (
                            <p className="text-green-600 text-sm mt-2">Image selected: {frontImage.name}</p>
                        )}
                    </div>
                    <div className="border-2 border-gray-300 rounded-lg p-4">
                        <h3 className="text-gray-700 font-semibold mb-2">Upload NIC Back</h3>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleBackImageUpload}
                            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-600 file:text-white hover:file:bg-red-700"
                        />
                        {backImage && (
                            <p className="text-green-600 text-sm mt-2">Image selected: {backImage.name}</p>
                        )}
                    </div>
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