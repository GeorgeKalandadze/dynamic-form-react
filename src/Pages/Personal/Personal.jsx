import React from 'react'
import FormLayout from '../../Layouts/FormLayout'
import InputGroup from '../../Components/InputGroup';
import TextareaGroup from '../../Components/TextareaGroup';
import { useGlobalContext } from '../../Context/Context';

const Personal = () => {

  const { info, handleChange} = useGlobalContext();

  console.log(info);
  return (
    <div className="bg-white px-[200px] py-[20px]">
      <div className=" bg-[#f9f9f9] py-[20px] px-[30px] w-full h-full rounded flex flex-col gap-8">
        <InputGroup
          name="name"
          label="სახელი"
          placeholder="ანზორ"
          error="მინიმუმ 2 ასო, ქართული ასოები"
          value={info.name}
          // changeHandler={handleChange}
        />
        <InputGroup
          name="surname"
          label="გავრი"
          placeholder="მუმლაძე"
          error="მინიმუმ 2 ასო, ქართული ასოები"
          value={info.surname}
        />
        <TextareaGroup
          label="ჩემ შესახებ (არასავალდებულო)"
          placeholder="ზოგადი ინფო შენს შესახებ"
          value={info.about_me}
        />
        <InputGroup
          name="email"
          label="ელ.ფოსტა"
          placeholder="anzorr777@redberry.ge"
          error="უნდა მთავრდებოდეს @redberry.ge-ით"
          value={info.email}
        />
        <InputGroup
          name="phone_number"
          label="მობილურის ნომერი"
          placeholder="+995 551 12 34 36"
          error="უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს"
          value={info.phone_number}
        />
        <div className="flex justify-end">
          <button className="bg-[#6b40e3] rounded text-white px-4 py-3">
            შემდეგი
          </button>
        </div>
      </div>
    </div>
  );
}

export default Personal