import React from 'react';

const ActivePitching = () => {
  return (
    <section className="p-8 flex flex-col bg-gradient-to-b from-gray-50 ">
      <article className="flex flex-col items-center space-y-4">
        <h3 className="leading-8 text-2xl text-gray-900 font-extrabold text-center">
          Get the funds you need today
        </h3>
        <p className="leading-5 text-sm font-medium text-gray-700 text-center">
          At Sapphir, we're here to help you when you're in need with a fast and
          simple loaning process.
        </p>

        <button
          type="button"
          className="bg-gradient-to-bl from-indigo-500 sapphir-bg-color uppercase font-bold tracking-widest text-xs w-full py-3 text-gray-100 rounded-md focus:outline-none"
        >
          Apply now
        </button>

        <span className="leading-5 text-xs font-semibold tracking-wide text-blue-700">
          (514)-700-3009
        </span>
      </article>
    </section>
  );
};

export default ActivePitching;
