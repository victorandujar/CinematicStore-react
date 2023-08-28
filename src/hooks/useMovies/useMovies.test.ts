import apiClient from "../../api/apiClient";
import endpointsApi from "../../api/endpoints";
import { mockMovieDetail, moviesMock } from "../../mocks/movieMocks";
import useMovies from "./useMovies";

jest.mock("../../api/apiClient");

describe("Given a useMovies custom hook", () => {
  const { movies, popular } = endpointsApi;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("When getPopularMovies is called", () => {
    test("Then it should fetch popular movies from the API", async () => {
      const mockResponse = {
        data: { results: moviesMock },
      };
      apiClient.get = jest.fn().mockResolvedValueOnce(mockResponse);

      const { getPopularMovies } = useMovies();
      const moviesData = await getPopularMovies();

      expect(apiClient.get).toHaveBeenCalledWith(`${movies}${popular}`);
      expect(moviesData).toEqual(mockResponse.data.results);
    });
  });

  describe("When getSingleMovies is called", () => {
    test("Then it should fetch movie detail info from the API", async () => {
      const mockResponse = {
        data: mockMovieDetail,
      };

      apiClient.get = jest.fn().mockResolvedValueOnce(mockResponse);

      const { getSingleMovie } = useMovies();
      const moviesData = await getSingleMovie(mockMovieDetail.id);

      expect(apiClient.get).toHaveBeenCalledWith(
        `${movies}/${mockMovieDetail.id}`,
      );
      expect(moviesData).toEqual(mockResponse.data);
    });
  });
});
