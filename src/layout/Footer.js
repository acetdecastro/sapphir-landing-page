import React from 'react';

const Footer = () => {
  return (
    <footer className="p-8 bg-gray-100 space-y-10">
      <div>
        <div className="flex flex-col justify-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <span className="leading-8 text-transparent bg-gradient-to-r from-blue-500 font-bold text-2xl sapphir-bg-color bg-clip-text">
              Sapphir
            </span>
            <div className="blue-hexagon"></div>
          </div>

          <p className="leading-5 text-sm text-gray-600 tracking-wide font-semibold text-center">
            Sapphir is a private financial company offering you new ways to
            borrow
          </p>
        </div>
      </div>

      <div className="space-y-10">
        <div className="flex flex-col items-center space-y-3">
          <span className="uppercase text-sm text-gray-500 font-semibold tracking tracking-widest">
            Company
          </span>
          <div className="flex flex-col items-center space-y-3">
            <a
              href="/about"
              className="inline-flex text-sm font-medium text-gray-600 hover:underline focus:underline"
            >
              About Us
            </a>
            <a
              href="/faq"
              className="inline-flex text-sm font-medium text-gray-600 hover:underline focus:underline"
            >
              FAQ
            </a>
            <a
              href="/Services"
              className="inline-flex text-sm font-medium text-gray-600 hover:underline focus:underline"
            >
              Services
            </a>
            <a
              href="/Login"
              className="inline-flex text-sm font-medium text-gray-600 hover:underline focus:underline"
            >
              Log In
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <span className="uppercase text-sm text-gray-500 font-semibold tracking tracking-widest">
            Links
          </span>
          <div className="flex flex-col items-center space-y-3">
            <a
              href="/terms"
              className="inline-flex text-sm font-medium text-gray-600 hover:underline focus:underline"
            >
              Terms of Services
            </a>
            <a
              href="/privacy"
              className="inline-flex text-sm font-medium text-gray-600 hover:underline focus:underline"
            >
              Privacy Policy
            </a>
            <a
              href="/legal"
              className="inline-flex text-sm font-medium text-gray-600 hover:underline focus:underline"
            >
              Legal Notice
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-5">
        <div className="flex flex-col items-center space-y-3">
          <span className="uppercase text-sm text-gray-500 font-semibold tracking tracking-widest">
            Newsletter
          </span>
          <p className="leading-5 text-sm text-gray-600 tracking-wide font-semibold text-center">
            Sign up and receive the latest tips via email 💌
          </p>
        </div>

        <form className="flex flex-col w-full space-y-4">
          <input
            type="email"
            className="py-3 px-6 border border-transparent shadow rounded focus:outline-none focus:border-blue-400 text-sm"
            placeholder="Your email"
          />
          <button
            type="submit"
            className="uppercase py-3 sapphir-bg-color text-xs font-bold text-white rounded tracking-widest focus:outline-none"
            onClick={(e) => e.preventDefault()}
          >
            Sign Up
          </button>
        </form>

        <div className="flex items-center justify-center space-x-3">
          <a href="/">
            <img
              className="w-8 h-8"
              src="https://img.icons8.com/color/48/000000/facebook-new.png"
              alt="Facebook"
            />
          </a>
          <a href="/">
            <img
              className="w-8 h-8"
              src="https://img.icons8.com/color/48/000000/twitter-circled.png"
              alt="Twitter"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
