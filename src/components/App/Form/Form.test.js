import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "./index.js";

describe("FormDisplay", () => {
   it("should render all the Form input fields", () => {
      render(<Form />);

      expect(screen.getByPlaceholderText(/image/i)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/title/i)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/location/i)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/date/i)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/note/i)).toBeInTheDocument();
      expect(
         screen.getByRole("button", { name: /submit/i })
      ).toBeInTheDocument();
   });
});
