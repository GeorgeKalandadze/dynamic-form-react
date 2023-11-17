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

     const handleChange = ( event ) => {
       const name = event.target.name;
       const value = event.target.value;
       setInfo((formData) => ({ ...formData, [name]: value }));
     };



     const handleInputChange = (event, index, type) => {
       const { name, value } = event.target;
       let arrayToUpdate;
       if (type === "experience") {
         arrayToUpdate = [...info.experiences];
       } else if (type === "education") {
         arrayToUpdate = [...info.educations];
       }
       arrayToUpdate[index] = { ...arrayToUpdate[index], [name]: value };

       if (type === "experience") {
         setInfo({ ...info, experiences: arrayToUpdate });
       } else if (type === "education") {
         setInfo({ ...info, educations: arrayToUpdate });
       }
     };


    return (
      <AppContext.Provider
        value={{
          info,
          handleAddClick,
          handleChange,
          handleInputChange,
          setInfo,
        }}
      >
        {children}
      </AppContext.Provider>
    );

}

export const useGlobalContext = () => {
  return useContext(AppContext);
};