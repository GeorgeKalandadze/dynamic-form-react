import React from 'react'

const InputGroup = ({label, type, placeholder, name, value, error}) => {
  return (
    <div className='flex flex-col gap-3'>
        <label className="font-medium">{label}</label>
        <input 
          type={type} 
          placeholder={placeholder} 
          name={name} 
          value={value}
          className="outline-none py-3 rounded px-3"
        />
        <p className='font-small'>{error}</p>
    </div>
  )
}

export default InputGroup