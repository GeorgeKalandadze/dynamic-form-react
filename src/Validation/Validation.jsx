// Validation.js
export const validatePersonal = (values) => {
  const response = {
    name: "",
    surname: "",
    email: "",
    phone_number: "",
  };
  
  const REGEX_EMAIL = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@redberry\.ge$/;
  const REGEX_PHONE = /^(\+?995)?(79\d{7}|5\d{8})$/;
  const REGEX_NAME = /^[ა-ჰ]*$/;

  // Name validation
  if (
    !values?.name ||
    values?.name.length < 2 ||
    !REGEX_NAME.test(values?.name)
  ) {
    response.name = "invalid";
  } else {
    response.name = "valid";
  }

  // Surname validation
  if (
    !values?.surname ||
    values?.surname.length < 2 ||
    !REGEX_NAME.test(values?.surname)
  ) {
    response.surname = "invalid";
  } else {
    response.surname = "valid";
  }

  // Email validation
  if (!values?.email || !REGEX_EMAIL.test(values?.email)) {
    response.email = "invalid";
  } else {
    response.email = "valid";
  }

  // Phone validation
  if (!values?.phone_number || !REGEX_PHONE.test(values?.phone_number)) {
    response.phone_number = "invalid";
  } else {
    response.phone_number = "valid";
  }

  return response;
};
