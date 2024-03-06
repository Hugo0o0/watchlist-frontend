import { SidebarIconProps } from "@/@types";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

const Home = ({ size }: SidebarIconProps) => {
  // @ts-ignore
  const MotionNavLink = motion(NavLink);

  const isMatch = useLocation().pathname === "/";
  const props = isMatch
    ? {
        initial: { scale: 0.5 },
        animate: { scale: 1 },
      }
    : {};
  return (
    <MotionNavLink
      {...props}
      to={"/"}
      className={({ isActive }) =>
        [isActive ? "[&>*]:fill-white" : "[&>*]:fill-kashmir-blue"].join(" ")
      }
    >
      <FaHome size={size} />
    </MotionNavLink>
  );
};

Home.defaultProps = {
  size: 25,
};

export default Home;
