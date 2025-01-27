import React from 'react';
import { useTheme } from './../components/context/ThemeContext';

const Card3Component = ({ input1, setInput1, input2, setInput2, handleCalculation }) => {
  const { theme } = useTheme(); // This should be inside the component function

  return (
    <>
      <input
        type="number"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        placeholder="Enter obtained marks"
        className={`w-full p-3 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme === 'light' ? 'bg-white text-black border-gray-300' : 'bg-gray-800 text-white border-gray-600'}`}
      />
      <input
        type="number"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        placeholder="Enter total marks"
        className={`w-full p-3 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme === 'light' ? 'bg-white text-black border-gray-300' : 'bg-gray-800 text-white border-gray-600'}`}
      />
      <div className="flex justify-center mb-3 mt-4">
        <button
          onClick={handleCalculation}
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-blue-500 hover:to-green-600 focus:outline-none transition duration-300"

        >
          Calculate
        </button>
      </div>
    </>
  );
};

export default Card3Component;
