import { render, screen } from "@testing-library/react";
import Header from "./Header";
import "@testing-library/jest-dom";

describe("Given a Header componente", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Cinematic Store'", () => {
      const headerText = "Cinematic Store";

      render(<Header />);

      const expectedHeader = screen.getByRole("heading", { name: headerText });

      expect(expectedHeader).toBeInTheDocument();
    });

    test("Then it should show an image logo", () => {
      render(<Header />);

      const expectedLogo = screen.getByRole("img");

      expect(expectedLogo).toBeInTheDocument();
    });
  });
});
