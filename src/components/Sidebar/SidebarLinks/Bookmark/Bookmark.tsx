import { SidebarIconProps } from "@/@types";
import { motion } from "framer-motion";
import { FaBookmark } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Bookmark = ({ size }: SidebarIconProps) => {
  // @ts-ignore
  const MotionNavLink = motion(NavLink);

  return (
    <MotionNavLink
      whileHover={{ scale: 1.1 }}
      className={({ isActive }) =>
        [isActive ? "[&>*]:fill-white" : "[&>*]:fill-kashmir-blue"].join(" ")
      }
      to={"/bookmark"}
    >
      <FaBookmark size={size} className="fill-kashmir-blue" />
    </MotionNavLink>
  );
};

Bookmark.defaultProps = {
  size: 25,
};

export default Bookmark;
