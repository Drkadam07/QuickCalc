import{ useState } from 'react';
import { useTheme } from '../components/context/ThemeContext';

const Areaogsquare = ({ input1, setInput1 }) => {
  const [result, setResult] = useState(null);
  const { theme } = useTheme();

  const handleCalculationWithResult = () => {
    let length = input1;
    setResult(length * length); 
  };

  return (
    <>
      <div>
        <input
          type="number"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          placeholder="Enter the Length of Side :- "
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
            Area of Square : {result} 
          </p>
        </div>
      )}
    </>
  );
};

export default Areaogsquare;
