const validateUser = (values) => {
    const errors = {};
  
    //////////////////////////FirstName/////////////////////
  
    if (values.firstName.length) {
      if (
        !/^[აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ]+$/.test(values.firstName) &&
        !/^[a-zA-Z]+$/.test(values.firstName) &&
        values.firstName.length >= 1
      ) {
        errors.firstNameError =
          "სახელის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს";
      } else if (values.firstName.length >= 1 && values.firstName.length <= 2) {
        errors.firstNameError =
          "სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოგან";
      } else if (values.firstName.length > 255) {
        errors.firstNameError =
          "სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან";
      } else {
        errors.firstNameError = "";
      }
    }
  
    //////////////////////////LastName/////////////////////
  
    if (values.lastName.length) {
      if (
        !/^[აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ]+$/.test(values.lastName) &&
        !/^[a-zA-Z]+$/.test(values.lastName) &&
        values.lastName.length >= 1
      ) {
        errors.lastNameError = "გვარის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს";
      } else if (values.lastName.length >= 1 && values.lastName.length <= 2) {
        errors.lastNameError = "გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოგან";
      } else if (values.lastName.length > 255) {
        errors.lastNameError =
          "გვარის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან";
      } else {
        errors.lastNameError = "";
      }
    }
  
    //////////////////////////Email/////////////////////
    if (values.email.length) {
      if (
        !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          values.email
        ) &&
        values.email.length >= 1
      ) {
        errors.emailError = "თქვენს მიერ შეყვანილი მეილი არასწორია";
      } else if (
        !values.email.endsWith("@redberry.ge") &&
        values.email.length >= 1
      ) {
        errors.emailError =
          "გთხოვთ დარეგისტრირდეთ რედბერის მეილით(youremail@redberry.ge)";
      } else {
        errors.emailError = "";
      }
    }
  
    return errors;
  };
  
  export default validateUser;