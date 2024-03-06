import { NavLink, useLocation } from "react-router-dom";
import { PiTelevision } from "react-icons/pi";
import { motion } from "framer-motion";

const Series = () => {
  // @ts-ignore
  const MotionNavLink = motion(NavLink);

  const isMatch = useLocation().pathname === "/series";
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
      to={"/series"}
    >
      <PiTelevision size={30} className="fill-kashmir-blue" />
    </MotionNavLink>
  );
};

export default Series;
