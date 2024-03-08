import { getMovies } from "@/api/show/movie";
import { useInfiniteQuery } from "@tanstack/react-query";

const useMovies = (page: number = 1) => {
  const { data, isLoading, fetchNextPage, isFetching } = useInfiniteQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
    initialPageParam: page,
    refetchOnWindowFocus: false,
    getNextPageParam: (lastPage: any, allPages: any) => {
      return page + 1;
    },
  });

  const movies = data?.pages?.flatMap((movie) => {
    return movie.data.map((item: any) => ({
      key: item.id,
      name: item.title,
      src: item.poster.small,
      size: "medium",
      year: new Date(item.releaseDate).getFullYear().toString(),
      type: "movie",
      status: item.status,
    }));
  });
  return {
    movies,
    isLoading,
    fetchNextPage,
    isFetching,
  };
};

export default useMovies;
