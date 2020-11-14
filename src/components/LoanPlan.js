import React from 'react';

const LoanPlan = () => {
  return (
    <div className="p-8 bg-blue-100">
      <div className="flex flex-col bg-white rounded-lg px-4 py-5 shadow">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex flex-col items-center space-y-3">
            <h2 className="text-2xl font-extrabold text-gray-900 leading-8">
              Get started
            </h2>
            <span className="leading-5 text-sm font-semibold tracking-wide text-gray-600">
              Select your loan amount
            </span>
            <div className="flex items-center space-x-4 py-2">
              <button className="flex items-center justify-center h-16 w-16 border border-blue-200 bg-blue-500 rounded-full focus:outline-none">
                <span className="leading-5 tracking-wider font-semibold text-white">
                  $250
                </span>
              </button>
              <button className="flex items-center justify-center h-16 w-16 border border-blue-200 rounded-full focus:outline-none">
                <span className="leading-5 tracking-wider font-semibold text-blue-700">
                  $500
                </span>
              </button>
              <button className="flex items-center justify-center h-16 w-16 border border-blue-200 rounded-full focus:outline-none">
                <span className="leading-5 tracking-wider font-semibold text-blue-700">
                  $750
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <span className="leading-5 text-sm font-semibold tracking-wide text-gray-600">
              How often do you get paid at work?
            </span>
            <div className="flex flex-col divide-y-2 divide-blue-200 divide-opacity-25 w-48 rounded-md">
              <button className="py-1 focus:outline-none">
                <span className="text-blue-700 font-semibold text- tracking-wide">
                  Weekly
                </span>
              </button>
              <button className="py-1 focus:outline-none bg-blue-500 rounded">
                <span className="text-white font-semibold text- tracking-wide">
                  Every two weeks
                </span>
              </button>
              <button className="py-1 focus:outline-none">
                <span className="text-blue-700 font-semibold text- tracking-wide">
                  Twice a month
                </span>
              </button>
              <button className="py-1 focus:outline-none">
                <span className="text-blue-700 font-semibold text- tracking-wide">
                  Monthly
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <span className="leading-5 text-sm font-semibold tracking-wide text-gray-600">
              Every cut-off, you'll pay
            </span>
            <span className="font-bold text-gray-800 text-lg">$120.47</span>
            <span className="leading-5 text-sm font-semibold tracking-wide text-gray-600">
              The loan will end in
            </span>
            <span className="font-bold text-gray-800 text-lg">140 days</span>
          </div>

          <button className="uppercase py-3 w-full rounded-lg font-extrabold tracking-widest text-xs border border-blue-800 text-blue-800 shadow-lg focus:outline-none">
            Apply for this loan
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoanPlan;
