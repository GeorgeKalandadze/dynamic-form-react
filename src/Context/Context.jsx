import { createContext, useContext } from "react";
import { useSessionStorage } from "../Hooks/useSessionStorage";


const AppContext = createContext({});

const resumeInfo = {
  name: "",
  surname: "",
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
      institute: "",
      due_date: "",
      description: "",
      degree_id: "",
    },
  ],
  image: "",
  about_me: "",
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


    return (
      <AppContext.Provider
        value={{
          info,
          handleAddClick
        }}
      >
        {children}
      </AppContext.Provider>
    );

}

export const useGlobalContext = () => {
  return useContext(AppContext);
};