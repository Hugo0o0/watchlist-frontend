import { FC } from "react";
import { Button, Heading } from "../UI";
import { Link } from "react-router-dom";

interface NoItemsProps {
  itemIcon: React.ReactNode;
  message: string;
}

const NoItems: FC<NoItemsProps> = ({ itemIcon, message }) => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center h-full">
      {itemIcon}
      <Heading>{message}</Heading>

      <Link to={"/"}>
        <Button>Go back to home</Button>
      </Link>
    </div>
  );
};

export default NoItems;
