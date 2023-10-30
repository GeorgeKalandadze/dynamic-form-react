import React from 'react'

const TextareaGroup = ({label, error, placeholder}) => {
  return (
    <div className="flex flex-col gap-3">
      <label className="font-medium">{label}</label>
      <textarea 
        placeholder={placeholder}
        className="resize-none px-2 py-2 h-[200px] outline-none"
      >

      </textarea>
      <p className="font-small">{error}</p>
    </div>
  );
}

export default TextareaGroup