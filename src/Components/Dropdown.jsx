import React, { useState } from 'react'

const Dropdown = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="bg-white py-3 px-3 rounded relative">
      <div className="bg-white" onClick={handleToggle}>
        {selectedOption ? (
          selectedOption.label
        ) : (
          <h1 className="font-medium">Select an option</h1>
        )}
      </div>
      {isOpen && (
        <ul className="absolute bg-white w-full left-0 py-3 px-3 shadow-md rounded-b-lg">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              className="py-3 "
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown