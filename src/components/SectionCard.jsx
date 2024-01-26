import React from 'react';
import Accordion from './Accordion';

const SectionCard = () => {
  return (
    <div className="max-w-screen mx-auto bg-gray-600 shadow-md rounded-xl m-12 p-8 ml-8 mr-8">
      <h2 className="text-3xl font-semibold mb-4 text-slate-200">Sections :</h2>
      <div className="grid gap-4 bg-slate-500 p-4 rounded-sm">
        <Accordion title="LEVEL 0 : APPRENTICE" textColor="red" />
        <Accordion title="LEVEL 1 : INITIATED" textColor="green" />
        <Accordion title="LEVEL 2 : TRAINED" textColor="blue" />
        <Accordion title="LEVEL 3 : ABLE" textColor="purple" />
        <Accordion title="LEVEL 4 : COMPETENT" textColor="orange" />
        <Accordion title="LEVEL 5 : EXPERIENCED" textColor="teal" />
        <Accordion title="LEVEL 6 : PROFICIENT" textColor="pink" />
        <Accordion title="LEVEL 7 : SPECIALIST" textColor="yellow" />
        <Accordion title="LEVEL 8 : EXPERT" textColor="indigo" />
        <Accordion title="LEVEL 9 : MASTER" textColor="cyan" />
        <Accordion title="LEVEL 10 : PROFESSIONAL" textColor="lime" />
      </div>
    </div>
  );
};

export default SectionCard;
