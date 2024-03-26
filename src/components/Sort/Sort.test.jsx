import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Sort from "./Sort";
import userEvent from "@testing-library/user-event";

describe("Sort", () => {
  it("displays radio buttons", () => {
    render(<Sort />);
    screen.getByText("Name");
    screen.getByText("Date");
    screen.getByText("Size");
  });

  describe("when Date radio is clicked", () => {
    it("calls setSortBy with date", async () => {
      const setSortBy = vi.fn();
      render(<Sort setSortBy={setSortBy} />);
      const dateRadioButton = screen.getByLabelText("Date");
      await userEvent.click(dateRadioButton);
      expect(setSortBy).toHaveBeenCalledWith("Date");
    });
  });

  describe("when Name radio is clicked", () => {
    it("calls setSortBy with name", async () => {
      const setSortBy = vi.fn();
      render(<Sort setSortBy={setSortBy} />);
      const nameRadioButton = screen.getByLabelText("Name");
      await userEvent.click(nameRadioButton);
      expect(setSortBy).toHaveBeenCalledWith("Name");
    });
  });

  describe("when Size radio is clicked", () => {
    it("calls setSortBy with size", async () => {
      const setSortBy = vi.fn();
      render(<Sort setSortBy={setSortBy} />);
      const sizeRadioButton = screen.getByLabelText("Size");
      await userEvent.click(sizeRadioButton);
      expect(setSortBy).toHaveBeenCalledWith("Size");
    });
  });
});
