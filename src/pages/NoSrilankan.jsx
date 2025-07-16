import React, { useState } from 'react';

const NoSrilankan = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setName('');
    setMobile('');
  };

// Validation helpers
const isNameValid = name.length >= 3 && name.length <= 20;
const isMobileValid = /^\d{10}$/.test(mobile);

return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-100 to-blue-300 relative">
        <div className="flex flex-col items-center justify-center w-full">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg w-full z-10">
                <h2 className="text-xl font-semibold text-red-700 mb-4 text-center">
                    Looks like you're applying from outside Sri Lanka!
                    Drop your number below - we'll be in touch soon.
                    We're excited to have you on board!
                </h2>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        if (isNameValid && isMobileValid) {
                            setShowPopup(true);
                            setName('');
                            setMobile('');
                        }
                    }}
                    className="space-y-4"
                >
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            minLength={3}
                            maxLength={20}
                            required
                        />
                        {!isNameValid && name.length > 0 && (
                            <p className="text-red-500 text-xs mt-1">
                                Name must be between 3 and 20 characters.
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                        <input
                            type="tel"
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                            value={mobile}
                            onChange={(e) => {
                                // Only allow digits, max 10
                                const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                                setMobile(val);
                            }}
                            maxLength={10}
                            required
                        />
                        {!isMobileValid && mobile.length > 0 && (
                            <p className="text-red-500 text-xs mt-1">
                                Mobile number must be exactly 10 digits.
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition"
                        disabled={!isNameValid || !isMobileValid}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>

        {/* Popup message */}
        {showPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
                <div className="bg-white rounded-xl p-6 max-w-sm w-full shadow-xl text-center">
                    <h3 className="text-lg font-semibold text-red-700 mb-2">Thank You!</h3>
                    <p className="text-gray-700 mb-4">
                        Please call <span className="font-semibold">011 235 0000</span> shortly to receive further instructions.
                    </p>
                    <button
                        className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
                        onClick={() => setShowPopup(false)}
                    >
                        Close
                    </button>
                </div>
            </div>
        )}
    </div>
);
};

export default NoSrilankan;