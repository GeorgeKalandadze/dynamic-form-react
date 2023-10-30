import React from 'react'

const FormLayout = ({children}) => {
  return (
    <div className=" w-full h-[100vh] flex flex-col justify-center items-center  px-[400px] py-[20px]">
      {children}
    </div>
  );
}

export default FormLayout