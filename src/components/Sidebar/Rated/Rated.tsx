import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

const Rated = () => {
  // @ts-ignore
  const MotionNavLink = motion(NavLink);

  const isMatch = useLocation().pathname === "/rated";
  const props = isMatch
    ? {
        initial: { scale: 0.5, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
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
      <FaStar size={30} className="fill-kashmir-blue" />
    </MotionNavLink>
  );
};

export default Rated;
