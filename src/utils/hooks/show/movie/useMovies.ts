import { getMovies } from "@/api/show/movie";
import { useQuery } from "@tanstack/react-query";

const useMovies = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });

  return { movies: data, isLoading };
};

export default useMovies;
