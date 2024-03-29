import api from "../api";
import { Series, SeriesData } from "@/@types/show/series";

export const getSeries = async (props: any): Promise<SeriesData> => {
  const response = await api.get("/show/series", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    params: {
      page: props.pageParam,
    },
  });
  return response.data;
};

export const getSingleSeries = async (id?: string): Promise<Series> => {
  const response = await api.get(`/show/series/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data.data;
};

export const searchSeries = async (query: string): Promise<SeriesData> => {
  const response = await api.get("/show/search/series", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    params: {
      query,
    },
  });
  return response.data;
};

export const getBookmarkedSeries = async (): Promise<SeriesData> => {
  const response = await api.get("/show/series/bookmark", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export const getRatedSeries = async (): Promise<SeriesData> => {
  const response = await api.get("/show/series/rate", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};
