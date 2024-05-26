import { CardProps } from "@/@types";
import { getMovies } from "@/api/show/movie";
import { movieDataToCardProps } from "@/utils/showToCardProps";
import { useInfiniteQuery } from "@tanstack/react-query";
const useMovies = () => {
  return useInfiniteQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
    initialPageParam: 1,
    refetchOnMount: true,
    getNextPageParam: (data) => {
      if (!data.metadata.hasNextPage) return undefined;
      return data.metadata.nextPage;
    },
  });
};

export default useMovies;
