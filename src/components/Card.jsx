import React from 'react';

// Functional Card component
export default function Card({ image, title, onButtonClick1, onButtonClick2 }) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      {/* Image Section */}
      <img className="w-full h-48 object-cover" src={image} alt={title} />

      {/* Card Content */}
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </div>

      {/* Button Section */}
      <div className="px-6 pb-4 flex justify-between">
        <button
          onClick={onButtonClick1}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Button 1
        </button>
        <button
          onClick={onButtonClick2}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none"
        >
          Button 2
        </button>
      </div>
    </div>
  );
}
