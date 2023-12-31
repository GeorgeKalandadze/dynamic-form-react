import React, { useEffect } from 'react'
import InputGroup from '../../Components/InputGroup';
import TextareaGroup from '../../Components/TextareaGroup';
import { useGlobalContext } from '../../Context/Context';
import { validateExperiences } from '../../Validation/Validation';
import FormLayout from '../../Layouts/FormLayout';
import {  useNavigate } from 'react-router-dom';

const Experience = () => {
  const navigate = useNavigate()
  const {
    setInfo,
    info,
    handleAddClick,
    setValidationErrors,
    validationErrors,
  } = useGlobalContext();


  const handleExperienceChange = (event, index, field) => {
    const { value } = event.target;
    const updatedExperiences = [...info.experiences];
    updatedExperiences[index][field] = value;

    setInfo((formData) => ({
      ...formData,
      experiences: updatedExperiences,
    }));

    const errors = validateExperiences(updatedExperiences);
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      experiences: errors,
    }));
  };
  

  const onSubmit = () => {
    const errors = validateExperiences(info.experiences);
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      experiences: errors,
    }));
    const allFieldsValid = Object.values(errors).every((errorObj) =>
      Object.values(errorObj).every((error) => error === "valid")
    );
    if(allFieldsValid){
      navigate('/education')
    }
  }


  return (
    <FormLayout>
      <div className="bg-white">
        <div className=" bg-[#f9f9f9] py-[20px] px-[30px] w-full h-full rounded flex flex-col gap-8 scroll-container">
          {info.experiences.map((x, i) => (
            <div className="flex flex-col gap-8">
              <InputGroup
                name="position"
                label="თანამდებობა"
                placeholder="დეველოპერი, დიზაინერი, ა.შ."
                hint="მინიმუმ 2 სიმბოლო"
                value={x.position}
                changeHandler={(e) => handleExperienceChange(e, i, "position")}
                validation={validationErrors?.experiences?.[i]?.position}
              />
              <InputGroup
                name="employer"
                label="დამსაქმებელი"
                placeholder="დამსაქმებელი"
                hint="მინიმუმ 2 სიმბოლო"
                value={x.employer}
                changeHandler={(e) => handleExperienceChange(e, i, "employer")}
                validation={validationErrors?.experiences?.[i]?.employer}
              />
              <InputGroup
                type="date"
                name="start_date"
                label="დაწყების რიცხვი"
                value={x.start_date}
                changeHandler={(e) =>
                  handleExperienceChange(e, i, "start_date")
                }
                validation={validationErrors?.experiences?.[i]?.start_date}
              />
              <InputGroup
                type="date"
                name="due_date"
                label="დამთავრების რიცხვი"
                value={x.due_date}
                changeHandler={(e) => handleExperienceChange(e, i, "due_date")}
                validation={validationErrors?.experiences?.[i]?.due_date}
              />
              <TextareaGroup
                name="description"
                label="აღწერა"
                placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                value={x.description}
                changeHandler={(e) =>
                  handleExperienceChange(e, i, "description")
                }
                validation={validationErrors?.experiences?.[i]?.description}
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
            <button
              className="bg-[#6b40e3] rounded text-white px-4 py-3"
              onClick={() => onSubmit()}
            >
              შემდეგი
            </button>
          </div>
        </div>
      </div>
    </FormLayout>
  );
}

export default Experience