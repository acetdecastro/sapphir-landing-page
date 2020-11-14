import React from 'react';
import Process from './Process';
import { dataProcesses } from '../../utils/data';

const Processes = () => {
  return (
    <div className="flex flex-col p-8">
      <div className="flex flex-col space-y-12">
        {dataProcesses.map((process) => {
          return <Process key={process.number} {...process} />;
        })}
      </div>
    </div>
  );
};

export default Processes;
