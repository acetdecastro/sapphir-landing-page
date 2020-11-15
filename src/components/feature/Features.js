import React from 'react';
import Feature from './Feature';

import { dataFeatures } from '../../utils/data';

const Features = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-gradient-to-tl from-blue-200 via-blue-100 md:px-14 justify-between">
      <section className="flex flex-col items-center space-y-10 w-full md:space-y-6">
        <div className="flex flex-col items-center space-y-5">
          <a href="/">
            <div className="blue-hexagon"></div>
          </a>
          <h3 className="leading-5 text-xl tracking-wide font-extrabold text-black">
            The{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-500 sapphir-bg-color bg-clip-text">
              Sapphir
            </span>{' '}
            difference
          </h3>
        </div>

        <div className="space-y-10 w-full md:flex md:space-y-0 justify-between">
          {dataFeatures.map((feature, index) => {
            return <Feature key={index} {...feature} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Features;
