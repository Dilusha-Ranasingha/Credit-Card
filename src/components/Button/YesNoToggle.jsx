// src/components/YesNoToggle.jsx
import React from "react";

const YesNoToggle = ({ value, onChange }) => {
  return (
    <div className="flex w-40 h-10 border-2 border-red-500 rounded-[10px] overflow-hidden">
      <button
        onClick={() => onChange(true)}
        className={`w-1/2 text-sm font-semibold transition-all duration-200 ${
          value === true ? "bg-red-500 text-white" : "bg-white text-gray-700"
        }`}
      >
        Yes
      </button>
      <div className="w-[2px] bg-red-500 h-full" />
      <button
        onClick={() => onChange(false)}
        className={`w-1/2 text-sm font-semibold transition-all duration-200 ${
          value === false ? "bg-red-500 text-white" : "bg-white text-gray-700"
        }`}
      >
        No
      </button>
    </div>
  );
};

export default YesNoToggle;