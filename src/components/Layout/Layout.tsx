import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="flex m-[3.2rem] gap-[3.2rem]">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
