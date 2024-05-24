import { searchMovies } from "@/api/show/movie";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

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
    onError: (error: AxiosError<{ message: string }>) => {
      toast.error(error.response?.data.message || "An error occurred");
    },
    throwOnError: false,
  });
};

export default useSearchMovie;
