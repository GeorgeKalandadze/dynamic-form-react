// Personal.js
import React, { useEffect, useState } from "react";
import InputGroup from "../../Components/InputGroup";
import TextareaGroup from "../../Components/TextareaGroup";
import { useGlobalContext } from "../../Context/Context";
import { validatePersonal } from "../../Validation/Validation";
import { useSessionStorage } from "../../Hooks/useSessionStorage";

const Personal = () => {
  const { info,setInfo} = useGlobalContext();
  const [validationErrors, setValidationErrors] = useSessionStorage('errors',{
    name: "",
    surname: "",
    email: "",
    phone_number: "",
  });

  const validateForm = () => {
    const errors = validatePersonal(info);
    setValidationErrors(errors);
  };

  const onSubmit = () => {
    validateForm();
  };


  console.log(info.phone_number)

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));

    const errors = validatePersonal({ ...info, [name]: value });
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errors[name],
    }));
  };

  return (
    <div className="bg-white px-[200px] py-[20px]">
      <div className="bg-[#f9f9f9] py-[20px] px-[30px] w-full h-full rounded flex flex-col gap-8">
        <InputGroup
          name="name"
          label="სახელი"
          placeholder="ანზორ"
          hint="მინიმუმ 2 ასო, ქართული ასოები"
          value={info.name}
          changeHandler={handleChange}
          validation={validationErrors.name}
        />
        <InputGroup
          name="surname"
          label="გავრი"
          placeholder="მუმლაძე"
          hint="მინიმუმ 2 ასო, ქართული ასოები"
          value={info.surname}
          changeHandler={handleChange}
          validation={validationErrors.surname}
        />
        <TextareaGroup
          label="ჩემ შესახებ (არასავალდებულო)"
          placeholder="ზოგადი ინფო შენს შესახებ"
          name="about_me"
          value={info.about_me}
          changeHandler={handleChange}
        />
        <InputGroup
          name="email"
          label="ელ.ფოსტა"
          placeholder="anzorr777@redberry.ge"
          hint="უნდა მთავრდებოდეს @redberry.ge-ით"
          value={info.email}
          changeHandler={handleChange}
          validation={validationErrors.email}
        />
        <InputGroup
          name="phone_number"
          label="მობილურის ნომერი"
          placeholder="+995 551 12 34 36"
          hint="უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს"
          value={info.phone_number}
          changeHandler={handleChange}
          validation={validationErrors.phone_number}
        />
        <div className="flex justify-end">
          <button
            className="bg-[#6b40e3] rounded text-white px-4 py-3"
            onClick={onSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Personal;
