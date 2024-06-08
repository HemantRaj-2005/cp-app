// src/components/common/PasswordInput.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const PasswordInput = ({ placeholder, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black"
      />
      <span
        onClick={toggleShowPassword}
        className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-gray-600"
      >
        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
      </span>
    </div>
  );
};

export default PasswordInput;
