import { createContext, useContext } from "react";


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



    return <AppContext.Provider>
        {children}
    </AppContext.Provider>

}

export const useGlobalContext = () => {
  return useContext(AppContext);
};