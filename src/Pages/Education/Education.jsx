import React from 'react'
import InputGroup from '../../Components/InputGroup';
import TextareaGroup from '../../Components/TextareaGroup';
import { useGlobalContext } from '../../Context/Context';
import Dropdown from '../../Components/Dropdown';

const Education = () => {
  const { info, handleAddClick} = useGlobalContext();

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const handleSelect = (selectedOption) => {};
  return (
    <div className="bg-white px-[200px] py-[20px]">
      <div className=" bg-[#f9f9f9] py-[20px] px-[30px] w-full h-full rounded flex flex-col gap-8">
        {info.educations.map((x, i) => (
          <div className="flex flex-col gap-8">
            <InputGroup
              name=""
              label="სასწავლებელი"
              placeholder="სასწავლებელი"
              error="მინიმუმ 2 სიმბოლო"
              value={x.institute}
            />
            <Dropdown options={options} onSelect={handleSelect} />
            <InputGroup
              type="date"
              name="start_date"
              label="დაწყების რიცხვი"
              value={x.start_date}
            />
            <InputGroup
              type="date"
              name="due_date"
              label="დამთავრების რიცხვი"
              value={x.due_date}
            />
            <TextareaGroup
              label="აღწერა"
              placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
              value={x.description}
            />
          </div>
        ))}
        <div className="flex justify-start">
          <button
            className="bg-[#62a1eb] rounded text-white px-4 py-3"
            onClick={() => handleAddClick("education")}
          >
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

export default Education