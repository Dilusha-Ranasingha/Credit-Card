import React, { useState, useEffect } from 'react';
import platinum from '../assets/platinum.png';
import signature from '../assets/signature.png';
import VIC from '../assets/VIC.png';
import WMC from '../assets/WMC.png';
import { useNavigate } from 'react-router-dom';

const CreditLimitSection = () => {
  const [creditLimit, setCreditLimit] = useState('');
  const [selectedCard, setSelectedCard] = useState('');
  const [affinityCard, setAffinityCard] = useState('no');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [income, setIncome] = useState(100000);
  const [expenditure, setExpenditure] = useState(50000);
  const [recommendedLimit, setRecommendedLimit] = useState(0);
  const [incomeScale, setIncomeScale] = useState('');
  const [selectedAssociation, setSelectedAssociation] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve income scale from localStorage on component mount
    const storedIncomeScale = localStorage.getItem('selectedIncomeScale');
    if (storedIncomeScale) {
      setIncomeScale(storedIncomeScale);
    }
  }, []);

  const handleCheckEligibility = () => {
    setIsDialogOpen(true);
  };

  const calculateRecommendedLimit = () => {
    // Calculate Disposable Income (DI)
    const di = income - expenditure;
    
    // Calculate Principal and Monthly Repayment (PMR) as 5% of income
    const pmr = income * 0.05;
    
    // Calculate Debt Service Coverage Ratio (DSCR)
    const dscr = di / pmr;
    
    // Decision: If DSCR >= 1, recommended limit is 2x income; otherwise 0
    if (dscr >= 1) {
      return Math.round(income * 2);
    }
    return 0;
  };

  const handleSubmit = () => {
    const limit = calculateRecommendedLimit();
    setRecommendedLimit(limit);
    setCreditLimit(limit.toString());
    setIsDialogOpen(false);
  };

  const handleNext = () => {
    if (!creditLimit || !selectedCard) {
      alert("Please check eligibility and select a card type before proceeding.");
      return;
    }

    navigate('/application-form-01');
  };

  // Determine which cards to display based on income scale
  const getEligibleCards = () => {
    switch (incomeScale) {
      case '100000-249999':
        return ['platinum'];
      case '250000-299999':
        return ['platinum', 'signature'];
      case '300000-449999':
        return ['platinum', 'signature', 'wmc'];
      case '450000+':
        return ['platinum', 'signature', 'wmc', 'vic'];
      default:
        return []; // No cards if income scale is not set or invalid
    }
  };

  const eligibleCards = getEligibleCards();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-100 to-blue-300 py-12 px-4">
      <div className="bg-white p-10 rounded-xl shadow-xl max-w-5xl w-full space-y-10">
        <h2 className="text-3xl font-bold text-red-700 text-center">Select Your Credit Card</h2>

        {/* Credit Limit Display Section */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Preferred Credit Limit</h3>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <input
              type="text"
              value={creditLimit ? `LKR ${creditLimit}` : 'Not calculated yet'}
              readOnly
              className="w-full sm:w-auto flex-1 p-3 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
            />
            <button
              onClick={handleCheckEligibility}
              className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium"
            >
              Check Eligibility
            </button>
          </div>
        </div>

        {/* Card Selection */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Choose Your Credit Card Type</h3>
          <p className="text-gray-600 mb-6">Pick a card that suits your lifestyle</p>

          <div className="flex flex-col lg:flex-row gap-6 justify-center">
            {eligibleCards.includes('platinum') && (
              <div
                className={`border-2 p-6 rounded-xl cursor-pointer transition flex-1 ${
                  selectedCard === 'platinum' ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedCard('platinum')}
              >
                <div className="text-center mb-4">
                  <img src={platinum} alt="Visa Platinum Card" className="w-full max-w-xs mx-auto h-48 object-contain" />
                </div>
                <label className="flex items-center mb-4">
                  <input
                    type="radio"
                    name="cardType"
                    value="platinum"
                    checked={selectedCard === 'platinum'}
                    onChange={(e) => setSelectedCard(e.target.value)}
                    className="mr-3 w-4 h-4 text-red-600 focus:ring-red-500"
                  />
                  <span className="text-lg font-semibold text-gray-800">Visa Platinum Card</span>
                </label>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><span className="text-red-500 mr-2">•</span> Starting Credit Limit from LKR 100,000</li>
                  <li><span className="text-red-500 mr-2">•</span> 1% Unlimited CashBack into your DFCC account</li>
                </ul>
              </div>
            )}

            {eligibleCards.includes('signature') && (
              <div
                className={`border-2 p-6 rounded-xl cursor-pointer transition flex-1 ${
                  selectedCard === 'signature' ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedCard('signature')}
              >
                <div className="text-center mb-4">
                  <img src={signature} alt="Visa Signature Card" className="w-full max-w-xs mx-auto h-48 object-contain" />
                </div>
                <label className="flex items-center mb-4">
                  <input
                    type="radio"
                    name="cardType"
                    value="signature"
                    checked={selectedCard === 'signature'}
                    onChange={(e) => setSelectedCard(e.target.value)}
                    className="mr-3 w-4 h-4 text-red-600 focus:ring-red-500"
                  />
                  <span className="text-lg font-semibold text-gray-800">Visa Signature Card</span>
                </label>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><span className="text-red-500 mr-2">•</span> Starting Credit Limit from LKR 500,000</li>
                  <li><span className="text-red-500 mr-2">•</span> 1% Unlimited CashBack into your DFCC Bank account on every transaction</li>
                </ul>
              </div>
            )}

            {eligibleCards.includes('wmc') && (
              <div
                className={`border-2 p-6 rounded-xl cursor-pointer transition flex-1 ${
                  selectedCard === 'wmc' ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedCard('wmc')}
              >
                <div className="text-center mb-4">
                  <img src={WMC} alt="Visa World Mastercard" className="w-full max-w-xs mx-auto h-48 object-contain" />
                </div>
                <label className="flex items-center mb-4">
                  <input
                    type="radio"
                    name="cardType"
                    value="wmc"
                    checked={selectedCard === 'wmc'}
                    onChange={(e) => setSelectedCard(e.target.value)}
                    className="mr-3 w-4 h-4 text-red-600 focus:ring-red-500"
                  />
                  <span className="text-lg font-semibold text-gray-800">Visa World Mastercard</span>
                </label>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><span className="text-red-500 mr-2">•</span> Starting Credit Limit from LKR 500,000</li>
                  <li><span className="text-red-500 mr-2">•</span> 1.5% Unlimited CashBack into your DFCC account</li>
                  <li><span className="text-red-500 mr-2">•</span> 1% Unlimited</li>
                </ul>
              </div>
            )}

            {eligibleCards.includes('vic') && (
              <div
                className={`border-2 p-6 rounded-xl cursor-pointer transition flex-1 ${
                  selectedCard === 'vic' ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedCard('vic')}
              >
                <div className="text-center mb-4">
                  <img src={VIC} alt="Visa Infinite Card" className="w-full max-w-xs mx-auto h-48 object-contain" />
                </div>
                <label className="flex items-center mb-4">
                  <input
                    type="radio"
                    name="cardType"
                    value="vic"
                    checked={selectedCard === 'vic'}
                    onChange={(e) => setSelectedCard(e.target.value)}
                    className="mr-3 w-4 h-4 text-red-600 focus:ring-red-500"
                  />
                  <span className="text-lg font-semibold text-gray-800">Visa Infinite Card</span>
                </label>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><span className="text-red-500 mr-2">•</span> Starting Credit Limit from LKR 750,000</li>
                  <li><span className="text-red-500 mr-2">•</span> 1% Unlimited CashBack into your DFCC account</li>
                </ul>
              </div>
            )}
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-gray-500 mt-6 text-center italic">
            Note: The bank may downgrade or decline the card based on credit approval.
          </p>
        </div>

        {/* Affinity Option */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Optional: Affinity/Co-Branded Card</h4>
          <p className="text-gray-700 mb-4">Would you like to apply for an Affinity or Co-Branded Credit Card?</p>
          <div className="flex gap-6 mb-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="affinity"
                value="yes"
                checked={affinityCard === 'yes'}
                onChange={(e) => setAffinityCard(e.target.value)}
                className="mr-2 w-4 h-4 text-red-600 focus:ring-red-500"
              />
              <span className="text-gray-700">Yes</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="affinity"
                value="no"
                checked={affinityCard === 'no'}
                onChange={(e) => setAffinityCard(e.target.value)}
                className="mr-2 w-4 h-4 text-red-600 focus:ring-red-500"
              />
              <span className="text-gray-700">No</span>
            </label>
          </div>
          {affinityCard === 'yes' && (
            <div>
              <label className="block text-gray-800 mb-1">Select Association</label>
              <select
                value={selectedAssociation}
                onChange={(e) => setSelectedAssociation(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                <option value="">-- Select an association --</option>
                <option value="Affinity - Trinity College OBA">Affinity - Trinity College OBA</option>
                <option value="Affinity - St. Anthony's College Kandy OBA">Affinity - St. Anthony's College Kandy OBA</option>
                <option value="Affinity - Isipathana Collage OBA">Affinity - Isipathana Collage OBA</option>
                <option value="Affinity - St.Sebastian's Collage OBA">Affinity - St.Sebastian's Collage OBA</option>
                <option value="Co-Branded - Lanka IOC">Co-Branded - Lanka IOC</option>
              </select>
            </div>
          )}
        </div>

        {/* Next Button */}
        <div className="text-center pt-4">
          <button
            onClick={handleNext}
            className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition font-semibold text-lg"
          >
            Next
          </button>
        </div>

        {/* Dialog for Sliders */}
        {isDialogOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Adjust Your Income & Expenditure</h3>
              <p className="text-gray-600 mb-4">Slide to select your monthly income & expenditure</p>
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Monthly Income</label>
                  <input
                    type="range"
                    min="0"
                    max="500000"
                    value={income}
                    onChange={(e) => setIncome(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0</span>
                    <span>100,000</span>
                    <span>200,000</span>
                    <span>300,000</span>
                    <span>400,000</span>
                    <span>500,000</span>
                  </div>
                  <p className="text-right text-sm text-gray-600">LKR {income.toLocaleString()}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Monthly Expenditure</label>
                  <input
                    type="range"
                    min="0"
                    max="500000"
                    value={expenditure}
                    onChange={(e) => setExpenditure(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0</span>
                    <span>100,000</span>
                    <span>200,000</span>
                    <span>300,000</span>
                    <span>400,000</span>
                    <span>500,000</span>
                  </div>
                  <p className="text-right text-sm text-gray-600">LKR {expenditure.toLocaleString()}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Recommended Credit Limit</label>
                  <input
                    type="range"
                    min="0"
                    max="500000"
                    value={calculateRecommendedLimit()}
                    readOnly
                    className="w-full h-2 bg-gradient-to-r from-blue-300 to-red-500 rounded-lg appearance-none cursor-not-allowed"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0</span>
                    <span>100,000</span>
                    <span>200,000</span>
                    <span>300,000</span>
                    <span>400,000</span>
                    <span>500,000</span>
                  </div>
                  <p className="text-right text-sm text-gray-600">LKR {calculateRecommendedLimit().toLocaleString()}</p>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  onChange={handleSubmit}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreditLimitSection;