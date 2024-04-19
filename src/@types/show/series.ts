import { GenreData, Metadata, PosterData, RatingData, Status } from "..";

interface Creator {
  id: string;
  name: string;
}

interface Season {
  id: string;
  seasonNumber: number;
  episodeCount: number;
  airDate: string;
  overview: string;
  name: string;
}

export interface Series {
  id: string;
  averageRating: number;
  name: string;
  poster: PosterData;
  genres: GenreData[];
  creators: Creator[];
  firstAirDate: string;
  lastAirDate: string;
  numberOfEpisodes: number;
  numberOfSeasons: number;
  overview: string;
  status: string;
  seasons: Season[];
  ratings: RatingData[];
  bookmarked: boolean;
  rating: number | null;
}

export interface SeriesData {
  status: Status;
  data: Series[];
  metadata: Metadata;
}
