import React from 'react';

const Card2Component = ({ input1, setInput1, input2, setInput2, handleCalculation }) => (
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
        onClick={handleCalculation}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none"
      >
        Calculate
      </button>
    </div>
  </>
);

export default Card2Component;
