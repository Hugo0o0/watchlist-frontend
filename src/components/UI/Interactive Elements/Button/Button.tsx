import classNames from "classnames";
import { FC } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
}

const Button: FC<ButtonProps> = ({ variant, ...props }) => {
  const className = classNames(
    "bg-primary text-body-m hover:bg-white hover:text-mirage rounded-[6px] w-[27.9rem]  md:w-[33.6rem] h-[4.8rem] focus:outline-none transition-all duration-300"
  );
  return (
    <button className={className} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
