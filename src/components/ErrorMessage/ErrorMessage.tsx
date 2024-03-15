import { MdError } from "react-icons/md";
import { Button, Heading, Text } from "../UI";
import { Link } from "react-router-dom";
import { FC } from "react";
import capitialize from "@/utils/capitilaze";
import { motion } from "framer-motion";
interface ErrorMessageProps {
  message?: string;
  to?: string;
  subMessage?: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ message, to, subMessage }) => {
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
      <Heading size="m">{message}</Heading>
      <Text>{subMessage}</Text>
      <Link to={to!}>
        <Button> {redirectPageName}</Button>
      </Link>
    </motion.div>
  );
};

ErrorMessage.defaultProps = {
  to: "/",
  message: "The page you are looking for does not exist",
  subMessage: "Head back to home page",
};

export default ErrorMessage;
