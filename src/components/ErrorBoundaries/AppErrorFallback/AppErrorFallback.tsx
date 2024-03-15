import { Button } from "@/components/UI";
import { FallbackProps } from "react-error-boundary";
import { MdError } from "react-icons/md";

const AppErrorFallback = (props: FallbackProps) => {
  if (props.error.name === "InvalidTokenError") {
    localStorage.removeItem("token");
  }

  return (
    <div className="flex flex-col mt-10 gap-5 justify-center items-center">
      <MdError size={50} />
      <p>{props.error.message}</p>
      <Button onClick={props.resetErrorBoundary}>Try again</Button>
    </div>
  );
};

export default AppErrorFallback;
