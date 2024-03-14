import { CardProps } from "@/@types";
import { getSeries } from "@/api/show/series";
import { seriesDataToCardProps } from "@/utils/showToCardProps";
import { useInfiniteQuery } from "@tanstack/react-query";

const useSeries = () => {
  const { data, isLoading, fetchNextPage, isFetching, hasNextPage, refetch } =
    useInfiniteQuery({
      queryKey: ["series"],
      queryFn: getSeries,
      initialPageParam: 1,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      getNextPageParam: (data) => {
        if (!data?.metadata?.hasNextPage) return undefined;
        return data.metadata.nextPage;
      },
    });

  const series: CardProps[] | undefined = data?.pages?.flatMap((tv) => {
    return seriesDataToCardProps(tv.data);
  });

  return {
    series,
    isLoading,
    fetchNextPage,
    isFetching,
    hasNextPage,
    refetch,
  };
};

export default useSeries;
