import { Movie, MovieData } from "@/@types/show/movie";
import api from "../api";

export const getMovies = async (props: {
  pageParam: number;
}): Promise<MovieData> => {
  const response = await api.get("/show/movie", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    params: {
      page: props.pageParam,
    },
  });
  return response.data;
};

export const getMovie = async (id: string): Promise<Movie> => {
  const response = await api.get(`/show/movie/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data.data;
};

export const searchMovies = async (query: string) => {
  const response = await api.get("/show/search/movie", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    params: {
      query,
    },
  });
  return response.data;
};

export const getBookmarkedMovies = async (): Promise<MovieData> => {
  const response = await api.get("/show/movie/bookmark", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export const getRatedMovies = async (): Promise<MovieData> => {
  const response = await api.get("/show/movie/rate", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export const bookmarkMovie = async (id: string) => {
  const response = await api.post(`/show/movie/bookmark/${id}`, null, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data.data;
};

export const removeBookmarkMovie = async (id: string): Promise<Movie> => {
  const response = await api.delete(`/show/movie/bookmark/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data.data;
};

export const rateMovie = async (
  id: string,
  rating: number,
  ratingId?: string
): Promise<Movie> => {
  const response = await api.post(
    `/show/movie/rate/${id}`,
    {
      rating,
      ratingId,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return response.data;
};
