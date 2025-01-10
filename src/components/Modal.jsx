import React, { useState } from 'react';
import Card1Component from '../calc/Card1Component';
import Card2Component from '../calc/Card2Component';
import Card3Component from '../calc/Card3Component';
import Card4Component from '../calc/Card4Component';

export default function Modal({ data, onClose }) {
  const [input1, setInput1] = useState('');  // First input state
  const [input2, setInput2] = useState('');  // Second input state
  const [result, setResult] = useState(null);  // State for the result of calculation

  const handleCalculation = () => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    if (!isNaN(num1) && !isNaN(num2)) {
        if (data.title === "Card 1") {
            setResult(num1 + num2);
        }
        else if (data.title === "Card 2") {
            setResult(num2 - num1); 
        } else if (data.title === "Card 3") {
            if (num2 === 0) {
                alert('Total marks cannot be zero.');
                setResult(null);
            } else {
                setResult(((num1 / num2) * 100).toFixed(2)); 
            }
        } else if (data.title === "Card 4") {
            setResult((num1 * num2).toFixed(2)); 
        }
    } else {
      alert('Please enter valid numbers');
      setResult(null);
    }
  };

  const getCardComponent = () => {
    switch (data.title) {
      case "Card 1":
        return <Card1Component input1={input1} setInput1={setInput1} input2={input2} setInput2={setInput2} handleCalculation={handleCalculation} />;
      case "Card 2":
        return <Card2Component input1={input1} setInput1={setInput1} input2={input2} setInput2={setInput2} handleCalculation={handleCalculation} />;
      case "Card 3":
        return <Card3Component input1={input1} setInput1={setInput1} input2={input2} setInput2={setInput2} handleCalculation={handleCalculation} />;
      case "Card 4":
        return <Card4Component input1={input1} setInput1={setInput1} input2={input2} setInput2={setInput2} handleCalculation={handleCalculation} />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl font-bold text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4">{data.title}</h2>
        <p className="mb-4">{data.description}</p>

        {/* Render the appropriate card component */}
        {getCardComponent()}

        {/* Display the result */}
        {result !== null && (
          <div className="text-center mt-4">
            <p className="font-semibold">Result: {result}</p>
          </div>
        )}
      </div>
    </div>
  );
}
