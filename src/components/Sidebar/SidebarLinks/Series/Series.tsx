import { NavLink } from "react-router-dom";
import { PiTelevision } from "react-icons/pi";
import { motion } from "framer-motion";
import { SidebarIconProps } from "@/@types";

const Series = ({ size }: SidebarIconProps) => {
  // @ts-ignore
  const MotionNavLink = motion(NavLink);

  return (
    <MotionNavLink
      whileHover={{ scale: 1.1 }}
      className={({ isActive }) =>
        [isActive ? "[&>*]:fill-white" : "[&>*]:fill-kashmir-blue"].join(" ")
      }
      to={"/series"}
    >
      <PiTelevision size={size} className="fill-kashmir-blue" />
    </MotionNavLink>
  );
};

Series.defaultProps = {
  size: 25,
};

export default Series;
