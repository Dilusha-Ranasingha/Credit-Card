import React from 'react';

const ProgressIndicator = ({ steps, currentStep }) => {
  return (
    <div className="mb-8 px-4">
      <div className="flex items-start justify-between relative">
        {/* Background connecting line */}
        <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-300 z-0"></div>
        
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center relative z-10 bg-white px-2">
            {/* Step circle */}
            <div className="mb-3">
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full border-2 font-bold text-lg
                  ${index + 1 < currentStep
                    ? 'bg-green-500 border-green-500 text-white' // completed steps
                    : index + 1 === currentStep
                    ? 'bg-red-500 border-red-500 text-white'   // current step
                    : 'bg-white border-gray-300 text-gray-400' // upcoming steps
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
            
            {/* Step label */}
            <div className="text-center max-w-[120px]">
              <div className={`font-semibold text-sm leading-tight mb-1
                ${index + 1 < currentStep
                  ? 'text-green-600'
                  : index + 1 === currentStep
                  ? 'text-red-600'
                  : 'text-gray-500'
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
                  ? 'In progress'
                  : 'Pending'
                }
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;