import React from 'react';

const AccordionItems = ({ title, content, textColor, isOpen, toggleAccordion }) => {
  return (
    <div className="mb-2">
      <div
        className={`bg-gray-700 p-3 rounded-md cursor-pointer flex justify-between items-center transition-all duration-300 ${
          isOpen ? 'rounded-t-md' : 'rounded-md'
        }`}
        onClick={toggleAccordion}
        style={{ marginBottom: isOpen ? '0.5rem' : 0 }}
      >
        <div className={`bg-${textColor}-500 text-lime-500 rounded-md p-2 mr-2`}>{title}</div>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>
      <div
        className={`bg-gray-900 p-3 rounded-b-md overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{
          maxHeight: isOpen ? '1000px' : 0,
        }}
      >
        {content.map((item, index) => (
          <p key={index} className="text-gray-400 divide-y-4 p-4">{item}</p>
        ))}
      </div>
    </div>
  );
};

export default AccordionItems;
