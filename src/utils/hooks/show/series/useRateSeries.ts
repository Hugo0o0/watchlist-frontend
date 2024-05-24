import { rateSeries } from "@/api/show/series";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

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
      return await rateSeries(params.id, params.rating);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["single series", id],
      });
    },
    throwOnError: true,
    onError: (err: AxiosError<{ message: string }>) => {
      toast.error(err.response?.data.message);
    },
  });
};

export default useRateSeries;
