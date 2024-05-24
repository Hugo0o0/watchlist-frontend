export interface SidebarIconProps {
  size: number;
}

export type ShowType = "movies" | "series";
export interface CardProps {
  size: "medium" | "large";
  type: ShowType;
  src: string;
  name: string;
  year: number;
  status: string;
  loading?: boolean;
  to: string;
}

export interface Metadata {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  itemsPerPage: number;
  nextPage: number | null;
  page: number;
  prevPage: number | null;
}

export type Status = "success" | "fail" | "error";

export interface GenreData {
  id: string;
  name: string;
}

export interface PosterData {
  small: string;
  medium: string;
  large: string;
}

export interface ProductionCompanyData {
  id: string;
  name: string;
  originCountry: string;
}

export interface ProductionCountryData {
  id: string;
  iso_3166: string;
  name: string;
}

export interface RatingData {
  id: string;
  rating: number;
  userId: string;
}

export type ErrorCodes = 404 | 401 | 500 | 400;

export type MessageByErrorCode = {
  [key in ErrorCodes]: {
    message: string;
  };
};
