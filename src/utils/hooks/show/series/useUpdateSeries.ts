import { updateSeries } from "@/api/show/series";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const useUpdateSeries = () => {
  const queryClient = useQueryClient();
  const { id } = useParams<{ id: string }>();
  return useMutation({
    mutationKey: ["updateSeries"],
    mutationFn: async (data: {
      seriesId: string;
      ratingId: string;
      rating: number;
    }) => {
      return await updateSeries(data.seriesId, data.ratingId, data.rating);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["single series", id],
      });
    },
  });
};

export default useUpdateSeries;
