import React from 'react';

const LoanPlan = () => {
  return (
    <div className="p-8 md:px-14 mmmd:px-32 lg:px-28 llg:px-48 xl:px-56 xxl:px-72 xxxl:px-96 4xl:px-112 5xl:px-120 6xl:px-136 bg-blue-100">
      <div className="flex flex-col bg-white rounded-lg px-4 py-8 shadow-md">
        <form className="flex flex-col items-center space-y-5">
          <div className="flex flex-col items-center space-y-5">
            <h2 className="text-2xl font-extrabold text-gray-900 leading-8">
              Get started
            </h2>

            {/* MD to 6xl view */}
            <div className="hidden md:flex md:space-x-20 lg:space-x-40">
              <div className="flex flex-col items-center space-y-2">
                <span className="leading-5 text-base font-semibold tracking-wide text-gray-600">
                  Select your loan amount
                </span>
                <div className="flex items-center space-x-4 py-2">
                  <button
                    type="button"
                    className="flex items-center justify-center h-16 w-16 border-b border-blue-200 text-blue-700 rounded-full focus:outline-none transition ease-in duration-200 hover:bg-blue-100 focus:bg-blue-200 focus:text-gray-800"
                  >
                    <span className="leading-5 tracking-wider font-semibold">
                      $250
                    </span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center h-16 w-16 border-b border-blue-200 text-blue-700 rounded-full focus:outline-none transition ease-in duration-200 hover:bg-blue-100 focus:bg-blue-200 focus:text-gray-800"
                  >
                    <span className="leading-5 tracking-wider font-semibold">
                      $500
                    </span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center h-16 w-16 border-b border-blue-200 text-blue-700 rounded-full focus:outline-none transition ease-in duration-200 hover:bg-blue-100 focus:bg-blue-200 focus:text-gray-800"
                  >
                    <span className="leading-5 tracking-wider font-semibold">
                      $750
                    </span>
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-3">
                <span className="leading-5 text-base font-semibold tracking-wide text-gray-600 text-center">
                  How often do you get paid at work?
                </span>
                <div className="flex flex-col divide-y-2 divide-blue-200 divide-opacity-25 w-48 rounded-md">
                  <button
                    type="button"
                    className="py-1 text-blue-700 rounded-md focus:outline-none transition ease-in duration-200 hover:bg-blue-100 focus:text-gray-800 focus:bg-blue-200 "
                  >
                    <span className="font-semibold tracking-wide">Weekly</span>
                  </button>
                  <button
                    type="button"
                    className="py-1 text-blue-700 rounded-md focus:outline-none transition ease-in duration-200 hover:bg-blue-100 focus:text-gray-800 focus:bg-blue-200"
                  >
                    <span className="font-semibold tracking-wide">
                      Every two weeks
                    </span>
                  </button>
                  <button
                    type="button"
                    className="py-1 text-blue-700 rounded-md focus:outline-none transition ease-in duration-200 hover:bg-blue-100 focus:text-gray-800 focus:bg-blue-200"
                  >
                    <span className="font-semibold tracking-wide">
                      Twice a month
                    </span>
                  </button>
                  <button
                    type="button"
                    className="py-1 text-blue-700 rounded-md focus:outline-none transition ease-in duration-200 hover:bg-blue-100 focus:text-gray-800 focus:bg-blue-200"
                  >
                    <span className="font-semibold tracking-wide">Monthly</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* XS to SM views */}
          <div className="flex flex-col items-center space-y-2 md:hidden">
            <span className="leading-5 text-sm font-semibold tracking-wide text-gray-600">
              Select your loan amount
            </span>
            <div className="flex items-center space-x-4 py-2">
              <button
                type="button"
                className="flex items-center justify-center h-16 w-16 border-b border-blue-200 text-blue-700 rounded-full focus:outline-none transition ease-in duration-200 hover:bg-blue-100 focus:bg-blue-200 focus:text-gray-800"
              >
                <span className="leading-5 tracking-wider font-semibold">
                  $250
                </span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center h-16 w-16 border-b border-blue-200 text-blue-700 rounded-full focus:outline-none transition ease-in duration-200 hover:bg-blue-100 focus:bg-blue-200 focus:text-gray-800"
              >
                <span className="leading-5 tracking-wider font-semibold">
                  $500
                </span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center h-16 w-16 border-b border-blue-200 text-blue-700 rounded-full focus:outline-none transition ease-in duration-200 hover:bg-blue-100 focus:bg-blue-200 focus:text-gray-800"
              >
                <span className="leading-5 tracking-wider font-semibold">
                  $750
                </span>
              </button>
            </div>
          </div>

          {/* XS to SM views */}
          <div className="flex flex-col items-center space-y-3 md:hidden">
            <span className="leading-5 text-sm font-semibold tracking-wide text-gray-600 text-center">
              How often do you get paid at work?
            </span>
            <div className="flex flex-col divide-y-2 divide-blue-200 divide-opacity-25 w-48 rounded-md">
              <button
                type="button"
                className="py-1 text-blue-700 rounded-md focus:outline-none transition ease-in duration-200 hover:bg-blue-100 focus:text-gray-800 focus:bg-blue-200"
              >
                <span className="font-semibold tracking-wide">Weekly</span>
              </button>
              <button
                type="button"
                className="py-1 text-blue-700 rounded-md focus:outline-none transition ease-in duration-200 hover:bg-blue-100 focus:text-gray-800 focus:bg-blue-200"
              >
                <span className="font-semibold tracking-wide">
                  Every two weeks
                </span>
              </button>
              <button
                type="button"
                className="py-1 text-blue-700 rounded-md focus:outline-none transition ease-in duration-200 hover:bg-blue-100 focus:text-gray-800 focus:bg-blue-200"
              >
                <span className="font-semibold tracking-wide">
                  Twice a month
                </span>
              </button>
              <button
                type="button"
                className="py-1 text-blue-700 rounded-md focus:outline-none transition ease-in duration-200 hover:bg-blue-100 focus:text-gray-800 focus:bg-blue-200"
              >
                <span className="font-semibold tracking-wide">Monthly</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-3">
            <span className="leading-5 text-sm font-semibold tracking-wide text-gray-600 md:text-base">
              Every cut-off, you'll pay
            </span>
            <span className="font-bold text-gray-800 text-lg md:text-xl">
              $120.47
            </span>
            <span className="leading-5 text-sm font-semibold tracking-wide text-gray-600 md:text-base">
              The loan will end in
            </span>
            <span className="font-bold text-gray-800 text-lg md:text-xl">
              140 days
            </span>
          </div>

          <button
            type="submit"
            className="uppercase py-3 w-56 rounded-lg font-extrabold tracking-widest text-xs border border-blue-800 text-blue-800 shadow-lg md:w-64 focus:outline-none transition ease-in duration-200 hover:bg-gray-800 focus:bg-black hover:text-white focus:text-white"
            onClick={(e) => e.preventDefault()}
          >
            Apply for this loan
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoanPlan;
