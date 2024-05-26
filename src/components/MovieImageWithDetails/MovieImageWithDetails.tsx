import { FC, useState } from "react";
import { FaImdb, FaMoneyBill, FaStar } from "react-icons/fa";
import { Text } from "../UI";
import { CiTimer } from "react-icons/ci";
import RateMovie from "../RateMovie/RateMovie";
import BookmarkMovies from "../BookmarkMovies/BookmarkMovies";
import RateMovieModal from "../RateMovieModal/RateMovieModal";
import { Movie } from "@/@types/show/movie";
import abbreviateNumber from "@/utils/abbreviateNumber";

interface ShowImageWithDetailsProps {
  data?: Movie;
}

const MovieImageWithDetails: FC<ShowImageWithDetailsProps> = ({ data }) => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const openModal = () => setOpen(true);
  if (!data) return null;
  const abbreviatedRevenue = abbreviateNumber(data?.revenue || 0);
  return (
    <div className="relative h-[55rem] md:w-[60rem] overflow-hidden cursor-pointer group">
      <div className="flex flex-wrap items-center justify-between translate-y-full absolute bottom-0 left-0  w-full h-1/4 bg-mirage transition-all group-hover:translate-y-0">
        <div className="flex items-center gap-3">
          <FaStar />
          <Text>{data.averageRating} / 10</Text>
        </div>
        <div className="flex gap-2 items-center">
          <CiTimer />
          <Text>{120} min</Text>
        </div>
        <a href={`https://www.imdb.com/title/${data.imdbId}`} target="_blank">
          <FaImdb size={25} />
        </a>

        {data.revenue > 100_000 && (
          <div className="flex gap-2 items-center">
            <FaMoneyBill />
            <Text>{abbreviatedRevenue} </Text>
          </div>
        )}
        <RateMovie rated={Boolean(data.rating)} onClick={openModal} />
        <BookmarkMovies />
        <RateMovieModal open={open} close={close} />
      </div>
      <img
        src={data.poster.large}
        alt={"Show image"}
        className="w-full h-full object-center"
        onError={(e) => {
          e.currentTarget.src = "https://placehold.co/433X650";
        }}
        onScroll={(e) => {
          console.log(e);
        }}
      />
    </div>
  );
};

export default MovieImageWithDetails;
