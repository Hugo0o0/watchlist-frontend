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
  const toastId = toast.loading("Loading...");
  try {
    const response = await api.post("/auth/login/email", { email, password });
    toast.success("Login successful");
    return response;
  } catch (error: any) {
    toast.error(error.response.data.message);
  } finally {
    toast.dismiss(toastId);
  }
};

export const authApiRegister = async (
  email: string,
  password: string
): Promise<AxiosResponse<AuthApiResponse> | undefined> => {
  const toastId = toast.loading("Loading...");
  try {
    const response = await api.post("/auth/register/email", {
      email,
      password,
    });
    toast.success("Account created successfully");
    return response;
  } catch (error: any) {
    toast.error(error.response.data.message);
  } finally {
    toast.dismiss(toastId);
  }
};
