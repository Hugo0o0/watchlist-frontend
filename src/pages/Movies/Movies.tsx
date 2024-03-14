import TitledCards from "@/components/TitledCards/TitledCards";
import useMovies from "@/utils/hooks/show/movie/useMovies";
import { FormInput, Spinner } from "@/components/UI";
import useInfiniteLoaderInview from "@/utils/hooks/useInfiniteLoaderInview";
import { FaSearch } from "react-icons/fa";
import useSearchMovie from "@/utils/hooks/show/movie/useSearchMovie";
import debounce from "lodash.debounce";

const Movies = () => {
  const { movies, fetchNextPage, isFetching, isLoading, hasNextPage, refetch } =
    useMovies();
  const { mutate } = useSearchMovie();
  const handleLoadMore = (inView: boolean) => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  };

  const { ref } = useInfiniteLoaderInview(handleLoadMore);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      mutate(e.target.value);
    } else {
      refetch();
    }
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      <FormInput
        type="search"
        onChange={debounce(handleSearch, 500)}
        icon={<FaSearch size={20} />}
        placeholder="Search for movies"
      />
      <div className="gap-5">
        {<TitledCards loading={isLoading} title="Movies" items={movies} />}
        <Spinner visible={isFetching && !isLoading} />
        <div ref={ref} />
      </div>
    </div>
  );
};

export default Movies;
