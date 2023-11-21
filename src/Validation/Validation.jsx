// Validation.js
export const validatePersonal = (values) => {
  const response = {
    name: "",
    surname: "",
    email: "",
    phone_number: "",
    image:""
  };
  
  const REGEX_EMAIL = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@redberry\.ge$/;
  const REGEX_PHONE = /^(\+?995)?(79\d{7}|5\d{8})$/;
  const REGEX_NAME = /^[ა-ჰ]*$/;

  if (
    !values?.name ||
    values?.name.length < 2 ||
    !REGEX_NAME.test(values?.name)
  ) {
    response.name = "invalid";
  } else {
    response.name = "valid";
  }

  if (
    !values?.surname ||
    values?.surname.length < 2 ||
    !REGEX_NAME.test(values?.surname)
  ) {
    response.surname = "invalid";
  } else {
    response.surname = "valid";
  }

  if (!values?.email || !REGEX_EMAIL.test(values?.email)) {
    response.email = "invalid";
  } else {
    response.email = "valid";
  }

  if (!values?.phone_number || !REGEX_PHONE.test(values?.phone_number)) {
    response.phone_number = "invalid";
  } else {
    response.phone_number = "valid";
  }

   if (!values.image) {
     response.image = "invalid";
   }else{
       response.image = "valid";
   }

  return response;
};


export const validateExperiences = (experiences) => {
  const response = {};
  
  experiences.forEach((experience, index) => {
    console.log("exp",experience)
    const expErrors = {};
    
    if (!experience.position || experience.position.length < 2) {
      expErrors[`position`] = "invalid";
    }
    else{
      expErrors[`position`] = "valid";
    }


    if (!experience.employer || experience.employer.length < 2) {
      expErrors[`employer`] = "invalid";
    }else{
      expErrors[`employer`] = "valid";
    }


    if (!experience.start_date) {
      expErrors[`start_date`] = "invalid";
    }else{
      expErrors[`start_date`] = "valid";
    }


    if (!experience.due_date) {
      expErrors[`due_date`] = "invalid";
    } else if (experience.start_date && experience.due_date) {
      const startDate = new Date(experience.start_date);
      const dueDate = new Date(experience.due_date);

      if (dueDate < startDate) {
        expErrors[`due_date`] = "invalid";
      }else{
        expErrors[`due_date`] = "valid";
      }
    }

     if (!experience.description || experience.description.length < 2) {
       expErrors[`description`] = "invalid";
     } else {
       expErrors[`description`] = "valid";
     }

    if (Object.keys(expErrors).length > 0) {
      response[index] = expErrors;
    }

    console.log(expErrors);
  });

  return response;
};


export const validateEducatinos = (educations) => {
  const response = {};

  educations.forEach((education, index) => {
    console.log("exp", education);
    const eduErrors = {};

    if (!education.institute || education.institute.length < 2) {
      eduErrors[`institute`] = "invalid";
    } else {
      eduErrors[`institute`] = "valid";
    }

    if (!education.start_date) {
      eduErrors[`start_date`] = "invalid";
    } else {
      eduErrors[`start_date`] = "valid";
    }

    if (!education.degree_id) {
      eduErrors[`degree_id`] = "invalid";
    } else {
      eduErrors[`degree_id`] = "valid";
    }

    if (!education.due_date) {
      eduErrors[`due_date`] = "invalid";
    } else if (education.start_date && education.due_date) {
      const startDate = new Date(education.start_date);
      const dueDate = new Date(education.due_date);

      if (dueDate < startDate) {
        eduErrors[`due_date`] = "invalid";
      } else {
        eduErrors[`due_date`] = "valid";
      }
    }

    if (!education.description || education.description.length < 2) {
      eduErrors[`description`] = "invalid";
    } else {
      eduErrors[`description`] = "valid";
    }

    if (Object.keys(eduErrors).length > 0) {
      response[index] = eduErrors;
    }

    console.log(eduErrors);
  });

  return response;
};

