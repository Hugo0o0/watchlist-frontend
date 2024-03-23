import { searchSeries } from "@/api/show/series";
import { useMutation, useQueryClient } from "@tanstack/react-query";

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
  });
};

export default useSearchSeries;
