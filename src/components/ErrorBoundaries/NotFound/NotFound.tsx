import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";

const NotFound = () => {
  return (
    <div className="w-full bg-not-found md:bg-none bg-center bg-cover  h-screen grid md:grid-cols-2">
      <div className="bg-not-found hidden md:block bg-center bg-cover" />
      <ErrorMessage />
    </div>
  );
};

export default NotFound;
