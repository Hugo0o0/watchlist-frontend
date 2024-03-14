import { useInView } from "react-intersection-observer";

type OnChangeHanlder = (inView: boolean) => void;

const useInfiniteLoaderInview = (onChange: OnChangeHanlder) => {
  const { ref } = useInView({
    delay: 600,
    initialInView: false,
    onChange,
  });

  return {
    ref,
  };
};

export default useInfiniteLoaderInview;
