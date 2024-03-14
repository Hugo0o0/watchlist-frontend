import { getRatedMovies } from "@/api/show/movie";
import { useQuery } from "@tanstack/react-query";

const useGetRatedMovies = () => {
  return useQuery({
    queryKey: ["ratedMovies"],
    queryFn: getRatedMovies,
  });
};

export default useGetRatedMovies;
