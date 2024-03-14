import { getRatedSeries } from "@/api/show/series";
import { useQuery } from "@tanstack/react-query";

const useGetRatedSeries = () => {
  return useQuery({
    queryKey: ["ratedSeries"],
    queryFn: getRatedSeries,
  });
};

export default useGetRatedSeries;
