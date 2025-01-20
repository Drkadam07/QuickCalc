import React, { useState } from 'react';

const Card2Component = ({ input1, setInput1, input2, setInput2 }) => {
  const [result, setResult] = useState(null); // State to hold the result of calculation

  const handleCalculationWithResult = () => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    if (!isNaN(num1) && !isNaN(num2)) {
      // Calculate age based on birth year and current year
      setResult(num2 - num1); 
    } else {
      alert('Please enter valid numbers');
      setResult(null);
    }
  };

  return (
    <>
      <input
        type="number"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        placeholder="Enter birth year"
        className="w-full p-2 border border-gray-300 rounded-md mb-2"
      />
      <input
        type="number"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        placeholder="Enter current year"
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <div className="flex justify-center mb-3 mt-4">
        <button
          onClick={handleCalculationWithResult}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Calculate
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

export default Card2Component;
