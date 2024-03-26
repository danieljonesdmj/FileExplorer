import { render, screen, within, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Display from "./Display";

describe("Display", () => {
  it("renders the list of files", () => {
    render(<Display />);

    const list = screen.getByRole("list", {
      name: /file-list/i,
    });

    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");
    expect(items.length).toBe(9);
  });

  describe("sorting", () => {
    it("renders the sort component", () => {
      render(<Display />);

      screen.getByText("Sort by");
      screen.getByText("Name");
      screen.getByText("Date");
      screen.getByText("Size");
    });

    it("renders the list of files in name order by default", async () => {
      render(<Display />);

      const list = screen.getByRole("list", {
        name: /file-list/i,
      });
      const { getAllByRole } = within(list);
      const items = getAllByRole("listitem");
      const fileNames = items.map((item) => item.textContent);
      expect(fileNames).toMatchInlineSnapshot(`
          [
            "Absences - 2010-04-24 - 21Mb",
            "Cost centres - 2016-08-12 - 1Mb",
            "Disciplinary - 2013-04-02 - 4Mb",
            "Employee Handbook - 2017-01-06 - 10Mb",
            "Expenses - 2013-01-24 - 2Mb",
            "Flexible working policy - 2019-12-06 - 4Mb",
            "Maternity Handbook - 2014-01-06 - 1Mb",
            "Misc - 2012-04-24 - 23Mb",
            "Public Holiday policy - 2016-12-06 - 2Mb",
          ]
      `);
    });

    describe("when sort by date radio button is clicked", () => {
      it("renders the list of files sorted by date", async () => {
        render(<Display />);
        const dateRadioButton = screen.getByLabelText("Date");
        await userEvent.click(dateRadioButton);
        const list = screen.getByRole("list", {
          name: /file-list/i,
        });
        const { getAllByRole } = within(list);
        const items = getAllByRole("listitem");
        const fileNames = items.map((item) => item.textContent);
        expect(fileNames).toMatchInlineSnapshot(`
          [
            "Absences - 2010-04-24 - 21Mb",
            "Misc - 2012-04-24 - 23Mb",
            "Expenses - 2013-01-24 - 2Mb",
            "Disciplinary - 2013-04-02 - 4Mb",
            "Maternity Handbook - 2014-01-06 - 1Mb",
            "Cost centres - 2016-08-12 - 1Mb",
            "Public Holiday policy - 2016-12-06 - 2Mb",
            "Employee Handbook - 2017-01-06 - 10Mb",
            "Flexible working policy - 2019-12-06 - 4Mb",
          ]
      `);
      });
    });

    describe("when sort by size radio button is clicked", () => {
      it("renders the list of files sorted by size", async () => {
        render(<Display />);
        const sizeRadioButton = screen.getByLabelText("Size");
        await userEvent.click(sizeRadioButton);
        const list = screen.getByRole("list", {
          name: /file-list/i,
        });
        const { getAllByRole } = within(list);
        const items = getAllByRole("listitem");
        const fileNames = items.map((item) => item.textContent);
        expect(fileNames).toMatchInlineSnapshot(`
          [
            "Cost centres - 2016-08-12 - 1Mb",
            "Maternity Handbook - 2014-01-06 - 1Mb",
            "Public Holiday policy - 2016-12-06 - 2Mb",
            "Expenses - 2013-01-24 - 2Mb",
            "Disciplinary - 2013-04-02 - 4Mb",
            "Flexible working policy - 2019-12-06 - 4Mb",
            "Employee Handbook - 2017-01-06 - 10Mb",
            "Absences - 2010-04-24 - 21Mb",
            "Misc - 2012-04-24 - 23Mb",
          ]
      `);
      });
    });

    describe("when sort by name radio button is clicked", () => {
      it("when sort by name radio button is clicked", async () => {
        render(<Display />);
        const nameRadioButton = screen.getByLabelText("Name");
        await userEvent.click(nameRadioButton);
        const list = screen.getByRole("list", {
          name: /file-list/i,
        });
        const { getAllByRole } = within(list);
        const items = getAllByRole("listitem");
        const fileNames = items.map((item) => item.textContent);
        expect(fileNames).toMatchInlineSnapshot(`
          [
            "Absences - 2010-04-24 - 21Mb",
            "Cost centres - 2016-08-12 - 1Mb",
            "Disciplinary - 2013-04-02 - 4Mb",
            "Employee Handbook - 2017-01-06 - 10Mb",
            "Expenses - 2013-01-24 - 2Mb",
            "Flexible working policy - 2019-12-06 - 4Mb",
            "Maternity Handbook - 2014-01-06 - 1Mb",
            "Misc - 2012-04-24 - 23Mb",
            "Public Holiday policy - 2016-12-06 - 2Mb",
          ]
      `);
      });
    });
  });

  describe("searching", () => {
    it("renders the search button", () => {
      render(<Display />);
      screen.getByText("Search");
    });

    describe("when a search term is entered and search is clicked", () => {
      it("renders a subset of files filtered by the given search term", async () => {
        render(<Display />);
        const textInput = screen.getByTestId("search-bar");

        fireEvent.change(textInput, { target: { value: "policy" } });

        const submitButton = screen.getByText("Search");

        fireEvent.click(submitButton);

        const list = screen.getByRole("list", {
          name: /file-list/i,
        });
        const { getAllByRole } = within(list);
        const items = getAllByRole("listitem");
        const fileNames = items.map((item) => item.textContent);
        expect(fileNames).toMatchInlineSnapshot(`
          [
            "Annual leave policy - 2017-12-01 - 3Mb",
            "Sickness policy - 2015-04-24 - 8Mb",
            "Disciplinary policy - 2018-12-01 - 1Mb",
            "Flexible working policy - 2019-12-06 - 4Mb",
            "Public Holiday policy - 2016-12-06 - 2Mb",
          ]
      `);
      });

      describe("when show all button is clicked", () => {
        it("shows all files again", () => {
          render(<Display />);
          const textInput = screen.getByTestId("search-bar");

          fireEvent.change(textInput, { target: { value: "policy" } });

          const submitButton = screen.getByText("Search");

          fireEvent.click(submitButton);

          const showAllButton = screen.getByText("Show all");

          fireEvent.click(showAllButton);

          const list = screen.getByRole("list", {
            name: /file-list/i,
          });
          const { getAllByRole } = within(list);
          const items = getAllByRole("listitem");
          const fileNames = items.map((item) => item.textContent);
          expect(fileNames).toMatchInlineSnapshot(`
          [
            "Absences - 2010-04-24 - 21Mb",
            "Cost centres - 2016-08-12 - 1Mb",
            "Disciplinary - 2013-04-02 - 4Mb",
            "Employee Handbook - 2017-01-06 - 10Mb",
            "Expenses - 2013-01-24 - 2Mb",
            "Flexible working policy - 2019-12-06 - 4Mb",
            "Maternity Handbook - 2014-01-06 - 1Mb",
            "Misc - 2012-04-24 - 23Mb",
            "Public Holiday policy - 2016-12-06 - 2Mb",
          ]
      `);
        });
      });
    });
  });
});
