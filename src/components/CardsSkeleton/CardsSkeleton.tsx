import Skeleton from "react-loading-skeleton";

const CardsSkeleton = () => {
  return (
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
  );
};

export default CardsSkeleton;
