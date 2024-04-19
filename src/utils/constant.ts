import { MessageByErrorCode } from "@/@types";

const messagesByErrorCode: MessageByErrorCode = {
  404: {
    message: "The page you are looking for does not exist",
    subMessage: "Head back to home page",
  },
  401: {
    message: "You are not authorized to view this page",
    subMessage: "Head back to home page",
  },
  500: {
    message: "An error occurred while processing your request",
    subMessage: "Head back to home page",
  },
};

export default messagesByErrorCode;
