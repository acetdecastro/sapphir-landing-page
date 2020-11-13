import React from 'react';
import { ReactComponent as Pattern } from '../assets/patternpad.svg';
import { ReactComponent as PhoneIcon } from 'heroicons/outline/phone.svg';

const Hero = () => {
  return (
    <div className="relative overflow-hidden flex flex-col pt-10 pb-8 px-8 bg-gray-100 space-y-10">
      <div className="absolute top-0 right-0 bottom-0 left-auto transform -rotate-45 -mt-32 -mr-40">
        <Pattern className="h-64 w-64 opacity-25" />
      </div>

      <div className="relative space-y-10">
        <div className="space-y-5">
          <span className="text-3xl font-extrabold text-gray-900 leading-5">
            Hassle free loaning
          </span>
          <div className="flex flex-col space-y-2">
            <span className="text-xl font-bold text-gray-600 leading-5">
              Get it in 30 mins.
            </span>
            <span className="text-xl font-bold text-gray-600 leading-5">
              No credit check.
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-start space-y-4">
          <div>
            <button className="uppercase py-3 px-5 bg-gradient-to-tr rounded-md font-bold tracking-widest text-sm from-blue-800 via-indigo-600 to-blue-500 text-white focus:outline-none">
              Apply Now
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
    </div>
  );
};

export default Hero;
