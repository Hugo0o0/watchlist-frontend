import { getSingleSeries } from "@/api/show/series";
import { useQuery } from "@tanstack/react-query";

const useGetSeries = (id?: string) => {
  return useQuery({
    queryKey: ["series"],
    queryFn: getSingleSeries.bind(null, id),
  });
};

export default useGetSeries;
