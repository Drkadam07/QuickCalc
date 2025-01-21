import React, { useState } from 'react';
import { toast } from 'react-toastify'; 

const Card1Component = ({ input1, setInput1, input2, setInput2 }) => {
  const [result, setResult] = useState(null);

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
        className="w-full p-2 border border-gray-300 rounded-md mb-2"
      />
      <input
        type="number"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        placeholder="Enter number 2"
        className="w-full p-2 border border-gray-300 rounded-md mb-2"
      />

      <div className="flex flex-wrap justify-center mb-3 mt-4 gap-4">
        <button
          onClick={handleAddition}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none w-full sm:w-auto"
        >
          Add (+)
        </button>
        <button
          onClick={handleSubtraction}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none w-full sm:w-auto"
        >
          Subtract (-)
        </button>
        <button
          onClick={handleMultiplication}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none w-full sm:w-auto"
        >
          Multiply (*)
        </button>
        <button
          onClick={handleDivision}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none w-full sm:w-auto"
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

export default Card1Component;
