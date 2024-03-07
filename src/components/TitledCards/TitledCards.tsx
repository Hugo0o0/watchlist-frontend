import { CardProps } from "@/@types";
import { Card, Heading } from "../UI";
import { FC } from "react";

interface TitledCardsProps {
  title: string;
  items: CardProps[];
}

const TitledCards: FC<TitledCardsProps> = ({ title, items }) => {
  return (
    <div className="flex flex-col gap-5">
      <Heading size="l">{title}</Heading>
      <div className="grid grid-cols-4 gap-5">
        {items.map((item, i) => (
          <Card {...item} key={Math.random() * i} />
        ))}
      </div>
    </div>
  );
};

export default TitledCards;
