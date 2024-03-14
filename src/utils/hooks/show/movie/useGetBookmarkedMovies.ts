import { getBookmarkedMovies } from "@/api/show/movie";
import { useQuery } from "@tanstack/react-query";

const useGetBookmarkedMovies = () => {
  return useQuery({
    queryKey: ["bookmarkedMovies"],
    queryFn: getBookmarkedMovies,
  });
};

export default useGetBookmarkedMovies;
