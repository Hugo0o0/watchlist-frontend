import useMovies from "@/utils/hooks/show/movie/useMovies";
import useSearchMovie from "@/utils/hooks/show/movie/useSearchMovie";
import InfinitePage from "@/components/InfinitePage/InfinitePage";
import { Card } from "@/components/UI";
import { Movie } from "@/@types/show/movie";

const Movies = () => {
  const queryResult = useMovies();
  const mutation = useSearchMovie();

  return (
    <InfinitePage
      pageTitle="Movies"
      queryResult={queryResult}
      mutation={mutation}
    >
      <div className="flex flex-wrap gap-10">
        {queryResult.data?.pages.flatMap((page: any) =>
          page.data.map((item: Movie) => (
            <Card
              name={item.title}
              size="medium"
              src={item.poster.large}
              status={item.status}
              to={`/movies/${item.id}`}
              type="movies"
              year={new Date(item.releaseDate).getFullYear()}
              loading={queryResult.isLoading}
              key={item.id}
            />
          ))
        )}
      </div>
    </InfinitePage>
  );
};

export default Movies;
{
  /* <div className="flex flex-col gap-5 w-full">
      {!isLoading && (
        <FormInput
          type="search"
          onChange={handleSearch}
          icon={isPending ? <CircularProgress size={20} /> : <FaSearch />}
          placeholder="Search for movies with at least 4 characters"
          value={query}
        />
      )}
      {!isLoading && movies?.length === 0 && (
        <NoItems message="No movies found" itemIcon={<FaSadCry size={40} />} />
      )}
      <div className="grid gap-20">
        {<TitledCards loading={isLoading} title="Movies" items={movies} />}
        {isFetching && !isLoading && <CircularProgress className="mx-auto" />}
        <div ref={ref} />
      </div>
    </div> */
}
