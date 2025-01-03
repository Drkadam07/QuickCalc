import React from 'react';
import Card from './Card';

const Cardcover = () => {
  const handleButtonClick1 = () => {
    alert('Button 1 clicked');
  };

  const handleButtonClick2 = () => {
    alert('Button 2 clicked');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card
        image="https://via.placeholder.com/400x250"
        title="Sample Card"
        onButtonClick1={handleButtonClick1}
        onButtonClick2={handleButtonClick2}
      />
    </div>
  );
};

export default Cardcover;
