import { CardProps } from "@/@types";
import { Card, Heading } from "../UI";
import { FC } from "react";
import CardsSkeleton from "../CardsSkeleton/CardsSkeleton";

interface TitledCardsProps {
  title: string;
  items?: CardProps[];
  loading?: boolean;
}

const TitledCards: FC<TitledCardsProps> = ({ title, items, loading }) => {
  if (loading) return <CardsSkeleton />;
  return (
    <div className="flex flex-col gap-5">
      {items && items?.length > 0 && <Heading>{title}</Heading>}
      <div className="grid transition-all justify-items-center md:justify-items-start grid-cols-auto-responsive gap-5">
        {items && items.map((item) => <Card {...item} />)}
      </div>
    </div>
  );
};

export default TitledCards;
