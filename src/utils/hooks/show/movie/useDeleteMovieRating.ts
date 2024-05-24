import { deleteRating } from "@/api/show/movie";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

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
    throwOnError: true,
    onError: (err: AxiosError<{ message: string }>) => {
      toast.error(err.response?.data.message);
    },
  });
};

export default useDeleteMovieRating;
