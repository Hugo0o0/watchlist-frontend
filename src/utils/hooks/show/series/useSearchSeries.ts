import { searchSeries } from "@/api/show/series";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

const useSearchSeries = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["search series"],
    mutationFn: (query: string) => searchSeries(query),
    onSuccess: (data) => {
      queryClient.setQueryData(["series"], (prev: any) => {
        return {
          ...prev,
          pages: [data],
        };
      });
    },
    onSettled: () => {
      queryClient.cancelQueries({ queryKey: ["series"] });
    },
    throwOnError: false,
    onError: (error: AxiosError<{ message: string }>) => {
      toast.error(error.response?.data.message || "An error occurred");
    },
  });
};

export default useSearchSeries;
