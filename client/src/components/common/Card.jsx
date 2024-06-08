// src/components/common/Card.jsx
import React from 'react';

const Card = ({ title, description, imageUrl, onClick }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {imageUrl && <img src={imageUrl} alt={title} className="w-full h-64 object-cover object-center" />}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
        <button onClick={onClick} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Read More</button>
      </div>
    </div>
  );
};

export default Card;
