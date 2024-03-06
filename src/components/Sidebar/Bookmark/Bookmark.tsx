import { motion } from "framer-motion";
import { FaBookmark } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

const Bookmark = () => {
  // @ts-ignore
  const MotionNavLink = motion(NavLink);

  const isMatch = useLocation().pathname === "/bookmarked";
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
      to={"/bookmarked"}
    >
      <FaBookmark size={30} className="fill-kashmir-blue" />
    </MotionNavLink>
  );
};

export default Bookmark;
