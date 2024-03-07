import TitledCards from "@/components/TitledCards/TitledCards";
import useMovies from "@/utils/hooks/show/movie/useMovies";
const Home = () => {
  const { movies } = useMovies();
  console.log(movies);

  const items = movies?.data.map((movie: any) => ({
    src: movie.poster.large,
    name: movie.title,
    year: new Date(movie.releaseDate).getFullYear(),
    type: "movie",
    status: movie.status,
  }));

  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="gap-5">
        {items && <TitledCards title="Movies" items={items} />}
      </div>
    </div>
  );
};

export default Home;
