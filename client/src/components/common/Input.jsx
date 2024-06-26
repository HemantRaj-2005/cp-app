// src/components/common/Input.jsx
import React from 'react';

const Input = ({ type, placeholder, value, onChange, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black ${className}`}
    />
  );
};

export default Input;
