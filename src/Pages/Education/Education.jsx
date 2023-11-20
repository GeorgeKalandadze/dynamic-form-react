import React from 'react'
import InputGroup from '../../Components/InputGroup';
import TextareaGroup from '../../Components/TextareaGroup';
import { useGlobalContext } from '../../Context/Context';
import Dropdown from '../../Components/Dropdown';
import { validateEducatinos } from '../../Validation/Validation';

const Education = () => {
  const {
    info,
    handleAddClick,
    setValidationErrors,
    validationErrors,
    setInfo,
  } = useGlobalContext();

  const options = [
    { label: "ბაკალავრი", value: 1 },
    { label: "მაგისტრატურა", value: 2 },
    { label: "დოქტურანტურა", value: 3 },
  ];

  const handleEducationChange = (event, index, field) => {
    const { value } = event.target;
    const updatedEducation = [...info.educations];
    updatedEducation[index][field] = value;

    if (field !== "degree_id") {
      updatedEducation[index].degree_id = info.educations[index].degree_id;
    }

    setInfo((formData) => ({
      ...formData,
      educations: updatedEducation,
    }));

    const errors = validateEducatinos(updatedEducation);
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      educations: errors,
    }));
  };


  const onSubmit = () => {
    const errors = validateEducatinos(info.educations);
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      educations: errors,
    }));
    validateEducatinos(info.educations);
  };

 const handleChange = (selectedOption, index) => {
   const updatedEducations = info.educations.map((education, i) =>
     i === index ? { ...education, degree_id: selectedOption } : education
   );

   setInfo((formData) => ({
     ...formData,
     educations: updatedEducations,
   }));

   const errors = validateEducatinos(updatedEducations);
   setValidationErrors((prevErrors) => ({
     ...prevErrors,
     educations: errors,
   }));
 };

 console.log("info", info);

  return (
    <div className="bg-white px-[200px] py-[20px]">
      <div className=" bg-[#f9f9f9] py-[20px] px-[30px] w-full h-full rounded flex flex-col gap-8">
        {info.educations.map((x, i) => (
          <div className="flex flex-col gap-8">
            <InputGroup
              name="institute"
              label="სასწავლებელი"
              placeholder="სასწავლებელი"
              hint="მინიმუმ 2 სიმბოლო"
              value={x.institute}
              changeHandler={(e) => handleEducationChange(e, i, "institute")}
              validation={validationErrors?.educations?.[i]?.institute}
            />
            <Dropdown
              options={options}
              value={x.degree_id}
              handleChange={(value) => handleChange(value, i)}
              validation={validationErrors?.educations?.[i]?.degree_id}
            />
            <InputGroup
              type="date"
              name="start_date"
              label="დაწყების რიცხვი"
              value={x.start_date}
              changeHandler={(e) => handleEducationChange(e, i, "start_date")}
              validation={validationErrors?.educations?.[i]?.start_date}
            />
            <InputGroup
              type="date"
              name="due_date"
              label="დამთავრების რიცხვი"
              value={x.due_date}
              changeHandler={(e) => handleEducationChange(e, i, "due_date")}
              validation={validationErrors?.educations?.[i]?.due_date}
            />
            <TextareaGroup
              label="აღწერა"
              placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
              value={x.description}
              changeHandler={(e) => handleEducationChange(e, i, "description")}
              validation={validationErrors?.educations?.[i]?.description}
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
          <button
            className="bg-[#6b40e3] rounded text-white px-4 py-3"
            onClick={onSubmit}
          >
            შემდეგი
          </button>
        </div>
      </div>
    </div>
  );
}

export default Education