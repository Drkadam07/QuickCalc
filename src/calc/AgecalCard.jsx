import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useTheme } from '../components/context/ThemeContext';

const AgecalCard = ({ input1, setInput1, input2, setInput2 }) => {
  const [result, setResult] = useState(null); 
  const { theme } = useTheme();

  const handleCalculationWithResult = () => {
    const birthDate = new Date(input1); 
    const currentDate = new Date(input2);

    if (isNaN(birthDate.getTime()) || isNaN(currentDate.getTime())) {
      toast.error('Please Select valid dates');
      setResult(null);
      return;
    }

    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    if (months < 0) {
      months += 12;
      years--;
    }

    if (days < 0) {
      const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
      days += lastMonth.getDate();
      months--;
    }

    setResult({ years, months, days });
  };

  return (
    <>
      <div>
        <input
          type="date"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          placeholder="Enter birthdate"
          className={`w-full p-3 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme === 'light' ? 'bg-white text-black border-gray-300' : 'bg-gray-800 text-white border-gray-600'}`}
        />
        <input
          type="date"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          placeholder="Enter current date"
          className={`w-full p-3 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme === 'light' ? 'bg-white text-black border-gray-300' : 'bg-gray-800 text-white border-gray-600'}`}
        />
      </div>

      <div className="flex justify-center mb-3 mt-4">
        <button
          onClick={handleCalculationWithResult}
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-blue-500 hover:to-green-600 focus:outline-none transition duration-300"
        >
          Calculate
        </button>
      </div>

      {result && (
        <div className="text-center mt-4">
          <p className="font-semibold text-lg">
            Age: {result.years} years, {result.months} months, {result.days} days
          </p>
        </div>
      )}
    </>
  );
};

export default AgecalCard;
