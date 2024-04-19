import { getMovie } from "@/api/show/movie";
import { useQuery } from "@tanstack/react-query";

const useMovie = (id: string) => {
  return useQuery({
    queryKey: ["single movie", id],
    refetchOnWindowFocus: false,
    queryFn: getMovie.bind(null, id),
  });
};

export default useMovie;
