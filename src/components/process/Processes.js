import React from 'react';
import Process from './Process';

import firstProcess from '../../assets/process1.png';
import secondProcess from '../../assets/process2.png';
import thirdProcess from '../../assets/process3.png';

const Processes = () => {
  const processes = [
    {
      number: 1,
      heading: 'Apply in 2 mins',
      subHeading: 'No credit check, no paperwork.',
      imgSrc: firstProcess,
      descriptions: [
        'No credit check required in the application process.',
        'Apply online or by phone within 2 minutes.',
        'Skip all the paperwork with electronic signature.',
      ],
    },
    {
      number: 2,
      heading: 'Get approved in 10 mins',
      subHeading: 'Safe, secure, confidential.',
      imgSrc: secondProcess,
      descriptions: [
        'Highest security standard in the financial industry.',
        'We never have access to your bank account or your password.',
        'Your personal information is safeguarded and never shared.',
      ],
    },
    {
      number: 3,
      heading: 'Get your loan in 30 mins',
      subHeading: 'Deposited directly into your account.',
      imgSrc: thirdProcess,
      descriptions: [
        'Receive an e-transfer you can use right away.',
        'You can also receive a direct deposit into your bank account.',
        'No waiting or travel necessary to receive your money.',
      ],
    },
  ];

  return (
    <div className="flex flex-col p-8">
      <div className="flex flex-col space-y-12">
        {processes.map((process) => {
          return <Process key={process.number} {...process} />;
        })}
      </div>
    </div>
  );
};

export default Processes;
