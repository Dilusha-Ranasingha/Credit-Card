import React, { useState } from "react";
import YesNoToggle from "../components/Button/YesNoToggle";

const Eligibility = () => {
  const [isAbove18, setIsAbove18] = useState(null);
  const [hasHighIncome, setHasHighIncome] = useState(true);
  const [isResident, setIsResident] = useState(null);
  const [incomeScale, setIncomeScale] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [cashDeposit, setCashDeposit] = useState(true);

  // Error states
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    const newErrors = {};

    if (isAbove18 === null) newErrors.isAbove18 = true;
    if (isAbove18 !== false && hasHighIncome === null) newErrors.hasHighIncome = true;
    if (isAbove18 !== false && isResident === null) newErrors.isResident = true;
    if (isAbove18 !== false && isResident === false && !mobileNumber) newErrors.mobileNumber = true;
    if (
      isAbove18 !== false &&
      isResident === true &&
      !incomeScale
    )
      newErrors.incomeScale = true;
    if (isAbove18 !== false && !agreed) newErrors.agreed = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    if (!isResident) {
      setShowPopup(true);
      return;
    }

    alert("Eligibility info submitted successfully!");
    window.location.href = "/check-srilankan-eligibility";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-100 to-blue-300">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-xl w-full space-y-6">
        
        {/* Question 1 */}
        <div className="flex items-center justify-between">
          <span className="text-gray-800">Are you above 18 years?</span>
          <div>
            <YesNoToggle value={isAbove18} onChange={setIsAbove18} />
            {errors.isAbove18 && (
              <div className="text-red-600 text-xs mt-1 font-bold">This field is required.</div>
            )}
          </div>
        </div>

        {/* Ineligibility Message for Age */}
        {isAbove18 === false && (
          <div className="w-full border-2 border-red-600 rounded-md p-4 bg-red-50 text-red-700 my-4">
            Thank you for applying for a DFCC Credit Card. We are unable to accommodate your request since we can only offer credit cards to individuals over 18 years of age. We look forward to having you onboard in the future!
          </div>
        )}

        {/* Other Questions and Fields */}
        {isAbove18 !== false && (
          <>
            {/* Question 2 */}
            <div className="flex items-center justify-between">
              <span className="text-gray-800">Are you a resident of Sri Lanka?</span>
              <div>
                <YesNoToggle value={isResident} onChange={setIsResident} />
                {errors.isResident && (
                  <div className="text-red-600 text-xs mt-1 font-bold">This field is required.</div>
                )}
              </div>
            </div>

            {/* Question 3 */}
            <div className="flex items-center justify-between">
              <span className="text-gray-800">Is your monthly average income above Rs. 100,000?</span>
              <div>
                <YesNoToggle value={hasHighIncome} onChange={setHasHighIncome} />
                {errors.hasHighIncome && (
                  <div className="text-red-600 text-xs mt-1 font-bold">This field is required.</div>
                )}
              </div>
            </div>

            {/* Conditional Field */}
            {hasHighIncome ? (
              <div>
                <label className="block text-gray-800 mb-1">Select your minimum gross income scale Rs:</label>
                <select
                  className="w-full p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                  value={incomeScale}
                  onChange={(e) => setIncomeScale(e.target.value)}
                >
                  <option value="">-- Select income scale --</option>
                  <option value="250000-350000">Rs. 250,000 - 350,000</option>
                  <option value="350001-500000">Rs. 350,001 - 500,000</option>
                  <option value="500001+">Rs. 500,001 and above</option>
                </select>
                {errors.incomeScale && (
                  <div className="text-red-600 font-bold text-xs mt-1">This field is required.</div>
                )}
              </div>
            ) : (
              <div>
                {/* Question 3.No */}
                <div className="flex items-center justify-between">
                  <span className="text-gray-800">Do you wish to obtain the card against a cash deposit?</span>
                  <div>
                    <YesNoToggle value={cashDeposit} onChange={setCashDeposit} />
                    {errors.cashDeposit && (
                      <div className="text-red-600 text-xs mt-1 font-bold">This field is required.</div>
                    )}
                  </div>
                </div>

                {/* Conditional Field */}
                {cashDeposit ? (
                  <div>
                    <div className="w-full border-2 border-red-600 rounded-md p-4 bg-red-50 text-red-700">
                      <p>
                        Great! Drop your number below and our team will reach out to you shortly with the next steps. Stay tuned - we are excited to have you on board!
                      </p>
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Mobile Number"
                        className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                        value={mobileNumber}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, "");
                          setMobileNumber(value);
                        }}
                        maxLength={10}
                      />
                      {errors.mobileNumber && (
                        <span className="text-red-600 font-bold text-xs">This field is required.</span>
                      )}
                      {mobileNumber && mobileNumber.length !== 10 && (
                        <span className="text-red-600 text-sm">Mobile number must be exactly 10 digits.</span>
                      )}
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="w-full border-2 border-red-600 rounded-md p-4 bg-red-50 text-red-700">
                      <p>
                        It looks like this card requires a higher income level - but don't worry, we've got options! Drop your number below and one of our team members will be in touch to guide you.
                      </p>
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Mobile Number"
                        className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                        value={mobileNumber}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, "");
                          setMobileNumber(value);
                        }}
                        maxLength={10}
                      />
                      {errors.mobileNumber && (
                        <span className="text-red-600 font-bold text-xs">This field is required.</span>
                      )}
                      {mobileNumber && mobileNumber.length !== 10 && (
                        <span className="text-red-600 text-sm">Mobile number must be exactly 10 digits.</span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Terms Checkbox */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                className="mt-1"
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
              />
              <label className="text-sm text-gray-700">
                I have read and agreed with the{" "}
                <span className="font-medium text-red-700">General Terms and Conditions</span>.
              </label>
            </div>
            {errors.agreed && (
              <div className="text-red-600 font-bold text-xs mt-1">This field is required.</div>
            )}
          </>
        )}

        {/* Next Button */}
        <div className="text-center">
          <button
            onClick={handleNext}
            className={`bg-red-600 text-white px-6 py-2 rounded-md transition ${
              isAbove18 === false ? "opacity-50 cursor-not-allowed" : "hover:bg-red-700"
            }`}
            disabled={isAbove18 === false}
          >
            Next
          </button>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full shadow-xl text-center">
            <p className="text-gray-700 mb-4">
              We will contact you shortly <br /> <span className="font-semibold">Thank you!</span>
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

export default Eligibility;