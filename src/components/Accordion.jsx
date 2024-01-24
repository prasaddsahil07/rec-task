import React from 'react';
import AccordionItems from './AccordionItems';

const SectionCard = (props) => {
  
  return (
    <div className="bg-gray-800 text-white p-8 rounded-md shadow-md mb-0">
      <div className="mb-0">
        <div className="bg-gray-700 text-green-500 p-4 rounded-md mb-4">
          <h2 className="text-2xl font-bold">{props.title}</h2>
        </div>
        <AccordionItems title="arrays" content="" />
        <AccordionItems title="strings" content="" />
      </div>
    </div>
  );
};

export default SectionCard;
