import { MessageByErrorCode } from "@/@types";

const messagesByErrorCode: MessageByErrorCode = {
  400: {
    message: "An error occurred while processing your request",
  },
  404: {
    message: "The page you are looking for does not exist",
  },
  401: {
    message: "You are not authorized to view this page",
  },
  500: {
    message: "An error occurred while processing your request",
  },
};

export default messagesByErrorCode;
