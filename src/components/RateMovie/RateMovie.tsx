import useMovie from "@/utils/hooks/show/movie/useMovie";
import { CircularProgress } from "@mui/material";
import { ButtonHTMLAttributes, FC } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";

interface RateProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  rated?: boolean;
}

const RateMovie: FC<RateProps> = ({ rated, ...props }) => {
  const { id } = useParams<{ id: string }>();
  const { data, isFetching } = useMovie(id!);

  const icon =
    data?.rating !== null ? <FaStar size={20} /> : <FaRegStar size={20} />;
  return (
    <button
      className="hover:bg-mirage transition-all rounded-full w-14 h-14 flex items-center justify-center"
      {...props}
    >
      {isFetching && <CircularProgress size={20} />}
      {!isFetching && <>{icon}</>}
    </button>
  );
};

export default RateMovie;
