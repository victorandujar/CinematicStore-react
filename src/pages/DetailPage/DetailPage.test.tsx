import { waitFor, screen } from "@testing-library/react";
import { mockMovieDetail } from "../../mocks/movieMocks";
import { renderRouterWithProviders } from "../../utils/testUtils/renderProviders";
import DetailPage from "./DetailPage";
import "@testing-library/jest-dom";

jest.mock("../../hooks/useMovies/useMovies", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    getSingleMovie: jest.fn().mockResolvedValue(mockMovieDetail),
  })),
}));

describe("Given a DetailPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a movie card with a section title 'Overview'", async () => {
      renderRouterWithProviders(<DetailPage />);

      await waitFor(() => {
        expect(screen.getByText("Overview")).toBeInTheDocument();
      });
    });
  });
});
