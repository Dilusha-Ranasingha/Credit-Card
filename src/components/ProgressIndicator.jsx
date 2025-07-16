import React from 'react';

const ProgressIndicator = ({ steps, currentStep }) => {
  return (
    <div className="flex items-center justify-between mb-8 px-4">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center relative flex-1">
          {/* Connecting line - only show if not the last step */}
          {index < steps.length - 1 && (
            <div className="absolute top-4 left-1/2 w-full h-0.5 bg-gray-300 z-0" 
                 style={{ transform: 'translateX(50%)' }}></div>
          )}
          
          {/* Step circle */}
          <div className="relative z-10 mb-2">
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
          <div className="text-center">
            <div className={`font-semibold text-sm leading-tight
              ${index + 1 < currentStep
                ? 'text-green-600'
                : index + 1 === currentStep
                ? 'text-red-600'
                : 'text-gray-500'
              }`}>
              {step}
            </div>
            <div className={`text-xs mt-1
              ${index + 1 < currentStep
                ? 'text-green-500'
                : index + 1 === currentStep
                ? 'text-red-500'
                : 'text-gray-400'
              }`}>
              {index + 1 < currentStep
                ? 'Completed'
                : index + 1 === currentStep
                ? 'Progress'
                : 'Pending'
              }
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressIndicator;