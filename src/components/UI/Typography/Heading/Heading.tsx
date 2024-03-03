import React, { FC } from "react";
import classNames from "classnames";

type HeadingSizes = "l" | "m" | "s" | "xs";
interface HeadingComponentProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  size?: HeadingSizes;
}

const Heading: FC<HeadingComponentProps> = ({ size, ...props }) => {
  const tag =
    size === "l" ? "h1" : size === "m" ? "h2" : size === "s" ? "h3" : "h4";
  const className = classNames({
    "text-[3.2rem]": size === "l",
    "text-[2.4rem]": size === "m",
    "text-[2.4rem] font-medium": size === "s",
    "text-[1.8rem] font-medium": size === "xs",
  });
  return React.createElement(tag, { className, ...props }, props.children);
};

Heading.defaultProps = {
  size: "m",
};

export default Heading;
