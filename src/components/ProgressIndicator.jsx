import React from 'react';

const ProgressIndicator = ({ steps, currentStep }) => {
  return (
    <div className="w-full max-w-6xl mx-auto mb-8">
      <h2 className="text-2xl font-bold text-center mb-8">Application for a Credit Card</h2>
      
      <div className="relative">
        {/* Background connecting line */}
        <div className="absolute top-6 left-12 right-12 h-0.5 bg-gray-300"></div>
        
        <div className="flex justify-between items-start">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center relative">
              {/* Step circle */}
              <div className="relative z-10 bg-white px-2">
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full border-2 font-bold text-lg
                    ${index + 1 < currentStep
                      ? 'bg-green-500 border-green-500 text-white' // completed steps
                      : index + 1 === currentStep
                      ? 'bg-red-500 border-red-500 text-white'   // current step
                      : 'bg-white border-gray-300 text-gray-500' // upcoming steps
                    }`}
                >
                  {index + 1 < currentStep ? (
                    // Checkmark for completed steps
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    // Step number for current and upcoming steps
                    index + 1
                  )}
                </div>
              </div>
              
              {/* Step content */}
              <div className="text-center mt-3 max-w-[100px]">
                <div className={`font-semibold text-sm leading-tight mb-1
                  ${index + 1 < currentStep
                    ? 'text-green-600'
                    : index + 1 === currentStep
                    ? 'text-black'
                    : 'text-gray-600'
                  }`}>
                  {step}
                </div>
                <div className={`text-xs
                  ${index + 1 < currentStep
                    ? 'text-green-500'
                    : index + 1 === currentStep
                    ? 'text-red-500'
                    : 'text-gray-400'
                  }`}>
                  {index + 1 < currentStep
                    ? 'Completed'
                    : index + 1 === currentStep
                    ? 'In Progress'
                    : 'Pending'
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;