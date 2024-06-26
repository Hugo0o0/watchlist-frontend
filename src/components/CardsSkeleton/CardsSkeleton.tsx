import classNames from "classnames";
import { FC } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

interface CardsSkeletonProps {
  size?: "large" | "medium";
  count: number;
}

const CardsSkeleton: FC<CardsSkeletonProps> = ({ size, count }) => {
  const cardSkeletonClasses = classNames(
    "rounded-[8px] flex flex-col  relative gap-3",
    {
      "w-[24rem]  md:w-[47rem] relative": size === "large",
      "w-[16.4rem] md:w-[28rem] sm:w-[22rem]": size === "medium",
    }
  );
  const imageSkeletonClasses = classNames("w-full rounded-[8px]", {
    "h-full": size === "large",
    "h-[11rem] sm:h-[14rem] md:h-[17.4rem]": size === "medium",
  });
  return (
    <SkeletonTheme
      duration={1}
      baseColor="#161D2F"
      highlightColor="#1d273e"
      direction="ltr"
    >
      <div className="grid gap-5 grid-cols-2 sm:grid-cols-auto-responsive justify-items-center md:justify-items-start transition-all w-full">
        {Array.from({ length: count }).map(() => (
          <div className={cardSkeletonClasses} key={Math.random() * 10}>
            <Skeleton className={imageSkeletonClasses} />
            <Skeleton
              inline
              containerClassName="grid grid-cols-3 gap-5"
              height={"1.5rem"}
              count={3}
            />
            <Skeleton height={"2rem"} />
          </div>
        ))}
      </div>
    </SkeletonTheme>
  );
};

CardsSkeleton.defaultProps = {
  size: "medium",
};

export default CardsSkeleton;
