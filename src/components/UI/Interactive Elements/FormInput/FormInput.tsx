import classNames from "classnames";
import { FC } from "react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  error?: string;
}

const FormInput: FC<FormInputProps> = ({ ...props }) => {
  const className = classNames(
    "w-full caret-primary bg-transparent text-body-m focus:border-b-[1px] focus:outline-none",
    {
      "py-2 focus:border-b-kashmir-blue text-heading-m":
        props.type === "search",
    },
    props.className
  );
  return (
    <div className="flex items-center gap-8">
      {props.icon && props.icon}
      <div className="flex items-center w-full relative">
        <input type="text" className={className} {...props} />

        {props.error && (
          <p className="text-body-s text-red-500 mt-2  absolute right-5">
            {props.error}
          </p>
        )}
      </div>
    </div>
  );
};

export default FormInput;
