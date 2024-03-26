import { fireEvent, render, screen } from "@testing-library/react";
import File from "./File";

describe("File", () => {
  describe("when the file type is a file", () => {
    it("renders the correct icon and file data", () => {
      const testDataFile = {
        type: "pdf",
        name: "Employee Handbook",
        added: "2017-01-06",
        size: "10Mb",
      };
      render(<File file={testDataFile} />);
      expect(screen.queryByTestId("file-svg")).toBeInTheDocument();
      screen.getByText("Employee Handbook - 2017-01-06 - 10Mb");
    });
  });

  describe("when the file type is a folder", () => {
    it("renders the correct icon and file data", () => {
      const testDataFolder = {
        type: "folder",
        name: "Expenses",
        added: "2013-01-24",
        size: "2Mb",
        files: [
          {
            type: "doc",
            name: "Expenses claim form",
            added: "2017-05-02",
            size: "1Mb",
          },
          {
            type: "doc",
            name: "Fuel allowances",
            added: "2017-05-03",
            size: "1Mb",
          },
        ],
      };
      render(<File file={testDataFolder} />);
      expect(screen.queryByTestId("folder-svg")).toBeInTheDocument();
      screen.getByText("Expenses - 2013-01-24 - 2Mb");
    });
  });

  describe("when a folder is opened", () => {
    it("shows its sub files", () => {
      const testDataFolder = {
        type: "folder",
        name: "Expenses",
        added: "2013-01-24",
        size: "2Mb",
        files: [
          {
            type: "doc",
            name: "Expenses claim form",
            added: "2017-05-02",
            size: "1Mb",
          },
          {
            type: "doc",
            name: "Fuel allowances",
            added: "2017-05-03",
            size: "1Mb",
          },
        ],
      };

      render(<File file={testDataFolder} />);
      const expensesFolder = screen.getByText("Expenses - 2013-01-24 - 2Mb");
      fireEvent.click(expensesFolder);
      screen.getByText("Fuel allowances - 2017-05-03 - 1Mb");
    });
  });
});
