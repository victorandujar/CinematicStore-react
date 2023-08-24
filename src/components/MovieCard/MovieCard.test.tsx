import { render, screen } from "@testing-library/react";
import { movieMock } from "../../mocks/movieMocks";
import MovieCard from "./MovieCard";
import "@testing-library/jest-dom";

describe("Given a MovileCard component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a title with the text 'Avatar: El sentido del agua", () => {
      const cardTitle = movieMock.title;

      render(<MovieCard movie={movieMock} />);

      const expectedHeader = screen.getByRole("heading", { name: cardTitle });

      expect(expectedHeader).toBeInTheDocument();
    });
  });
});
