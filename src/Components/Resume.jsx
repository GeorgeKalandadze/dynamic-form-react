import React from 'react'
import EmailIcon from '../assets/email-icon.png'
import PhoneIcon from '../assets/mobile-icon.png'
import PersonImg from '../assets/person.jpg'
import { useGlobalContext } from '../Context/Context'

const Resume = () => {
    const { info } = useGlobalContext();
      
    const areAllExpEmpty = info.experiences.every((experience) => {
      return Object.values(experience).every((value) => value === "");
    });
    const areAllEduEmpty = info.educations.every((education) => {
      return Object.values(education).every((value) => value === "");
    });
  return (
    <div className=" w-1/2 py-[20px] px-[30px]">
      <div className="flex items-center justify-between border-b-2 pb-8">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-[30px] text-red-500 mb-3">
            {info.name ? info.name : ""} {info.surname ? info.surname : ""}
          </h1>
          {info.email && (
            <div className="flex items-center gap-2">
              <img src={EmailIcon} />
              <p>{info.email}</p>
            </div>
          )}
          {info.phone_number && (
            <div className="flex items-center gap-2">
              <img src={PhoneIcon} />
              <p>{info.phone_number}</p>
            </div>
          )}

          {info.about_me && (
            <div className="flex flex-col gap-2 mt-3">
              <p className="text-red-500 font-medium">ჩემს შესახებ</p>
              <p>{info.about_me}</p>
            </div>
          )}
        </div>
        <img src={PersonImg} className="rounded-full h-[246px] w-[246px]" />
      </div>
      {!areAllExpEmpty && (
        <div className="flex flex-col border-b-2 pb-8 pt-8">
          <p className="text-red-500 font-medium">გამოცდილება</p>
          {info.experiences.map((exp) => (
            <div className="mt-5">
              <div className="flex gap-2">
                <p className="font-medium">{exp?.position}</p>
                <p className="font-medium">{exp?.employer}</p>
              </div>
              <div className="mt-2">
                <p className="text-gray-400">
                  {exp?.start_date} {exp?.due_date}
                </p>
              </div>
              <div className="mt-4">
                <p>{exp?.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {!areAllEduEmpty && (
        <div className="flex flex-col border-b-2 pb-8 pt-8">
          <p className="text-red-500 font-medium">განათლება</p>
          {info.educations.map((edu) => (
            <div className="mt-5">
              <div className="flex gap-2">
                <p className="font-medium">{edu?.institute}</p>
                <p className="font-medium">{edu?.degree_id}</p>
              </div>
              <div className="mt-2">
                <p className="text-gray-400">
                  {edu?.start_date} - {edu?.due_date}
                </p>
              </div>
              <div className="mt-4">
                <p>
                 {edu?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Resume