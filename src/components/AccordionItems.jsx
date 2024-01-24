import React, { useState } from 'react';

const AccordionItems = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordionItems = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-2">
      <div
        className={`bg-gray-700 p-3 rounded-md cursor-pointer flex justify-between items-center ${
          isOpen ? 'rounded-t-md' : 'rounded-md'
        }`}
        onClick={toggleAccordionItems}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <div className="bg-gray-900 p-3 rounded-b-md">
          <p className="text-gray-400">{content}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionItems;
