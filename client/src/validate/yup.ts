import * as Yup from "yup";

export const userSchemaValidation = Yup.object().shape({
    firstName: Yup.string()
      .required("First Name is required")
      .min(2, "First Name must be at least 2 characters")
      .max(50, "First Name must be at most 50 characters"),
    lastName: Yup.string()
      .required("Last Name is required")
      .min(2, "Last Name must be at least 2 characters")
      .max(50, "Last Name must be at most 50 characters"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
  });