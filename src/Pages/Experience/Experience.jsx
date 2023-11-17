import React from 'react'
import InputGroup from '../../Components/InputGroup';
import TextareaGroup from '../../Components/TextareaGroup';
import Dropdown from '../../Components/Dropdown';
import { useGlobalContext } from '../../Context/Context';

const Experience = () => {
  const { info, handleAddClick, handleInputChange } = useGlobalContext();
  return (
    <div className="bg-white px-[200px] py-[20px]">
      <div className=" bg-[#f9f9f9] py-[20px] px-[30px] w-full h-full rounded flex flex-col gap-8">
        {info.experiences.map((x, i) => (
          <div className="flex flex-col gap-8">
            <InputGroup
              name="position"
              label="თანამდებობა"
              placeholder="დეველოპერი, დიზაინერი, ა.შ."
              hint="მინიმუმ 2 სიმბოლო"
              value={x.position}
              changeHandler={(e) => handleInputChange(e, i, "experience")}
            />
            <InputGroup
              name="employer"
              label="დამსაქმებელი"
              placeholder="დამსაქმებელი"
              hint="მინიმუმ 2 სიმბოლო"
              value={x.employer}
              changeHandler={(e) => handleInputChange(e, i, "experience")}
            />
            <InputGroup
              type="date"
              name="start_date"
              label="დაწყების რიცხვი"
              value={x.start_date}
              changeHandler={(e) => handleInputChange(e, i, "experience")}
            />
            <InputGroup
              type="date"
              name="due_date"
              label="დამთავრების რიცხვი"
              value={x.due_date}
              changeHandler={(e) => handleInputChange(e, i, "experience")}
            />
            <TextareaGroup
              name="description"
              label="აღწერა"
              placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
              value={x.description}
              changeHandler={(e) => handleInputChange(e, i, "experience")}
            />
          </div>
        ))}
        <div className="flex justify-start">
          <button
            onClick={() => handleAddClick("experience")}
            className="bg-[#62a1eb] rounded text-white px-4 py-3"
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

export default Experience