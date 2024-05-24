import { MdError } from "react-icons/md";
import { Button, Heading, Text } from "../UI";
import { Link } from "react-router-dom";
import { FC } from "react";
import { motion } from "framer-motion";
import { ErrorCodes } from "@/@types";
import messagesByErrorCode from "@/utils/constant";

interface ErrorMessageProps {
  code?: ErrorCodes;
  to?: string;
  message?: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ to, code, message }) => {
  let messageByErrorCode: string =
    "An error occurred while processing your request";
  if (code) {
    messageByErrorCode = messagesByErrorCode[code].message;
  }
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
      <Heading size="m">{messageByErrorCode}</Heading>
      <Text>{message}</Text>
      <Link to={to!}>
        <Button>Home</Button>
      </Link>
    </motion.div>
  );
};

ErrorMessage.defaultProps = {
  code: 500,
  to: "/",
};

export default ErrorMessage;
