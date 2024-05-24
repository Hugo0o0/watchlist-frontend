import { deleteRating } from "@/api/show/series";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const useDeleteSeriesRating = () => {
  const queryClient = useQueryClient();
  const { id } = useParams<{ id: string }>();
  return useMutation({
    mutationKey: ["deleteSeries"],
    mutationFn: async (params: { id: string; ratingId: string }) => {
      return await deleteRating(params.id, params.ratingId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["single series", id],
      });
    },
  });
};

export default useDeleteSeriesRating;
