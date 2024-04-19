import { bookmarkSeries, removebookmarkSeries } from "@/api/show/series";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useBookmarkSeries = (id: string, type: "add" | "remove") => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["bookmarkSeries", id],
    mutationFn:
      type === "add"
        ? bookmarkSeries.bind(null, id)
        : removebookmarkSeries.bind(null, id),
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["single series", id],
      });
    },
  });
};

export default useBookmarkSeries;
