import { render, screen } from "@testing-library/react";
import Layout from "./Layout";
import "@testing-library/jest-dom";

describe("Given a Layout componente", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Cinematic Store'", () => {
      const headerText = "Cinematic Store";

      render(<Layout />);

      const expectedHeader = screen.getByRole("heading", { name: headerText });

      expect(expectedHeader).toBeInTheDocument();
    });
  });
});
