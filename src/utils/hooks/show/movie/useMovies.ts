import { CardProps } from "@/@types";
import { getMovies } from "@/api/show/movie";
import { movieDataToCardProps } from "@/utils/showToCardProps";
import { useInfiniteQuery } from "@tanstack/react-query";
const useMovies = () => {
  const { data, isLoading, fetchNextPage, isFetching, hasNextPage, refetch } =
    useInfiniteQuery({
      queryKey: ["movies"],
      queryFn: getMovies,
      initialPageParam: 1,
      getNextPageParam: (data) => {
        if (!data?.metadata?.hasNextPage) return undefined;
        return data.metadata.nextPage;
      },
    });

  const movies: CardProps[] | undefined = data?.pages?.flatMap((movie) => {
    return movieDataToCardProps(movie.data);
  });
  return {
    movies,
    isLoading,
    fetchNextPage,
    isFetching,
    hasNextPage,
    refetch,
  };
};

export default useMovies;
