import { rateMovie } from "@/api/show/movie";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

interface MutationParams {
  id: string;
  rating: number;
}

const useRateMovie = () => {
  const queryClient = useQueryClient();
  const { id } = useParams<{ id: string }>();
  return useMutation({
    mutationKey: ["rateMovie"],
    mutationFn: async (params: MutationParams) => {
      return await rateMovie(params.id, params.rating);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["single movie", id],
      });
    },
    throwOnError: true,
    onError: (err: AxiosError<{ message: string }>) => {
      toast.error(err.response?.data.message);
    },
  });
};

export default useRateMovie;
