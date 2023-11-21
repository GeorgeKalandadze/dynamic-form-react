import React from 'react'
import Resume from '../Components/Resume';

const FormLayout = ({children}) => {
  return (
    <div className=" w-full h-[100vh] flex justify-between">
      <div className="w-1/2">{children}</div>
      <Resume />
    </div>
  );
}

export default FormLayout