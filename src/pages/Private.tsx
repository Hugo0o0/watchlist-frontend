import useAuth from "@/utils/hooks/auth/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const Private = () => {
  const { token } = useAuth();
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default Private;
