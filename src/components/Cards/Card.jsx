import React from 'react';

export default function Card({ image, title, onCardClick, onButtonClick }) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white cursor-pointer" onClick={onCardClick}>
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </div>

      <div className="px-6 pb-4 flex justify-center">
        <button
          onClick={(e) => {
            e.stopPropagation(); 
            onButtonClick();
          }}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Calculate
        </button>
      </div>
    </div>
  );
}
