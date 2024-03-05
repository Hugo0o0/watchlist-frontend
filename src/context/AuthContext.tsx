import { authApiLogin, authApiRegister } from "@/api/auth/authApi";
import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

interface AuthContext {
  token: string | null;
  setToken: (token: string) => void;
  logout: () => void;
  login: (email: string, password: string) => void;
  register: (email: string, password: string) => void;
}
const AuthContext = createContext<AuthContext>({
  token: "",
  setToken: () => {},
  logout: () => {},
  login: () => {},
  register: () => {},
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  useEffect(() => {
    if (!token) return;
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    if (decodedToken.exp && decodedToken.exp < currentTime) {
      setToken(null);
      localStorage.removeItem("token");
      toast.error("Your session has expired, please login again");
    }
  }, []);

  const login = async (email: string, password: string) => {
    const data = await authApiLogin(email, password);
    if (data?.data.status !== "success") return;
    handleSetToken(data.data.data.token);
  };

  const register = async (email: string, password: string) => {
    const response = await authApiRegister(email, password);
    if (response?.data.status !== "success") return;
    handleSetToken(response.data.data.token);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const handleSetToken = (token: string) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  return (
    <AuthContext.Provider
      value={{ token, logout, register, setToken: handleSetToken, login }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
