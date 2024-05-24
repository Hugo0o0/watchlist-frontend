import { updateRating } from "@/api/show/movie";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const useUpdateRating = () => {
  const { id } = useParams<{ id: string }>();
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["updateRating"],
    mutationFn: async (params: {
      id: string;
      rating: number;
      ratingId: string;
    }) => {
      return await updateRating(params.id, params.ratingId, params.rating);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["single movie", id],
      });
    },
  });
};

export default useUpdateRating;
