import { SidebarIconProps } from "@/@types";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Rated = ({ size }: SidebarIconProps) => {
  // @ts-ignore
  const MotionNavLink = motion(NavLink);

  return (
    <MotionNavLink
      whileHover={{ scale: 1.1 }}
      className={({ isActive }) =>
        [isActive ? "[&>*]:fill-white" : "[&>*]:fill-kashmir-blue"].join(" ")
      }
      to={"/rated"}
    >
      <FaStar size={size} className="fill-kashmir-blue" />
    </MotionNavLink>
  );
};

Rated.defaultProps = {
  size: 25,
};

export default Rated;
