import React, { useState } from 'react';
import { useTheme } from './context/ThemeContext'; 
import Card1Component from '../calc/Arithmetic';
import Card2Component from '../calc/AgecalCard';
import Areaogsquare from '../calc/Areaogsquare';
import AreaofRectangle from '../calc/AreaofRectangle';
import AreaofCircle from '../calc/AreaofCircle';

export default function Modal({ data, onClose }) {
  const { theme } = useTheme();
  const [input1, setInput1] = useState('');  
  const [input2, setInput2] = useState('');  

  const getCardComponent = () => {
    switch (data.title) {
      case "Arithmetic operators":
        return <Card1Component input1={input1} setInput1={setInput1} input2={input2} setInput2={setInput2} />;
      case "Age Calculator":
        return <Card2Component input1={input1} setInput1={setInput1} input2={input2} setInput2={setInput2} />;
      case "Area of a Rectangle":
        return <AreaofRectangle input1={input1} setInput1={setInput1} input2={input2} setInput2={setInput2}/>;
      case "Area of a Circle":
        return <AreaofCircle />;
        case "Area of a Square":
          return <Areaogsquare input1={input1} setInput1={setInput1} />;
      default:
        return null;
    }
  };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${theme === 'dark' ? 'bg-gray-900' : 'bg-black'}`}>
      <div className={`rounded-lg p-8 w-full max-w-xl sm:max-w-md md:max-w-lg lg:max-w-xl relative ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
        <button
          onClick={onClose}
          className={`absolute top-2 right-2 text-xl font-bold ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-800'}`}
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4">{data.title}</h2>
        <p className="mb-4">{data.description}</p>

        {/* Render the appropriate card component */}
        {getCardComponent()}
      </div>
    </div>
  );
}
