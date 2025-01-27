import React from 'react';
import { useTheme } from '../context/ThemeContext'; // Import the useTheme hook

export default function Card({ image, title, onCardClick, onButtonClick }) {
  const { theme } = useTheme(); // Get the current theme

  return (
    <div
      className={`max-w-sm rounded-lg overflow-hidden shadow-lg cursor-pointer ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} 
      transition-all duration-300 ease-in-out transform hover:scale-105`}
      onClick={onCardClick}
    >
      <img className="w-full h-48 object-cover " src={image} alt={title} />
      <div className="px-6 py-4 text-center">
        <h2 className={`text-xl font-semibold ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
          {title}
        </h2>
      </div>

      <div className="px-6 pb-4 flex justify-center">
  <button
    onClick={(e) => {
      e.stopPropagation(); 
      onButtonClick();
    }}
    className={`px-6 py-3 rounded-full focus:outline-none text-white hover:opacity-80`}
    style={{
      background: 'linear-gradient(to right, #4BC0C8, #C779D0, #FEAC5E)',
      transition: 'background 0.3s ease', // Adds smooth transition for hover effects
    }}
  >
    Calculate
  </button>
</div>

      {/* Glowing Effect on Hover */}
      <style jsx>{`
        .max-w-sm:hover {
          box-shadow: 0 0 15px ${theme === 'light' ? 'rgba(59, 130, 246, 0.8)' : 'rgba(255, 105, 180, 0.8)'};
        }
      `}</style>
    </div>
  );
}
