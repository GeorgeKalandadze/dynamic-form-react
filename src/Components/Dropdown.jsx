import React, { useState } from "react";
import ArrowDownIcon from "../assets/arrow-down.png";

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
    <div
      className={`bg-white py-3 px-3 rounded relative ${isOpen ? "open" : ""}`}
    >
      <div
        className={`bg-white flex items-center cursor-pointer justify-between`}
        onClick={handleToggle}
      >
        {selectedOption ? (
          <h1 className="font-medium">{selectedOption.label}</h1>
        ) : (
          <h1 className="font-medium">აირჩიეთ ხარისხი</h1>
        )}
        <img
          src={ArrowDownIcon}
          alt="Arrow Down"
          className={`w-3 ml-2 transform ${
            isOpen ? "rotate-180 transform duration-300 ease-in-out" : ""
          }`}
        />
      </div>
      {isOpen && (
        <ul className="absolute bg-white w-full left-0 shadow-lg rounded-b-lg">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              className="py-3 px-3 cursor-pointer transition hover:bg-gray-200"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
