import { bookmarkMovie, removeBookmarkMovie } from "@/api/show/movie";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useBookmarkMovies = (id: string, type: "add" | "remove") => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["bookmarkMovies", id],
    mutationFn: async (id: string) => {
      if (type === "add") {
        return await bookmarkMovie(id);
      }
      return await removeBookmarkMovie(id);
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["single movie", id],
      });
    },
  });
};

export default useBookmarkMovies;
