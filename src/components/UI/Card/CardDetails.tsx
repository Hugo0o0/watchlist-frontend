import capitialize from "@/utils/capitilaze";
import { Heading, Text } from "..";
import { FC } from "react";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevision } from "react-icons/pi";

interface CardDetailsProps {
  size: "large" | "medium";
  type: "movie" | "series";
  year: string;
  name: string;
  status?: string;
}

const CardDetails: FC<CardDetailsProps> = ({
  size,
  type,
  year,
  name,
  status,
}) => {
  const typeIcon =
    type === "movie" ? <MdLocalMovies size={15} /> : <PiTelevision size={15} />;
  return (
    <div className={`${size === "large" && "absolute bottom-2 left-5"} h-full`}>
      <div className={"flex items-center gap-5"}>
        <Text>{year}</Text>
        <div className="flex items-center gap-1">
          {typeIcon}
          <Text>{capitialize(type)}</Text>
        </div>
        <Text>{status}</Text>
      </div>
      <Heading size="s">{name}</Heading>
    </div>
  );
};

export default CardDetails;
