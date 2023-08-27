import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils/renderProviders";
import Loader from "./Loader";
import "@testing-library/jest-dom";

describe("Given a Loader component", () => {
  describe("When it is rendered", () => {
    test("Then it should have an aria-label with the text 'Loading'", () => {
      const labelText = "Loading";

      renderWithProviders(<Loader />);

      const expectedLabel = screen.getByLabelText(labelText);

      expect(expectedLabel).toBeInTheDocument();
    });
  });
});
