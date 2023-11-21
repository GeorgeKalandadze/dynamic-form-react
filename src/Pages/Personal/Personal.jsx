// Personal.js
import React from "react";
import InputGroup from "../../Components/InputGroup";
import TextareaGroup from "../../Components/TextareaGroup";
import { useGlobalContext } from "../../Context/Context";
import { validatePersonal } from "../../Validation/Validation";
import FormLayout from "../../Layouts/FormLayout";

const Personal = () => {
  const { info, setInfo, validationErrors, setValidationErrors } = useGlobalContext();
  
  const validateForm = () => {
    const errors = validatePersonal(info);
    setValidationErrors(errors);
  };

  const onSubmit = () => {
    validateForm();
  };

  const handleChange = (event) => {
    const { name, value, files } = event.target;

    if (name === "image" && files && files[0]) {
      const selectedImage = files[0];
      const reader = new FileReader();
      reader.readAsDataURL(selectedImage);
      reader.onload = () => {
      const dataUrl = reader.result;
      setInfo((prevInfo) => ({
        ...prevInfo,
        image: dataUrl,
        }));
      };
      

      const errors = validatePersonal(
        { ...info, [name]: value },
        info.image
      );
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        [name]: errors[name],
      }));
    } else {
      setInfo((prevInfo) => ({
        ...prevInfo,
        [name]: value,
      }));

      const errors = validatePersonal({ ...info, [name]: value }, info.image);
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        [name]: errors[name],
      }));
    }
  };

  return (
    <FormLayout>
      <div className="bg-white w-full ">
        <div className="bg-[#f9f9f9] py-[20px] px-[30px] w-full h-full  flex flex-col gap-8">
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
          <div className="flex gap-16 items-center relative py-10">
            <p
              className={`font-semibold text-lg ${
                validationErrors.image === "invalid" ? "text-red-500" : ""
              }`}
            >
              პირადი ფოტოს ატვირთვა
            </p>
            <div className="relative">
              <input
                type="file"
                name="image"
                className="cursor-pointer absolute top-0 left-0 w-full h-full opacity-0"
                onChange={handleChange}
              />
              <button className="cursor-pointer bg-[#0e80bf] text-white px-4 py-3 rounded max-w-full text-sm">
                ატვირთვა
              </button>
            </div>
          </div>
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
    </FormLayout>
  );
};

export default Personal;
