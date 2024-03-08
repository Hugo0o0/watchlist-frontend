import { useInView } from "react-intersection-observer";

interface UseInfiniteLoaderInview {
  onChange: (inView: boolean) => void;
}
type OnChangeHanlder = (inView: boolean) => void;

const useInfiniteLoaderInview = (onChange: OnChangeHanlder) => {
  const { ref } = useInView({
    delay: 300,
    initialInView: false,
    onChange,
  });

  return {
    ref,
  };
};

export default useInfiniteLoaderInview;
