import { deleteRating } from "@/api/show/movie";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const useDeleteMovieRating = () => {
  const { id } = useParams<{ id: string }>();
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["deleteMovie"],
    mutationFn: async (params: { id: string; ratingId: string }) => {
      return await deleteRating(params.id, params.ratingId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["single movie", id],
      });
    },
  });
};

export default useDeleteMovieRating;
