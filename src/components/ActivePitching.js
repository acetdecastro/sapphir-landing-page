import React from 'react';

const ActivePitching = () => {
  return (
    <section className="p-8 flex flex-col items-center bg-gradient-to-b from-gray-50 md:px-14">
      <article className="flex flex-col items-center space-y-6 md:w-4/5">
        <h3 className="leading-8 text-2xl text-gray-900 font-extrabold text-center lg:text-3xl">
          Get the funds you need today
        </h3>
        <p className="leading-6 text-sm font-medium text-gray-700 text-center md:w-4/6 lg:text-base">
          At Sapphir, we're here to help you when you're in need with a fast and
          simple loaning process.
        </p>

        <button
          type="button"
          className="bg-gradient-to-bl from-indigo-500 sapphir-bg-color uppercase font-bold tracking-widest text-xs w-full py-3 text-gray-100 rounded-md md:w-2/6 focus:outline-none"
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
