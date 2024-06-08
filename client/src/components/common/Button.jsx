import React from 'react';

const Button = ({ type, onClick, children, className }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`w-full bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-600 hover:from-red-500 hover:to-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2 flex items-center justify-center transition duration-300 ease-in-out ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
