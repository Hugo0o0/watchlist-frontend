import { NavLink } from "react-router-dom";
import { MdLocalMovies } from "react-icons/md";
import { motion } from "framer-motion";
import { SidebarIconProps } from "@/@types";

const Movie = ({ size }: SidebarIconProps) => {
  // @ts-ignore
  const MotionNavLink = motion(NavLink);

  return (
    <MotionNavLink
      whileHover={{ scale: 1.1 }}
      className={({ isActive }) =>
        [isActive ? "[&>*]:fill-white" : "[&>*]:fill-kashmir-blue"].join(" ")
      }
      to={"/movies"}
    >
      <MdLocalMovies size={size} className="fill-kashmir-blue" />
    </MotionNavLink>
  );
};

Movie.defaultProps = {
  size: 25,
};

export default Movie;
