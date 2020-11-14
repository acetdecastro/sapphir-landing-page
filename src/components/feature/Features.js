import React from 'react';
import Feature from './Feature';

import { ReactComponent as ClockIcon } from 'heroicons/outline/clock.svg';
import { ReactComponent as ChipIcon } from 'heroicons/outline/chip.svg';
import { ReactComponent as HeartIcon } from 'heroicons/outline/heart.svg';

const Features = () => {
  const features = [
    {
      Icon: ClockIcon,
      heading: 'Fastest deposit time',
      subHeading:
        'Sapphir approves and deposits your loan in the shortest amount of time comparing to other lenders.',
    },
    {
      Icon: ChipIcon,
      heading: 'Latest technologies',
      subHeading:
        'Sapphir provides an easy and secure experience with latest internet technologies.',
    },
    {
      Icon: HeartIcon,
      heading: 'Great customer service',
      subHeading:
        'Our excellent agents are ready to help you resolve your concerns with a single call, chat or email.',
    },
  ];

  return (
    <div className="flex flex-col items-center p-8 bg-gray-50">
      <div className="flex flex-col items-center space-y-10">
        <div className="flex flex-col items-center space-y-5">
          <a href="/">
            <div className="blue-hexagon"></div>
          </a>
          <h3 className="leading-5 text-xl tracking-wide font-extrabold text-black">
            The Sapphir difference
          </h3>
        </div>
        {features.map((feature, index) => {
          return <Feature key={index} {...feature} />;
        })}
      </div>
    </div>
  );
};

export default Features;
