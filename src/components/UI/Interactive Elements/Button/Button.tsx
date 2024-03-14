import classNames from "classnames";
import { FC, forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  loading?: boolean;
  btnRef?: React.LegacyRef<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = forwardRef(({ loading, btnRef, ...props }) => {
  const className = classNames(
    "bg-primary flex items-center justify-center relative text-body-m hover:bg-white hover:text-mirage rounded-[6px] w-[27.9rem]  md:w-[33.6rem] h-[4.8rem] focus:outline-none transition-all duration-300",
    {
      "cursor-not-allowed": loading,
    }
  );

  return (
    <button ref={btnRef} disabled={loading} className={className} {...props}>
      {props.children}
    </button>
  );
});

Button.defaultProps = {
  variant: "primary",
};

export default Button;
