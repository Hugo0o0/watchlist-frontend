import { NavLink, useLocation } from "react-router-dom";
import { MdLocalMovies } from "react-icons/md";
import { motion } from "framer-motion";

const Movie = () => {
  // @ts-ignore
  const MotionNavLink = motion(NavLink);

  const isMatch = useLocation().pathname === "/movies";
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
      to={"/movies"}
    >
      <MdLocalMovies size={30} className="fill-kashmir-blue" />
    </MotionNavLink>
  );
};

export default Movie;
