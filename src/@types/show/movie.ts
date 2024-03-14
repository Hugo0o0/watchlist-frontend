import {
  GenreData,
  Metadata,
  PosterData,
  ProductionCompanyData,
  ProductionCountryData,
  RatingData,
  Status,
} from "..";

export interface Movie {
  id: string;
  averageRating: number;
  budget: number;
  genres: GenreData[];
  homepage: string;
  imdbId: string;
  overview: string;
  poster: PosterData;
  productionCompanies: ProductionCompanyData[];
  productionCountries: ProductionCountryData[];
  ratings: RatingData[];
  releaseDate: string;
  revenue: number;
  runtime: number;
  status: string;
  title: string;
  rating: number;
  isBookmarked: boolean;
}

export interface MovieData {
  status: Status;
  data: Movie[];
  metadata: Metadata;
}
