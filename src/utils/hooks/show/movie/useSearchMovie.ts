import { searchMovies } from "@/api/show/movie";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useSearchMovie = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (query: string) => searchMovies(query),
    onSuccess: (data) => {
      queryClient.setQueryData(["movies"], (prev: any) => {
        return {
          ...prev,
          pages: [data],
        };
      });
    },
    onSettled: () => {
      queryClient.cancelQueries({ queryKey: ["movies"] });
    },
  });
};

export default useSearchMovie;
