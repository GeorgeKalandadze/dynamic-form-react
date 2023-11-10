import React from 'react'
import InputGroup from '../../Components/InputGroup';
import TextareaGroup from '../../Components/TextareaGroup';
import Dropdown from '../../Components/Dropdown';

const Experience = () => {
  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const handleSelect = (selectedOption) => {
    // Do something with the selected option
    console.log("Selected Option:", selectedOption);
  };
  return (
    <div className="bg-white px-[200px] py-[20px]">
      <div className=" bg-[#f9f9f9] py-[20px] px-[30px] w-full h-full rounded flex flex-col gap-8">
        <InputGroup
          name="position"
          label="თანამდებობა"
          placeholder="დეველოპერი, დიზაინერი, ა.შ."
          error="მინიმუმ 2 სიმბოლო"
        />
        <InputGroup
          name="employer"
          label="დამსაქმებელი"
          placeholder="დამსაქმებელი"
          error="მინიმუმ 2 სიმბოლო"
        />
        <InputGroup type="date" name="start_date" label="დაწყების რიცხვი" />
        <InputGroup type="date" name="end_date" label="დამთავრების რიცხვი" />
        <Dropdown options={options} onSelect={handleSelect} />
        <TextareaGroup
          label="აღწერა"
          placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
        />
        <div className="flex justify-start">
          <button className="bg-[#62a1eb] rounded text-white px-4 py-3">
            მეტი გამოცდილების დამატება
          </button>
        </div>
        <div className="flex justify-between mt-8">
          <button className="bg-[#6b40e3] rounded text-white px-4 py-3">
            უკან
          </button>
          <button className="bg-[#6b40e3] rounded text-white px-4 py-3">
            შემდეგი
          </button>
        </div>
      </div>
    </div>
  );
}

export default Experience