import { CardProps } from "@/@types";
import { getMovies } from "@/api/show/movie";
import { useInfiniteQuery } from "@tanstack/react-query";

const useMovies = () => {
  const { data, isLoading, fetchNextPage, isFetching, hasNextPage, refetch } =
    useInfiniteQuery({
      queryKey: ["movies"],
      queryFn: getMovies,
      initialPageParam: 1,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      getNextPageParam: (data) => {
        if (!data?.metadata?.hasNextPage) return undefined;
        return data.metadata.nextPage;
      },
    });

  const movies: CardProps[] | undefined = data?.pages?.flatMap((movie) => {
    return movie.data.map((item) => ({
      key: item.id,
      name: item.title,
      src: item.poster?.small ?? "",
      size: "medium",
      year: new Date(item.releaseDate).getFullYear().toString(),
      type: "movie",
      status: item.status,
      to: `/movies/${item.id}`,
    }));
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
