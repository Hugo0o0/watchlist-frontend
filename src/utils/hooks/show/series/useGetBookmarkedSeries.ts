import { getBookmarkedSeries } from "@/api/show/series";
import { useQuery } from "@tanstack/react-query";

const useGetBookmarkedSeries = () => {
  return useQuery({
    queryKey: ["bookmarkedSeries"],
    queryFn: getBookmarkedSeries,
  });
};

export default useGetBookmarkedSeries;
