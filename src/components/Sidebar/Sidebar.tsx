import Logo from "@/components/Logo/Logo";
import classNames from "classnames";
import SidebarLinks from "./SidebarLinks/SidebarLinks";

const Sidebar = () => {
  const asideClassNames = classNames(
    "sticky py-[3.2rem] bg-mirage z-[50] flex items-center justify-between", // General styles
    "md:w-[9.6rem] md:top-[3.2rem] md:h-screen md:flex-col md:px-0", // Desktop styles
    "sm:px-[3.2rem] sm:rounded-[20px]", // tablet styles
    "rounded-0 px-[1rem]" // Mobile styles
  );
  return (
    <aside className={asideClassNames}>
      <div className="flex  md:flex-col flex-1  md:gap-28">
        <Logo />
        <SidebarLinks />
      </div>
    </aside>
  );
};

export default Sidebar;
