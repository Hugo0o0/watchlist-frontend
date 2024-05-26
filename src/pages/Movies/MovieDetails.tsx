import { Heading, Text } from "@/components/UI";
import useMovie from "@/utils/hooks/show/movie/useMovie";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { Chip, CircularProgress } from "@mui/material";
import MovieImageWithDetails from "@/components/MovieImageWithDetails/MovieImageWithDetails";

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useMovie(id!);

  if (isLoading || !data)
    return <CircularProgress className="mx-auto" size={40} />;

  const releaseDate = new Date(data?.releaseDate!).getFullYear();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full p-5 flex gap-5 flex-col md:flex-row md:gap-10"
    >
      <MovieImageWithDetails data={data} />

      <div className="w-full flex flex-col gap-5">
        <div className="flex flex-col md:flex-row md:gap-10 justify-between items-center">
          <div className="flex items-center flex-col md:flex-row justify-center gap-3">
            <Heading size="l">{data?.title}</Heading>
            <Text>({releaseDate})</Text>
          </div>
        </div>
        <Text size="m">{data?.overview}</Text>
        {data.genres.length > 0 && (
          <div className="flex flex-col gap-3">
            <Heading>Genres</Heading>
            <div className="flex flex-wrap items-center gap-5">
              {data?.genres.map((genre) => (
                <Chip
                  sx={{ fontSize: "1.3rem" }}
                  color="error"
                  label={genre.name}
                  key={genre.id}
                />
              ))}
            </div>
          </div>
        )}

        {data.productionCompanies.length > 0 && (
          <div className="flex flex-col gap-3">
            <Heading>Production Companies</Heading>
            <div className="flex flex-wrap items-center gap-5">
              {data?.productionCompanies.map((company) => (
                <Chip
                  sx={{ fontSize: "1.3rem" }}
                  color="error"
                  label={company.name}
                  key={company.id}
                />
              ))}
            </div>
          </div>
        )}

        {data.productionCountries.length > 0 && (
          <div className="flex flex-col gap-3">
            <Heading>Production Countries</Heading>
            <div className="flex flex-wrap items-center gap-5">
              {data?.productionCountries.map((country) => (
                <Chip
                  sx={{ fontSize: "1.3rem" }}
                  color="error"
                  label={country.name}
                  key={country.id}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default MovieDetails;
