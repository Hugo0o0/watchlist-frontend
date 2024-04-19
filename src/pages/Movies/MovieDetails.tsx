import BookmarkMovies from "@/components/BookmarkMovies/BookmarkMovies";
import RateMovie from "@/components/RateMovie/RateMovie";
import RateMovieModal from "@/components/RateMovieModal/RateMovieModal";
import { Chip, Heading, Text } from "@/components/UI";
import useMovie from "@/utils/hooks/show/movie/useMovie";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaImdb, FaMoneyBill, FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { CiTimer } from "react-icons/ci";
import abbreviateNumber from "@/utils/abbreviateNumber";

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useMovie(id!);
  const [openModal, setOpenModal] = useState(false);

  if (isLoading || !data) return <div>Loading...</div>;

  const releaseDate = new Date(data?.releaseDate!).getFullYear();

  const handleModal = () => {
    setOpenModal((prev) => !prev);
  };

  const abbreviatedRevenue = abbreviateNumber(data.revenue);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full p-5 flex gap-5"
    >
      <img src={data?.poster.large} alt={data?.title} className="h-[65rem]" />

      <div className="w-full flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-center gap-3">
            <Heading size="l">{data?.title}</Heading>
            <Text>({releaseDate})</Text>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <FaStar />
              <Text>{data?.averageRating} / 10</Text>
            </div>

            <RateMovieModal open={openModal} close={handleModal} />
            <div className="flex gap-2 items-center">
              <CiTimer />
              <Text>{data?.runtime} min</Text>
            </div>
            <a
              href={`https://www.imdb.com/title/${data.imdbId}`}
              target="_blank"
            >
              <FaImdb size={25} />
            </a>

            {data.revenue > 100_000 && (
              <div className="flex gap-2 items-center">
                <FaMoneyBill />
                <Text>{abbreviatedRevenue} </Text>
              </div>
            )}

            <BookmarkMovies bookmarked={data?.bookmarked} />
            <RateMovie rated={Boolean(data?.rating)} onClick={handleModal} />
          </div>
        </div>
        <Text size="m">{data?.overview}</Text>
        {data.genres.length > 0 && (
          <div className="flex flex-col gap-3">
            <Heading>Genres</Heading>
            <div className="flex items-center gap-5">
              {data?.genres.map((genre) => (
                <Chip label={genre.name} key={genre.id} />
              ))}
            </div>
          </div>
        )}

        {data.productionCompanies.length > 0 && (
          <div className="flex flex-col gap-3">
            <Heading>Production Companies</Heading>
            <div className="flex items-center gap-5">
              {data?.productionCompanies.map((company) => (
                <Chip label={company.name} key={company.id} />
              ))}
            </div>
          </div>
        )}

        {data.productionCountries.length > 0 && (
          <div className="flex flex-col gap-3">
            <Heading>Production Countries</Heading>
            <div className="flex items-center gap-5">
              {data?.productionCountries.map((country) => (
                <Chip label={country.name} key={country.id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default MovieDetails;
