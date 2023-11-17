import React from 'react'

const TextareaGroup = ({label, error, placeholder, value, changeHandler,name}) => {
  return (
    <div className="flex flex-col gap-3">
      <label className="font-medium">{label}</label>
      <textarea
        name={name}
        placeholder={placeholder}
        className="resize-none px-2 py-2 h-[200px] outline-none"
        value={value}
        onChange={(event) => changeHandler(event)}
      ></textarea>
      <p className="font-small">{error}</p>
    </div>
  );
}

export default TextareaGroup