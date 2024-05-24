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
export const bookmarkSeries = async (id: string): Promise<Series> => {
  const response = await api.post(`/show/series/bookmark/${id}`, null, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data.data;
};

export const removebookmarkSeries = async (id: string): Promise<Series> => {
  const response = await api.delete(`/show/series/bookmark/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data.data;
};

export const rateSeries = async (
  id: string,
  rating: number
): Promise<Series> => {
  const response = await api.post(
    `/show/series/rate/${id}`,
    {
      rating,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return response.data;
};

export const updateSeries = async (
  seriesId: string,
  ratingId: string,
  rating: number
): Promise<Series> => {
  const response = await api.put(
    `/show/series/rate/${seriesId}`,
    {
      ratingId,
      rating,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return response.data;
};

export const deleteRating = async (
  id: string,
  ratingId: string
): Promise<Series> => {
  const response = await api.delete(`/show/series/rate/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    data: {
      ratingId,
    },
  });
  return response.data;
};
