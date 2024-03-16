import { CardProps } from "@/@types";
import { Movie } from "@/@types/show/movie";
import { Series } from "@/@types/show/series";

export const movieDataToCardProps = (data?: Movie[]): CardProps[] => {
  if (!data) return [];
  return data.map((movie) => ({
    name: movie.title,
    size: "medium",
    src: movie.poster.small,
    status: movie.status,
    to: `/movies/${movie.id}`,
    type: "movies",
    year: new Date(movie.releaseDate).getFullYear(),
    key: movie.id,
  }));
};

export const seriesDataToCardProps = (data?: Series[]): CardProps[] => {
  if (!data) return [];
  return data.map((movie) => ({
    name: movie.name,
    size: "medium",
    src: movie.poster.small,
    status: movie.status,
    to: `/series/${movie.id}`,
    type: "series",
    year: new Date(movie.firstAirDate).getFullYear(),
    key: movie.id,
  }));
};
