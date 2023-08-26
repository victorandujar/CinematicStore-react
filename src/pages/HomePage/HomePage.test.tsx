import { screen, waitFor } from "@testing-library/react";
import HomePage from "./HomePage";
import { renderRouterWithProviders } from "../../utils/testUtils/renderProviders";
import { moviesMock } from "../../mocks/movieMocks";
import "@testing-library/jest-dom";

jest.mock("../../hooks/useMovies/useMovies", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    getPopularMovies: jest.fn().mockResolvedValue(moviesMock),
  })),
}));

describe("HomePage", () => {
  it("renders movie cards when data is fetched successfully", async () => {
    renderRouterWithProviders(<HomePage />);

    await waitFor(() => {
      expect(screen.getByText(moviesMock[0].title)).toBeInTheDocument();
    });
  });
});
