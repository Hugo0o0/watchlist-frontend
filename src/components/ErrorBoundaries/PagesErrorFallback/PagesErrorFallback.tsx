import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import { useRouteError } from "react-router-dom";

const PagesErrorFallback = () => {
  const error: any = useRouteError();
  console.log(error);

  let code;
  if (error.response) {
    code = error.response.status;
  } else {
    code = 500;
  }
  return <ErrorMessage code={code} message={error.response.data.message} />;
};

export default PagesErrorFallback;
