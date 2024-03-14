import { CardProps } from "@/@types";
import { Card, Heading } from "../UI";
import { FC } from "react";
import Skeleton from "react-loading-skeleton";

interface TitledCardsProps {
  title: string;
  items?: CardProps[];
}

const TitledCards: FC<TitledCardsProps> = ({ title, items }) => {
  return (
    <div className="flex flex-col gap-5">
      <Heading size="l">{title}</Heading>
      <div className="grid transition-all justify-items-center md:justify-items-start grid-cols-auto-responsive gap-5">
        {items && items.map((item) => <Card {...item} />)}
      </div>

      {!items && (
        <Skeleton
          containerClassName="grid grid-cols-auto-responsive gap-5 w-full"
          duration={2}
          count={50}
          height={250}
          baseColor="#161D2F"
          highlightColor="#10141E"
          inline
          direction="ltr"
        />
      )}
    </div>
  );
};

export default TitledCards;
