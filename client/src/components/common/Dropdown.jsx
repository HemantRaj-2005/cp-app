// src/components/common/Dropdown.jsx
import React from 'react';

const Dropdown = ({ options, onSelect }) => {
  return (
    <select onChange={(e) => onSelect(e.target.value)} className="bg-white border border-gray-300 rounded-md px-4 py-2">
      {options.map((option, index) => (
        <option key={index} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

export default Dropdown;
