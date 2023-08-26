import { render, screen } from "@testing-library/react";
import { movieMockAvatar } from "../../mocks/movieMocks";
import MovieCard from "./MovieCard";
import "@testing-library/jest-dom";
import GlobalStyles from "../../styles/GlobalStyles";

describe("Given a MovileCard component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a title with the text 'Avatar: El sentido del agua", () => {
      const cardTitle = movieMockAvatar.title;

      render(
        <>
          <GlobalStyles />
          <MovieCard movie={movieMockAvatar} />
        </>,
      );

      const expectedHeader = screen.getByRole("heading", { name: cardTitle });

      expect(expectedHeader).toBeInTheDocument();
    });
  });
});
