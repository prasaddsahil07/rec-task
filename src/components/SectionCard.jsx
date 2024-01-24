import React from 'react';
import Accordion from './Accordion';

const SectionCard = () => {
  return (
    <div className="p-10">
      <Accordion title="LEVEL 0 : APPRENTICE"/>
      <Accordion title="LEVEL 1 : INITIATED"/>
      <Accordion title="LEVEL 2 : TRAINED"/>
      <Accordion title="LEVEL 3 : ABLE"/>
      <Accordion title="LEVEL 4 : COMPETENT"/>
      <Accordion title="LEVEL 5 : EXPERIENCEDE"/>
      <Accordion title="LEVEL 6 : PROFICIENT"/>
      <Accordion title="LEVEL 7 : SPECIALIST"/>
      <Accordion title="LEVEL 8 : EXPERT"/>
      <Accordion title="LEVEL 9 : MASTER"/>
      <Accordion title="LEVEL 10 : PROFESSIONAL"/>
    </div>
  );
};

export default SectionCard;
