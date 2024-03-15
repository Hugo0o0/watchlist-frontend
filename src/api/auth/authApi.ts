import { toast } from "react-toastify";
import api from "../api";
import { AxiosResponse } from "axios";

interface AuthApiResponse {
  status: string;
  data: {
    email: string;
    token: string;
  };
}

export const authApiLogin = async (
  email: string,
  password: string
): Promise<AxiosResponse<AuthApiResponse> | undefined> => {
  const toastId = toast.loading("Checking credentials...");
  try {
    const response = await api.post("/auth/login/email", { email, password });
    toast.dismiss(toastId);
    toast.success("Login successful");
    return response;
  } catch (error: any) {
    let message;
    if (error?.response) {
      message = error.response.data.message;
    } else {
      message = error.message;
    }
    toast.error(message);
    toast.dismiss(toastId);
  }
};

export const authApiRegister = async (
  email: string,
  password: string
): Promise<AxiosResponse<AuthApiResponse> | undefined> => {
  const toastId = toast.loading("Creating account...");
  try {
    const response = await api.post("/auth/register/email", {
      email,
      password,
    });
    toast.dismiss(toastId);
    toast.success("Account created successfully");
    return response;
  } catch (error: any) {
    let message;
    if (error?.response) {
      message = error.response.data.message;
    } else {
      message = error.message;
    }
    toast.error(message);
    toast.dismiss(toastId);
  } finally {
    toast.dismiss(toastId);
  }
};
