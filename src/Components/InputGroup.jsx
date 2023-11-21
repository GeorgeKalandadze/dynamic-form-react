// InputGroup.js
import React from "react";
import ErrorIcon from "../assets/error-icon.png";
import SuccessIcon from "../assets/success-icon.png";

const InputGroup = ({
  label,
  type,
  placeholder,
  name,
  value,
  hint,
  changeHandler,
  validation,
}) => {
  const inputClass = `outline-none py-3 rounded px-3 w-full ${
    validation === "invalid"
      ? "border-[1px] border-red-500"
      : validation === "valid"
      ? "border-[1px] border-green-500"
      : ""
  }`;

  return (
    <div className="flex flex-col gap-3">
      <label
        className={`font-medium ${
          validation === "invalid" ? "text-red-500" : ""
        }`}
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          className={inputClass}
          onChange={(event) => changeHandler(event)}
        />
        <img
          src={
            validation === "valid"
              ? SuccessIcon
              : validation === "invalid"
              ? ErrorIcon
              : ""
          }
          className={`absolute top-3 ${
            type === "date" ? "right-[-3.7%]" : "right-3"
          }`}
        />
      </div>
      <p
        className={`font-small ${
          validation === "invalid" ? "text-red-500" : ""
        }`}
      >
        {hint}
      </p>
    </div>
  );
};

export default InputGroup;
