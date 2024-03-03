import classNames from "classnames";
import { FC } from "react";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: "m" | "s";
}

const Text: FC<TextProps> = ({ size, ...props }) => {
  const className = classNames({
    "text-[1.5rem]": size === "m",
    "text-[1.3rem]": size === "s",
  });
  return <p className={className} {...props}></p>;
};

Text.defaultProps = {
  size: "m",
};

export default Text;
