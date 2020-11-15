import React from 'react';
import { ReactComponent as HeroPattern } from '../assets/heropatternpad.svg';
import { ReactComponent as PhoneIcon } from 'heroicons/outline/phone.svg';
import { ReactComponent as Wallet } from '../assets/wallet.svg';

const Hero = () => {
  return (
    <div className="relative overflow-hidden flex flex-col px-8 space-y-8 md:flex-row md:px-14 md:pt-10 md:pb-20 lg:px-20">
      <div className="absolute z-0 top-0 right-0 bottom-0 left-auto transform mt-24 -mr-16 rotate-45 md:-mr-4 md:mt-16">
        <HeroPattern className="h-64 w-64 opacity-25 lg:h-104 lg:w-104" />
      </div>

      <div className="space-y-10 md:space-y-20">
        <div className="space-y-6 lg:space-y-10">
          <h1 className="text-3xl font-extrabold text-gray-900 leading-8 md:text-4xl lg:text-6xl">
            Hassle free loaning
          </h1>
          <div className="flex flex-col space-y-2">
            <span className="text-lg font-semibold text-gray-600 leading-5 lg:text-xl">
              Get it in 30 mins. No credit check.
            </span>
            <span className="text-lg font-bold text-gray-600 leading-5"></span>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="">
            <button className="uppercase text-xs py-3 px-6 bg-gradient-to-bl from-indigo-500 rounded-md font-bold tracking-widest sapphir-bg-color text-white md:px-10 focus:outline-none">
              Apply now
            </button>
          </div>
          <div className="flex items-center space-x-1">
            <div className="flex items-center rounded-full p-2 bg-teal-200 md:p-3">
              <PhoneIcon className="h-3.5 w-3.5 text-gray-900 md:h-4 md:w-4" />
            </div>

            <span className="text-xs text-gray-700 font-medium tracking-wide md:text-sm">
              (514)-700-3009
            </span>
          </div>
        </div>
      </div>

      <Wallet className="h-64 w-64 md:absolute inset-y-auto left-auto right-0 md:pr-12 md:pb-32.5 md:h-96 md:w-96 lg:h-104 lg:w-104" />
    </div>
  );
};

export default Hero;
