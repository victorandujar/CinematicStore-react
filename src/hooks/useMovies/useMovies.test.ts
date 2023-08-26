import apiClient from "../../api/apiClient";
import endpointsApi from "../../api/endpoints";
import { moviesMock } from "../../mocks/movieMocks";
import useMovies from "./useMovies";

jest.mock("../../api/apiClient");

describe("Given a useMovies custom hook", () => {
  describe("When it is called", () => {
    const { movies, popular } = endpointsApi;

    beforeEach(() => {
      jest.clearAllMocks();
    });

    test("Then getPopularMovies should fetch movies data from the API", async () => {
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
});
