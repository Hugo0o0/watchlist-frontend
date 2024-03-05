import { object, ref, string } from "yup";

export const registerSchema = object({
  email: string().email("Invalid Email").required("Email is required"),
  password: string()
    .required("Password is required")
    .min(6, "Password is too short"),
  confirmPassword: string()
    .required("Confirm password is required")
    .oneOf([ref("password")], "Passwords must match"),
});

export const loginSchema = object({
  email: string().email("Invalid Email").required("Email is required"),
  password: string().required("Password is required"),
});
