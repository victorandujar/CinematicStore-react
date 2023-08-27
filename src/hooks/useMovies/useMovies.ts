import apiClient from "../../api/apiClient";
import endpointsApi from "../../api/endpoints";

const useMovies = () => {
  const { movies, popular } = endpointsApi;

  const getPopularMovies = async () => {
    const response = await apiClient.get(`${movies}${popular}`);
    return response.data?.results;
  };

  const getSingleMovie = async (movieId: number) => {
    const response = await apiClient.get(`${movies}/${movieId}`);
    return response.data;
  };

  return { getPopularMovies, getSingleMovie };
};

export default useMovies;
