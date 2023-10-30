import React from 'react'
import FormLayout from '../../Layouts/FormLayout'
import InputGroup from '../../Components/InputGroup';

const Personal = () => {
  return (
    <div className="px-[200px] bg-[#f9f9f9] w-full h-[100vh] rounded flex flex-col gap-6">
      <InputGroup
        name="name"
        label="სახელი"
        placeholder="ანზორ"
        error="მინიმუმ 2 ასო, ქართული ასოები"
      />
      <InputGroup
        name="lastname"
        label="გავრი"
        placeholder="მუმლაძე"
        error="მინიმუმ 2 ასო, ქართული ასოები"
      />
    </div>
  );
}

export default Personal