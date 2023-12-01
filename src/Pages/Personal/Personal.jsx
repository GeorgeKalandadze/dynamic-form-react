// Personal.js
import React from "react";
import InputGroup from "../../Components/InputGroup";
import TextareaGroup from "../../Components/TextareaGroup";
import { useGlobalContext } from "../../Context/Context";
import { validatePersonal } from "../../Validation/Validation";
import FormLayout from "../../Layouts/FormLayout";
import { useNavigate } from "react-router-dom";

const Personal = () => {
  const {
    info,
    setInfo,
    validationErrors,
    setValidationErrors,
    formatPhoneNumber,
  } = useGlobalContext();
  const navigate = useNavigate()


  const validateForm = () => {
    const errors = validatePersonal(info);
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      personal: errors,
    }));
     const isValidForm = Object.values(errors).every(
       (error) => error === "valid"
     );

     if (isValidForm) {
       navigate("/experience");
     }
  };

 

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    let formattedValue = value;

    if (name === "phone_number") {
      formattedValue = formatPhoneNumber(value);
    }

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
    }

    const updatedInfo =
      name === "image"
        ? { ...info, image: formattedValue }
        : { ...info, [name]: formattedValue };
    const errors = validatePersonal(updatedInfo, info.image);

    setInfo((prevInfo) => ({
      ...prevInfo,
      ...(name === "image"
        ? { image: formattedValue }
        : { [name]: formattedValue }),
    }));

    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      personal: {
        ...prevErrors.personal,
        [name]: errors[name],
      },
    }));
  };

   const onSubmit = (e) => {
     e.preventDefault();
     validateForm();
     
   };

   console.log(validationErrors.personal);

  return (
    <FormLayout>
      <form className="bg-white w-full " onSubmit={onSubmit}>
        <div className="bg-[#f9f9f9] py-[20px] px-[30px] w-full h-full  flex flex-col gap-8">
          <InputGroup
            name="name"
            label="სახელი"
            placeholder="ანზორ"
            hint="მინიმუმ 2 ასო, ქართული ასოები"
            value={info.name}
            changeHandler={handleChange}
            validation={validationErrors?.personal?.name}
          />
          <InputGroup
            name="surname"
            label="გავრი"
            placeholder="მუმლაძე"
            hint="მინიმუმ 2 ასო, ქართული ასოები"
            value={info.surname}
            changeHandler={handleChange}
            validation={validationErrors?.personal?.surname}
          />
          <div className="flex gap-16 items-center relative py-10">
            <p
              className={`font-semibold text-lg ${
                validationErrors?.personal?.image === "invalid"
                  ? "text-red-500"
                  : ""
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
            validation={validationErrors?.personal?.email}
          />
          <InputGroup
            name="phone_number"
            label="მობილურის ნომერი"
            placeholder="+995 551 12 34 36"
            hint="უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს"
            value={info.phone_number}
            changeHandler={handleChange}
            validation={validationErrors?.personal?.phone_number}
          />
          <div className="flex justify-end">
            <button
              className="bg-[#6b40e3] rounded text-white px-4 py-3"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </FormLayout>
  );
};

export default Personal;
