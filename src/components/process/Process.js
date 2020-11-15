import React from 'react';
import { ReactComponent as CheckIcon } from 'heroicons/solid/check.svg';

const Process = ({ number, heading, subHeading, imgSrc, descriptions }) => {
  return (
    <article className="flex flex-col items-center space-y-5">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-tr from-blue-700 to-indigo-500">
        <span className="text-white text-xl leading-5 font-bold">{number}</span>
      </div>
      <div className="flex flex-col items-center space-y-1">
        <h3 className="leading-8 text-xl font-bold justify text-gray-900">
          {heading}
        </h3>
        <p className="leading-5 text-sm font-semibold text-gray-600">
          {subHeading}
        </p>
      </div>
      <div className="flex justify-center">
        <img src={imgSrc} alt="icon" className="h-24 w-24" />
      </div>
      <div className="flex flex-col justify-start space-y-5 pt-1 px-2 w-72">
        {descriptions.map((description, index) => {
          return (
            <div key={index} className="flex space-x-4">
              <div className="bg-teal-400 rounded-full h-5 w-5">
                <CheckIcon className="h-5 w-5 text-white" />
              </div>
              <p className="leading-5 tracking-wide text-sm font-semibold text-gray-700">
                {description}
              </p>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default Process;
