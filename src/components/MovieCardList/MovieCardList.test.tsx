import { render, screen } from "@testing-library/react";
import MovieCardList from "./MovieCardList";
import { moviesMock } from "../../mocks/movieMocks";
import "@testing-library/jest-dom";

describe("Given a MovieCardList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a card with a header text'Avatar: El sentido del agua'", () => {
      const headerText = "Avatar: El sentido del agua";

      render(<MovieCardList movies={moviesMock} />);

      const expectedHeader = screen.getByRole("heading", { name: headerText });

      expect(expectedHeader).toBeInTheDocument();
    });
  });
});
