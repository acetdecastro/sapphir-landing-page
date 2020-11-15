import React from 'react';
import CustomerServiceImg from '../assets/customerservice.jpg';
import { ReactComponent as PhoneIcon } from 'heroicons/outline/phone.svg';
import { ReactComponent as ChatIcon } from 'heroicons/outline/chat.svg';
import { ReactComponent as MailIcon } from 'heroicons/outline/mail.svg';

const Support = () => {
  return (
    <section className="relative pb-64 md:pb-80 lg:pb-96">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={CustomerServiceImg}
        alt="We are here for you."
      />
      <div className="absolute inset-0 w-full h-full bg-gradient-to-bl from-blue-900 via-gray-900 to-teal-900 opacity-75"></div>
      <article className="absolute inset-0 px-8 pt-6 flex flex-col items-center space-y-6 md:pt-14 lg:pt-20">
        <div className="flex flex-col items-center space-y-2 lg:space-y-6">
          <h3 className="text-2xl font-extrabold text-white leading-8 lg:text-4xl">
            Always by your side
          </h3>
          <span className="leading-5 text-gray-50 opacity-75 tracking-wide text-xs font-medium lg:text-sm">
            Open support via phone, chat, or email.
          </span>
        </div>
        <div className="flex flex-col justify-start space-y-3">
          <div className="flex items-center space-x-3">
            <div className="flex items-center rounded-full p-2 bg-teal-200 opacity-75">
              <PhoneIcon className="h-4 w-4 text-black opacity-100" />
            </div>

            <span className="text-sm text-gray-300 font-medium tracking-wider">
              (514)-700-3009
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <div className="flex items-center rounded-full p-2 bg-teal-200 opacity-75">
              <ChatIcon className="h-4 w-4 text-black opacity-100" />
            </div>

            <a
              href="/"
              className="text-sm text-gray-300 font-medium tracking-wider hover:underline focus:underline"
            >
              Chat now
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <div className="flex items-center rounded-full p-2 bg-teal-200 opacity-75">
              <MailIcon className="h-4 w-4 text-black opacity-100" />
            </div>

            <a
              href="/"
              className="text-sm text-gray-300 font-medium tracking-wider hover:underline focus:underline"
            >
              sapphir@support.com
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Support;
