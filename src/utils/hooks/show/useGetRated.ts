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
      {
        queryKey: ["ratedMovies"],
        queryFn: getRatedMovies,
        refetchOnMount: true,
      },
      {
        queryKey: ["ratedSeries"],
        queryFn: getRatedSeries,
        refetchOnMount: true,
      },
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
