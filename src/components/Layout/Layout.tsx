import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="flex sm:m-[3.2rem] gap-[3.2rem] flex-col md:flex-row">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
