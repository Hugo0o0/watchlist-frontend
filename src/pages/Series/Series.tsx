import TitledCards from "@/components/TitledCards/TitledCards";
import { FormInput, Spinner } from "@/components/UI";
import useInfiniteLoaderInview from "@/utils/hooks/useInfiniteLoaderInview";
import { FaSearch } from "react-icons/fa";
import debounce from "lodash.debounce";
import useSeries from "@/utils/hooks/show/series/useSeries";
import useSearchSeries from "@/utils/hooks/show/series/useSearchSeries";

const Series = () => {
  const { series, fetchNextPage, isFetching, isLoading, hasNextPage, refetch } =
    useSeries();
  const { mutate } = useSearchSeries();
  const handleLoadMore = (inView: boolean) => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  };

  const { ref } = useInfiniteLoaderInview(handleLoadMore);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    if (value.length >= 3) {
      mutate(value);
    } else {
      refetch();
    }
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      {!isLoading && (
        <FormInput
          type="search"
          onChange={debounce(handleSearch, 500)}
          icon={<FaSearch size={20} />}
          placeholder="Search for series"
        />
      )}
      <div className="gap-5">
        {<TitledCards loading={isLoading} title="Series" items={series} />}
        <Spinner visible={isFetching && !isLoading} />
        <div ref={ref} />
      </div>
    </div>
  );
};

export default Series;
