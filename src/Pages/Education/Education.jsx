import React from 'react'
import InputGroup from '../../Components/InputGroup';
import TextareaGroup from '../../Components/TextareaGroup';
import { useGlobalContext } from '../../Context/Context';

const Education = () => {
  const { info, handleAddClick} = useGlobalContext();
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
            />

            <InputGroup type="date" name="start_date" label="დაწყების რიცხვი" />
            <InputGroup
              type="date"
              name="end_date"
              label="დამთავრების რიცხვი"
            />
            <TextareaGroup
              label="აღწერა"
              placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
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