import React from 'react';
import { ReactComponent as HeroPattern } from '../assets/heropatternpad.svg';
import { ReactComponent as PhoneIcon } from 'heroicons/outline/phone.svg';
import { ReactComponent as Wallet } from '../assets/wallet.svg';

const Hero = () => {
  return (
    <div className="relative overflow-hidden flex flex-col px-8 space-y-8">
      <div className="absolute top-0 right-0 bottom-0 left-auto transform mt-24 -mr-16 rotate-45">
        <HeroPattern className="h-64 w-64 opacity-25" />
      </div>

      <div className="space-y-10">
        <div className="space-y-6">
          <h1 className="text-3xl font-extrabold text-gray-900 leading-8">
            Hassle free loaning
          </h1>
          <div className="flex flex-col space-y-2">
            <span className="text-lg font-bold text-gray-600 leading-5">
              Get it in 30 mins. No credit check.
            </span>
            <span className="text-lg font-bold text-gray-600 leading-5"></span>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <div>
            <button className="uppercase text-xs py-3 px-6 bg-gradient-to-bl from-indigo-500 rounded-md font-bold tracking-widest sapphir-bg-color text-white focus:outline-none">
              Apply now
            </button>
          </div>
          <div className="flex items-center space-x-1">
            <div className="flex items-center rounded-full p-2 bg-teal-200">
              <PhoneIcon className="h-3.5 w-3.5 text-gray-900" />
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
