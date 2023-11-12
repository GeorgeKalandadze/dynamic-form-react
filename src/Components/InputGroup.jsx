import React from 'react'
import { useGlobalContext } from '../Context/Context'

const InputGroup = ({
  label,
  type,
  placeholder,
  name,
  value,
  error,
  changeHandler,
}) => {
   const { info, handleChange } = useGlobalContext();
  return (
    <div className="flex flex-col gap-3">
      <label className="font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        className="outline-none py-3 rounded px-3"
        onChange={(event) => handleChange(event)}
      />
      <p className="font-small">{error}</p>
    </div>
  );
};

export default InputGroup