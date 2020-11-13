import React from 'react';

const Burger = () => {
  return (
    <div className="flex flex-col justify-start space-y-2">
      <div className="h-0.5 w-6 rounded-full bg-gray-900"></div>
      <div className="h-0.5 w-4 rounded-full bg-gray-900"></div>
      <div className="h-0.5 w-2 rounded-full bg-gray-900"></div>
    </div>
  );
};

export default Burger;
