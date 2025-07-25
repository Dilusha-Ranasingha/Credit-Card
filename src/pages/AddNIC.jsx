import React, { useRef, useState } from 'react';

const AddNIC = () => {
    const [nicImage, setNicImage] = useState(null);
    const fileInputRef = useRef();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setNicImage(URL.createObjectURL(file));
        }
    };

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    const handleSkip = () => {
        // Add skip logic here (e.g., navigate to next page)
        alert('Skipped NIC upload');
    };

    return (
        <div style={{ textAlign: 'center', marginTop: 40 }}>
            <h2>Upload Your NIC</h2>
            {nicImage ? (
                <img
                    src={nicImage}
                    alt="NIC Preview"
                    style={{ width: 300, height: 'auto', marginBottom: 20, border: '1px solid #ccc' }}
                />
            ) : (
                <div style={{ marginBottom: 20 }}>
                    <span>No NIC image uploaded.</span>
                </div>
            )}
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            <div>
                <button onClick={handleUploadClick} style={{ marginRight: 10 }}>
                    Upload NIC
                </button>
                <button onClick={handleSkip}>Skip</button>
            </div>
        </div>
    );
};

export default AddNIC;