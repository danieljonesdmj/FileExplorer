import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Filter from "./Filter";

describe("Filter", () => {
  describe("when a filter option is entered and search is clicked", () => {
    it("calls setSearchTerm with the term and setSearched with true", () => {
      const setSearchTerm = vi.fn();
      const setSearched = vi.fn();
      render(
        <Filter setSearchTerm={setSearchTerm} setSearched={setSearched} />
      );

      const textInput = screen.getByTestId("search-bar");

      fireEvent.change(textInput, { target: { value: "Absences" } });
      const submitButton = screen.getByRole("button");

      fireEvent.click(submitButton);

      expect(setSearchTerm).toHaveBeenCalledWith("Absences");
      expect(setSearched).toHaveBeenCalledWith(true);
    });
  });
});
