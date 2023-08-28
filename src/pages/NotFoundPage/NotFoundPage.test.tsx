import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../utils/testUtils/renderProviders";
import NotFoundPage from "./NotFoundPage";
import "@testing-library/jest-dom";

describe("Given a NotFoundPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text '404'", () => {
      const headingText = "404";

      renderRouterWithProviders(<NotFoundPage />);

      const expectedHeader = screen.getByRole("heading", { name: headingText });

      expect(expectedHeader).toBeInTheDocument();
    });
  });
});
