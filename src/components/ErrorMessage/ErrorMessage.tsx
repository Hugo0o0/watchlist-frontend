import { MdError } from "react-icons/md";
import { Button, Heading, Text } from "../UI";
import { Link } from "react-router-dom";
import { FC } from "react";
import capitialize from "@/utils/capitilaze";
import { motion } from "framer-motion";
import { ErrorCodes } from "@/@types";
import messagesByErrorCode from "@/utils/constant";

interface ErrorMessageProps {
  code?: ErrorCodes;
  to?: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ to, code }) => {
  const redirectPageName = to === "/" ? "Home" : capitialize(to!);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      className="flex w-full flex-col text-center justify-center items-center gap-7"
    >
      <MdError size={50} className="animate-bounce" />
      <Heading size="m">{messagesByErrorCode[code!].message}</Heading>
      <Text>{messagesByErrorCode[code!].subMessage}</Text>
      <Link to={to!}>
        <Button> {redirectPageName}</Button>
      </Link>
    </motion.div>
  );
};

ErrorMessage.defaultProps = {
  code: 500,
  to: "/",
};

export default ErrorMessage;
