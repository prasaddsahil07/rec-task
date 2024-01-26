import React, { useState } from 'react';
import AccordionItems from './AccordionItems';

const Accordion = ({ title, textColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-container text-xl font-semibold">
      <AccordionItems 
        title={title} 
        textColor={textColor} 
        isOpen={isOpen} 
        toggleAccordion={toggleAccordion} 
        content={[
          "Number theory",
          "Bitwise"
        ]}
      />
    </div>
  );
};

export default Accordion;
