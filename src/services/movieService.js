import api from "../api/axios";

export const getTrendingMovies = async () => {
  const response = await api.get("/trending/movie/week");
  return response.data.results;
};

export const getPopularMovies = async () => {
  const response = await api.get("/movie/popular");
  return response.data.results;
};

export const getTopRatedMovies = async () => {
  const response = await api.get("/movie/top_rated");
  return response.data.results;
};

export const getUpcomingMovies = async () => {
  const response = await api.get("/movie/upcoming");
  return response.data.results;
};
export const getMovieDetail = async (id) => {
  const response = await api.get(`/movie/${id}`);
  return response.data;
};

export const searchMovies = async (query) => {
  const response = await api.get("/search/movie", {
    params: {
      query,
    },
  });

  return response.data.results;
};
