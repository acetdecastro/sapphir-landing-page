import React from 'react';
import Hero from '../components/Hero';
import LoanPlan from '../components/LoanPlan';
import Processes from '../components/process/Processes';
import Features from '../components/feature/Features';
import Support from '../components/Support';

const Main = () => {
  return (
    <main>
      <Hero />
      <LoanPlan />
      <Processes />
      <Features />
      <Support />
    </main>
  );
};

export default Main;
