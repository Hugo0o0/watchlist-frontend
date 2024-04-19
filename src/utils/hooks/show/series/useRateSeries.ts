import { rateSeries } from "@/api/show/series";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

interface MutationParams {
  id: string;
  rating: number;
  ratingId?: string;
}

const useRateSeries = () => {
  const queryClient = useQueryClient();
  const { id } = useParams<{ id: string }>();
  return useMutation({
    mutationKey: ["rateSeries"],
    mutationFn: async (params: MutationParams) => {
      return await rateSeries(params.id, params.rating, params.ratingId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["single series", id],
      });
    },
  });
};

export default useRateSeries;
