// src/components/common/Tooltip.jsx
import React from 'react';

const Tooltip = ({ text, children }) => {
  return (
    <div className="relative inline-block">
      <div className="relative">{children}</div>
      <div className="absolute top-0 left-0 bg-gray-900 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap z-10 -mt-8">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
