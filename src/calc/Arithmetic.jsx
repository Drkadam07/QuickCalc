
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useTheme } from './../components/context/ThemeContext';


const Arithmetic = ({ input1, setInput1, input2, setInput2 }) => {
  const [result, setResult] = useState(null);
    const { theme } = useTheme();  
  

  const handleAddition = () => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    if (!isNaN(num1) && !isNaN(num2)) {
      setResult(num1 + num2);
      toast.success('Addition successful!');
    } else {
      toast.error('Please enter valid numbers');
      setResult(null);
    }
  };

  const handleSubtraction = () => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    if (!isNaN(num1) && !isNaN(num2)) {
      setResult(num1 - num2);
      toast.success('Subtraction successful!'); // Toast message for success
    } else {
      toast.error('Please enter valid numbers'); // Toast message for error
      setResult(null);
    }
  };

  const handleMultiplication = () => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    if (!isNaN(num1) && !isNaN(num2)) {
      setResult(num1 * num2);
      toast.success('Multiplication successful!'); // Toast message for success
    } else {
      toast.error('Please enter valid numbers'); // Toast message for error
      setResult(null);
    }
  };

  const handleDivision = () => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    if (!isNaN(num1) && !isNaN(num2) && num2 !== 0) {
      setResult(num1 / num2);
      toast.success('Division successful!'); // Toast message for success
    } else if (num2 === 0) {
      toast.error('Cannot divide by zero'); // Toast message for error
      setResult(null);
    } else {
      toast.error('Please enter valid numbers'); // Toast message for error
      setResult(null);
    }
  };

  return (
    <>
      <input
        type="number"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        placeholder="Enter number 1"
        className={`w-full p-3 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme === 'light' ? 'bg-white text-black border-gray-300' : 'bg-gray-800 text-white border-gray-600'}`}

      />
      <input
        type="number"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        placeholder="Enter number 2"
        className={`w-full p-3 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme === 'light' ? 'bg-white text-black border-gray-300' : 'bg-gray-800 text-white border-gray-600'}`}

      />

      <div className="flex flex-wrap justify-center mb-3 mt-4 gap-4">
        <button
          onClick={handleAddition}
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-blue-500 hover:to-green-600 focus:outline-none w-full sm:w-auto"
        >
          Add (+)
        </button>
        <button
          onClick={handleSubtraction}
          className="bg-gradient-to-r from-red-400 to-yellow-500 text-white px-6 py-3 rounded-lg hover:from-yellow-500 hover:to-red-600 focus:outline-none w-full sm:w-auto"
        >
          Subtract (-)
        </button>
        <button
          onClick={handleMultiplication}
          className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-pink-500 hover:to-purple-600 focus:outline-none w-full sm:w-auto"
        >
          Multiply (*)
        </button>
        <button
          onClick={handleDivision}
          className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white px-6 py-3 rounded-lg hover:from-cyan-500 hover:to-teal-600 focus:outline-none w-full sm:w-auto"
        >
          Divide (/)
        </button>
      </div>


      {result !== null && (
        <div className="text-center mt-4">
          <p className="font-semibold">Result: {result}</p>
        </div>
      )}
    </>
  );
};

export default Arithmetic;
