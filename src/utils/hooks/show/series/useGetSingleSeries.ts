import { getSingleSeries } from "@/api/show/series";
import { useQuery } from "@tanstack/react-query";

const useGetSingleSeries = (id?: string) => {
  return useQuery({
    queryKey: ["single series", id],
    refetchOnWindowFocus: false,
    queryFn: getSingleSeries.bind(null, id),
  });
};

export default useGetSingleSeries;
