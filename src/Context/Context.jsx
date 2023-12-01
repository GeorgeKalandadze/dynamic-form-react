import { createContext, useContext } from "react";
import { useSessionStorage } from "../Hooks/useSessionStorage";


const AppContext = createContext({});

const resumeInfo = {
  name: "",
  surname: "",
  about_me: "",
  image: "",
  email: "",
  phone_number: "",
  experiences: [
    {
      position: "",
      employer: "",
      start_date: "",
      due_date: "",
      description: "",
    },
  ],
  educations: [
    {
      start_date: "",
      institute: "",
      due_date: "",
      description: "",
      degree_id: "",
    },
  ],
};


export const AppProvider = ({children}) => {
    const [info, setInfo] = useSessionStorage("resume-info", resumeInfo);
    const [validationErrors, setValidationErrors] = useSessionStorage(
      "errors",
      {
        personal:{},
        experiences:{},
        educations:{},
      }
    );
      

    const handleAddClick = (type) => {
      if (type === "experience") {
        setInfo({
          ...info,
          experiences: [
            ...info.experiences,
            {
              position: "",
              employer: "",
              start_date: "",
              due_date: "",
              description: "",
            },
          ],
        });
      } else if (type === "education") {
        setInfo({
          ...info,
          educations: [
            ...info.educations,
            { institute: "", due_date: "", description: "", degree_id: "" },
          ],
        });
      }
    };

    const formatPhoneNumber = (value) => {
      if (!value) return value;

      const phoneNumber = value.replace(/[^\d+]/g, "").slice(0, 13);
      const phoneNumberLength = phoneNumber.length;

      if (phoneNumberLength <= 3) {
        return phoneNumber;
      } else if (phoneNumberLength <= 6) {
        return `${phoneNumber.slice(0, 4)} ${phoneNumber.slice(4)}`.trim();
      } else if (phoneNumberLength <= 8) {
        return `${phoneNumber.slice(0, 4)} ${phoneNumber.slice(
          4,
          7
        )} ${phoneNumber.slice(7)}`.trim();
      } else if (phoneNumberLength <= 10) {
        return `${phoneNumber.slice(0, 4)} ${phoneNumber.slice(
          4,
          7
        )} ${phoneNumber.slice(7, 9)} ${phoneNumber.slice(9)}`.trim();
      } else {
        return `${phoneNumber.slice(0, 4)} ${phoneNumber.slice(
          4,
          7
        )} ${phoneNumber.slice(7, 9)} ${phoneNumber.slice(
          9,
          11
        )} ${phoneNumber.slice(11)}`.trim();
      }
    };


     const handleChange = ( event ) => {
       const name = event.target.name;
       const value = event.target.value;
       setInfo((formData) => ({ ...formData, [name]: value }));
     };



    return (
      <AppContext.Provider
        value={{
          info,
          handleAddClick,
          handleChange,
          setInfo,
          validationErrors,
          setValidationErrors,
          formatPhoneNumber,
        }}
      >
        {children}
      </AppContext.Provider>
    );

}

export const useGlobalContext = () => {
  return useContext(AppContext);
};