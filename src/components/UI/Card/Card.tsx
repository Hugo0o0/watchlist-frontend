import classNames from "classnames";
import { FC } from "react";
import CardDetails from "./CardDetails";
import { CardProps } from "@/@types";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Card: FC<CardProps> = ({ size, type, src, name, year, status, to }) => {
  const cardClasses = classNames(
    "rounded-[8px] flex flex-col  relative gap-2",
    {
      "w-[24rem]  md:w-[47rem] relative": size === "large",
      "w-[16.4rem] md:w-[28rem] sm:w-[22rem]": size === "medium",
    }
  );

  const imageClasses = classNames("w-full rounded-[8px]", {
    "h-full": size === "large",
    "h-[11rem] sm:h-[14rem] md:h-[17.4rem]": size === "medium",
  });

  return (
    <Link to={to}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={cardClasses}
      >
        <img
          onError={(e) => {
            e.currentTarget.src =
              "https://via.placeholder.com/300x450?text=No+Image";
          }}
          src={src}
          alt="Image"
          className={imageClasses}
        />

        <CardDetails
          name={name}
          year={year}
          status={status}
          size={size!}
          type={type}
        />
      </motion.div>
    </Link>
  );
};

Card.defaultProps = {
  size: "medium",
};

export default Card;
