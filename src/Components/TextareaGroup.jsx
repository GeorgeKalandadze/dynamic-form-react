import React from 'react'

const TextareaGroup = ({label, error, placeholder, value, changeHandler,name, validation = ""}) => {

  const inputClass = `outline-none py-3 rounded px-3 w-full ${
    validation === "invalid"
      ? "border-[1px] border-red-500"
      : validation === "valid"
      ? "border-[1px] border-green-500"
      : ""
  }`;
  return (
    <div className="flex flex-col gap-3">
      <label className="font-medium">{label}</label>
      <textarea
        name={name}
        placeholder={placeholder}
        className={`resize-none rounded px-2 py-2 h-[200px] outline-none ${
          validation === "invalid"
            ? "border-[1px] border-red-500"
            : validation === "valid"
            ? "border-[1px] border-green-500"
            : ""
        }`}
        value={value}
        onChange={(event) => changeHandler(event)}
      ></textarea>
      <p className="font-small">{error}</p>
    </div>
  );
}

export default TextareaGroup