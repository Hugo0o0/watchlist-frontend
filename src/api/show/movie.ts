import api from "../api";

export const getMovies = async () => {
  const response = await api.get("/show/movie", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};
