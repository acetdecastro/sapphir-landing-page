import React from 'react';

const ActivePitching = () => {
  return (
    <div className="p-8 flex flex-col items-center bg-gradient-to-t from-gray-100 space-y-4">
      <h3 className="leading-8 text-2xl text-gray-900 font-extrabold text-center">
        Get the funds you need today
      </h3>
      <p className="leading-5 text-sm font-medium text-gray-700 text-center">
        At Sapphir, we're here to help you when you're in need with a fast and
        simple loaning process.
      </p>

      <button className="sapphir-bg-color uppercase font-bold tracking-widest text-sm w-full py-2 text-gray-100 rounded">
        Apply now
      </button>

      <span className="leading-5 text-sm font-semibold tracking-wide text-blue-700">
        (514)-700-3009
      </span>
    </div>
  );
};

export default ActivePitching;
