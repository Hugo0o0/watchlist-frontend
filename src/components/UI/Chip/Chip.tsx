import { FC } from "react";
import { Text } from "../Typography";

interface ChipProps {
  label: string;
}
const Chip: FC<ChipProps> = ({ label }) => {
  return (
    <div className="bg-primary px-3 py-2 rounded-full flex items-center justify-center">
      <Text>{label}</Text>
    </div>
  );
};

export default Chip;
