import React from 'react';
import { ReactComponent as CheckIcon } from 'heroicons/solid/check.svg';

const Process = ({ process }) => {
  return (
    <div className="flex flex-col items-center space-y-5">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-500">
        <span className="text-white text-xl leading-5 font-bold">
          {process.number}
        </span>
      </div>
      <h3 className="leading-8 text-xl font-bold justify">{process.heading}</h3>
      <p className="leading-5 text-sm font-semibold text-gray-600">
        {process.subHeading}
      </p>
      <div className="flex justify-center">
        <img src={process.imgSrc} alt="Fast!" className="h-24 w-24" />
      </div>
      {process.descriptions.map((description, index) => {
        return (
          <div key={index} className="flex flex-col space-y-5 pt-2">
            <div className="flex space-x-4">
              <div className="bg-teal-400 rounded-full h-5 w-5">
                <CheckIcon className="h-5 w-5 text-white" />
              </div>
              <p className="leading-5 tracking-wide text-sm font-semibold text-gray-700">
                {description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Process;
