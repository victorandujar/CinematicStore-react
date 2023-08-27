import { screen } from "@testing-library/react";
import { mockMovieDetail } from "../../mocks/movieMocks";
import { renderWithProviders } from "../../utils/testUtils/renderProviders";
import MovieDetail from "./MovieDetail";
import "@testing-library/jest-dom";

describe("Given a MovieDetail component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a title with the text 'Oppenheimer'", () => {
      const titleText = "Oppenheimer";

      renderWithProviders(<MovieDetail movie={mockMovieDetail} />);

      const expectedTitle = screen.getByRole("heading", { name: titleText });

      expect(expectedTitle).toBeInTheDocument();
    });
  });
});
