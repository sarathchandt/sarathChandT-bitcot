// function for validate the form data while add new contact
export const validateForm = (data: any) => {
  if (data.name < 4) {
    return {
      isValidate: false,
      error: "Name should be atleast 4 characters",
    };
  }
  if (!data.email) {
    return {
      isValidate: false,
      error: "Email is required",
    };
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    return {
      isValidate: false,
      error: "Email is invalid",
    };
  }
  if (!data.phone) {
    return {
      isValidate: false,
      error: "Phone is required",
    };
  } else if (!/^\d{10}$/.test(data.phone)) {
    return {
      isValidate: false,
      error: "Phone is invalid",
    };
  }
  if (!data.address || data.address.length < 10) {
    return {
      isValidate: false,
      error: "Address should be atleast 10 characters",
    };
  }
  return {
    isValidate: true,
    error: "",
  };
};


