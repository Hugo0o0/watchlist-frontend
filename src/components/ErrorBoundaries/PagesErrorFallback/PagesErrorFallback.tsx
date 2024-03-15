import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import { useLocation, useRouteError } from "react-router-dom";

const PagesErrorFallback = () => {
  const error: any = useRouteError();
  const location = useLocation();
  const currentPath =
    location.pathname === "/" ? "home" : location.pathname.slice(1);
  const errorSubMessage = `Can not load ${currentPath} page. Please try again later.`;

  let errorMessage;
  if (error.response) {
    errorMessage = `${error.response.data.message} (${error.response.status})`;
  } else {
    errorMessage = error.message;
  }

  return (
    <ErrorMessage message={errorMessage} subMessage={errorSubMessage} to="/" />
  );
};

export default PagesErrorFallback;
