import { FC } from "react";
import { Text } from "../Typography";

interface ChipProps {
  label: string;
}
const Chip: FC<ChipProps> = ({ label }) => {
  return (
    <div className="bg-primary w-fit h-[3rem] px-3 py-2 rounded-full flex items-center justify-center">
      <Text>{label}</Text>
    </div>
  );
};

export default Chip;
