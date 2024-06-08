// src/components/common/Button.jsx
import React from 'react';

const Button = ({ type, onClick, children }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
        >
            {children}
        </button>
    );
};

export default Button;
