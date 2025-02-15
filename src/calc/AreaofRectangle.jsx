import React, { useState } from 'react';
import { useTheme } from '../components/context/ThemeContext';
import { toast } from 'react-toastify';

const AreaofRectangle = ({ input1, setInput1, input2, setInput2 }) => {
  const { theme } = useTheme();
  const [result, setResult] = useState(null);

  const handleCalculation = () => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    if (!isNaN(num1) && !isNaN(num2)) {
      setResult(input1 * input2);
    } else {
      toast.error('Please enter valid numbers');
      setResult(null);
    }
  }


return (
  <>
    <input
      type="number"
      value={input1}
      onChange={(e) => setInput1(e.target.value)}
      placeholder="Enter length"
      className={`w-full p-3 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme === 'light' ? 'bg-white text-black border-gray-300' : 'bg-gray-800 text-white border-gray-600'}`}
    />
    <input
      type="number"
      value={input2}
      onChange={(e) => setInput2(e.target.value)}
      placeholder="Enter Width"
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

    {result && (
      <div className="text-center mt-4">
        <p className="font-semibold text-lg">
          Area of Rectangle: {result}
        </p>
      </div>
    )}
  </>
);
};

export default AreaofRectangle;
