import { CardProps } from "@/@types";
import TitledCards from "@/components/TitledCards/TitledCards";
import useGetBookmarkedMovies from "@/utils/hooks/show/movie/useGetBookmarkedMovies";
import useGetBookmarkedSeries from "@/utils/hooks/show/series/useGetBookmarkedSeries";

const Bookmark = () => {
  const { data: movies } = useGetBookmarkedMovies();
  const { data: series } = useGetBookmarkedSeries();

  const movieData: CardProps[] = movies?.data.map((movie) => ({
    name: movie.title,
    src: movie.poster.small,
    status: movie.status,
    to: `/movies/${movie.id}`,
    type: "movie",
    year: new Date(movie.releaseDate).getFullYear(),
    size: "small",
  }));

  const seriesData: CardProps[] = series?.data.map((tv) => ({
    name: tv.name,
    src: tv.poster.small,
    status: tv.status,
    to: `/movies/${tv.id}`,
    type: "series",
    year: new Date(tv.firstAirDate).getFullYear(),
    size: "small",
  }));

  return (
    <div className="w-full">
      <TitledCards title="Movies" items={movieData} />
      <TitledCards title="Series" items={seriesData} />
    </div>
  );
};

export default Bookmark;
