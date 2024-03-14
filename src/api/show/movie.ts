import { MovieData } from "@/@types/show/movie";
import api from "../api";

export const getMovies = async (props: any): Promise<MovieData> => {
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
  console.log(response.data);

  return response.data;
};
