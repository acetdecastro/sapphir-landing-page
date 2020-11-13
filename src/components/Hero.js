import React from 'react';
import { ReactComponent as Pattern } from '../assets/patternpad.svg';
import { ReactComponent as PhoneIcon } from 'heroicons/outline/phone.svg';
import { ReactComponent as Wallet } from '../assets/wallet.svg';

const Hero = () => {
  return (
    <div className="relative overflow-hidden flex flex-col px-8 bg-gradient-to-b from-gray-50 space-y-8">
      <div className="absolute top-0 right-0 bottom-0 left-auto transform mt-24 -mr-16 rotate-45">
        <Pattern className="h-64 w-64 opacity-25" />
      </div>

      <div className="space-y-10">
        <div className="space-y-5">
          <h1 className="text-3xl font-extrabold text-gray-900 leading-8">
            Hassle free loaning
          </h1>
          <div className="flex flex-col space-y-2">
            <span className="text-lg font-bold text-gray-600 leading-5">
              Get it in 30 mins.
            </span>
            <span className="text-lg font-bold text-gray-600 leading-5">
              No credit check.
            </span>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <div>
            <button className="uppercase text-xs py-3 px-5 bg-gradient-to-tr rounded-lg font-bold tracking-widest from-blue-700 via-indigo-500 to-blue-400 text-white focus:outline-none">
              Apply now
            </button>
          </div>
          <div className="flex items-center space-x-1">
            <div className="flex items-center rounded-full p-2 bg-teal-200">
              <PhoneIcon className="h-3.5 w-3.5 text-blue-900" />
            </div>

            <span className="text-xs text-gray-700 font-medium tracking-wide">
              (514)-700-3009
            </span>
          </div>
        </div>
      </div>
      <Wallet className="h-64 w-64" />
    </div>
  );
};

export default Hero;
