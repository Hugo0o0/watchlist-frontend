import { SidebarIconProps } from "@/@types";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

const Rated = ({ size }: SidebarIconProps) => {
  // @ts-ignore
  const MotionNavLink = motion(NavLink);

  const isMatch = useLocation().pathname === "/rated";
  const props = isMatch
    ? {
        initial: { scale: 0.5 },
        animate: { scale: 1 },
      }
    : {};
  return (
    <MotionNavLink
      {...props}
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
