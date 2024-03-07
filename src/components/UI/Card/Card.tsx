import classNames from "classnames";
import { FC } from "react";

import CardDetails from "./CardDetails";
import { CardProps } from "@/@types";
import Bookmark from "./Bookmark";

const Card: FC<CardProps> = ({ size, type, src, name, year, status }) => {
  const cardClasses = classNames("rounded-[8px] flex flex-col relative gap-2", {
    "w-[24rem]  md:w-[47rem] relative": size === "large",
    "w-[16.4rem] md:w-[28rem] sm:w-[22rem]": size === "medium",
  });

  const imageClasses = classNames("w-full", {
    "h-full": size === "large",
    "h-[11rem] sm:h-[14rem] md:h-[17.4rem]": size === "medium",
  });

  return (
    <div className={cardClasses}>
      <Bookmark isBookmarked />
      <img src={src} alt="Image" className={imageClasses} />
      <CardDetails
        name={name}
        year={year}
        status={status}
        size={size!}
        type={type}
      />
    </div>
  );
};

Card.defaultProps = {
  size: "medium",
};

export default Card;
