import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import { useRouteError } from "react-router-dom";

const PagesErrorFallback = () => {
  const error: any = useRouteError();
  let code;
  if (error.response) {
    code = error.response.status;
  } else {
    code = 500;
  }
  return <ErrorMessage code={code} />;
};

export default PagesErrorFallback;
