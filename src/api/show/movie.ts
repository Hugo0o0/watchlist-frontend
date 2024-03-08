import api from "../api";

export const getMovies = async (props: any) => {
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
