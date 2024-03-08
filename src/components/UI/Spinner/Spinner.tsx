import { ColorRing } from "react-loader-spinner";

const Spinner = ({ visible }: { visible?: boolean }) => {
  const spinnerColors = ["#FC4747", "#10141E", "#5A698F", "#161D2F", "#FFFFFF"];
  return (
    <ColorRing
      wrapperClass="mx-auto"
      visible={visible}
      // @ts-ignore
      colors={spinnerColors}
      width={60}
    />
  );
};

export default Spinner;
