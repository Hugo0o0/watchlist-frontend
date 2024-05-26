import { getSeries } from "@/api/show/series";
import { useInfiniteQuery } from "@tanstack/react-query";

const useSeries = () => {
  return useInfiniteQuery({
    queryKey: ["series"],
    queryFn: getSeries,
    initialPageParam: 1,
    refetchOnMount: true,
    getNextPageParam: (data) => {
      if (!data?.metadata?.hasNextPage) return undefined;
      return data.metadata.nextPage;
    },
  });
};

export default useSeries;
