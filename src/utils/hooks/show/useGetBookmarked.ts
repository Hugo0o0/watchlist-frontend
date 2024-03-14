import { getBookmarkedMovies } from "@/api/show/movie";
import { getBookmarkedSeries } from "@/api/show/series";
import {
  movieDataToCardProps,
  seriesDataToCardProps,
} from "@/utils/showToCardProps";
import { useQueries } from "@tanstack/react-query";

const useGetBookmarked = () => {
  const [movies, series] = useQueries({
    queries: [
      { queryKey: ["bookmarkedMovies"], queryFn: getBookmarkedMovies },
      { queryKey: ["bookmarkedSeries"], queryFn: getBookmarkedSeries },
    ],
  });

  const isLoading = movies.isLoading || series.isLoading;

  return {
    movies: movieDataToCardProps(movies.data?.data),
    series: seriesDataToCardProps(series.data?.data),
    isLoading,
  };
};

export default useGetBookmarked;
