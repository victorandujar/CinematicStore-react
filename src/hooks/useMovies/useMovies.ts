import apiClient from "../../api/apiClient";
import endpointsApi from "../../api/endpoints";

const useMovies = () => {
  const { movies, popular } = endpointsApi;

  const getPopularMovies = async () => {
    const response = await apiClient.get(`${movies}${popular}`);
    return response.data?.results;
  };

  return { getPopularMovies };
};

export default useMovies;
