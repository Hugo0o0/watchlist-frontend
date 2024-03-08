import TitledCards from "@/components/TitledCards/TitledCards";
import useMovies from "@/utils/hooks/show/movie/useMovies";
import { useState } from "react";
import { Spinner } from "@/components/UI";
import useInfiniteLoaderInview from "@/utils/hooks/useInfiniteLoaderInview";

const Movies = () => {
  const [page, setPage] = useState(1);
  const { movies, fetchNextPage, isFetching, isLoading } = useMovies(page);
  const handleLoadMore = (inView: boolean) => {
    if (inView) {
      fetchNextPage();
      setPage((prev) => prev + 1);
    }
  };
  const { ref } = useInfiniteLoaderInview(handleLoadMore);

  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="gap-5">
        {<TitledCards title="Movies" items={movies!} />}
        <Spinner visible={isFetching && !isLoading} />
        <div ref={ref} />
      </div>
    </div>
  );
};

export default Movies;
