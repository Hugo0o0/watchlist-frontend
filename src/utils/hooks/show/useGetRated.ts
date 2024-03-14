import { getRatedMovies } from "@/api/show/movie";
import { getRatedSeries } from "@/api/show/series";
import {
  movieDataToCardProps,
  seriesDataToCardProps,
} from "@/utils/showToCardProps";
import { useQueries } from "@tanstack/react-query";

const useGetRated = () => {
  const [movies, series] = useQueries({
    queries: [
      { queryKey: ["ratedMovies"], queryFn: getRatedMovies },
      { queryKey: ["ratedSeries"], queryFn: getRatedSeries },
    ],
  });

  const isLoading = movies.isLoading || series.isLoading;

  return {
    movies: movieDataToCardProps(movies.data?.data),
    series: seriesDataToCardProps(series.data?.data),
    isLoading,
  };
};

export default useGetRated;
