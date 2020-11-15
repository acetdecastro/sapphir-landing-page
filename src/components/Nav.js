import { Transition } from '@tailwindui/react';
import React, { useContext } from 'react';
import { NavContext } from '../utils/NavContext';
import Burger from './Burger';

import { ReactComponent as CloseIcon } from 'heroicons/solid/x.svg';

const Nav = () => {
  const { isNavMenuOpen, handleNavMenuToggle } = useContext(NavContext);

  return (
    <>
      <nav className="flex justify-between items-center">
        <a href="/" className="inline-flex items-center space-x-2 md:pt-1.5">
          <span className="text-transparent text-lg font-bold bg-gradient-to-r from-blue-500 sapphir-bg-color bg-clip-text">
            Sapphir
          </span>
          <div className="blue-hexagon"></div>
        </a>

        {/* MD to LG views */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="hidden lg:flex space-x-8">
            <li>
              <a href="/" className="text-sm font-medium text-gray-700">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="text-sm font-medium text-gray-700">
                About
              </a>
            </li>
            <li>
              <a href="/" className="text-sm font-medium text-gray-700">
                Services
              </a>
            </li>
            <li>
              <a href="/" className="text-sm font-medium text-gray-700">
                Contact
              </a>
            </li>
            <li>
              <a href="/" className="text-sm font-medium text-gray-700">
                Support
              </a>
            </li>
          </ul>

          <ul className="flex space-x-8">
            <li>
              <a href="/" className="text-sm text-gray-700 font-medium">
                Log In
              </a>
            </li>
            <li>
              <a href="/" className="text-sm text-indigo-500 font-medium">
                Sign Up
              </a>
            </li>
          </ul>

          <button
            type="button"
            className="focus:outline-none md:pt-1.5 lg:hidden"
            onClick={handleNavMenuToggle}
          >
            <Burger />
          </button>
        </div>

        {/* XS to SM views */}
        <button
          type="button"
          className="focus:outline-none md:hidden"
          onClick={handleNavMenuToggle}
        >
          <Burger />
        </button>
      </nav>

      <Transition
        show={isNavMenuOpen}
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed z-30 inset-0 px-8 py-4 flex flex-col overflow-hidden bg-gray-900 md:py-6 md:px-14">
          <div className="flex justify-end">
            <button
              type="button"
              className="focus:outline-none"
              onClick={handleNavMenuToggle}
            >
              <CloseIcon className="h-8 w-8 text-gray-700" />
            </button>
          </div>
          <div className="flex flex-col m-auto space-y-10">
            <ul className="text-center space-y-3">
              <li>
                <a href="/" className="text-2xl font-medium text-gray-700">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="text-2xl font-medium text-gray-700">
                  About
                </a>
              </li>
              <li>
                <a href="/" className="text-2xl font-medium text-gray-700">
                  Services
                </a>
              </li>
              <li>
                <a href="/" className="text-2xl font-medium text-gray-700">
                  Contact
                </a>
              </li>
              <li>
                <a href="/" className="text-2xl font-medium text-gray-700">
                  Support
                </a>
              </li>
            </ul>

            <ul className="text-center space-y-3">
              <li>
                <a href="/" className="text-2xl font-medium text-gray-700">
                  Log In
                </a>
              </li>
              <li>
                <a href="/" className="text-2xl font-medium text-indigo-700">
                  Sign Up
                </a>
              </li>
            </ul>

            <a href="/" className="inline-flex items-center pt-5 space-x-2">
              <span className="text-transparent text-xl font-bold bg-gradient-to-r from-blue-500 sapphir-bg-color bg-clip-text">
                Sapphir
              </span>
              <div className="blue-hexagon"></div>
            </a>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default Nav;
