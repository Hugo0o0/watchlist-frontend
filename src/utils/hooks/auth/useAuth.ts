import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

const useAuth = () => {
  const auth = useContext(AuthContext);
  return { ...auth };
};

export default useAuth;
