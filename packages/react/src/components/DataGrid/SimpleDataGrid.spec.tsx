import { render, screen, waitFor } from "@testing-library/react";
import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import { getAllByRole, getByRole } from "@testing-library/dom";
import { expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { expectPaginationList } from "components/Pagination/utils";
import { CunninghamProvider } from "components/Provider";
import { SimpleDataGrid } from "components/DataGrid/SimpleDataGrid";
import { sleep } from "utils";
import { Row } from "components/DataGrid/index";

describe("<SimpleDataGrid/>", () => {
  it("should render a grid without pagination", async () => {
    const rows = Array.from(Array(23)).map(() => ({
      id: faker.datatype.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      address: faker.address.streetAddress(),
    }));
    render(
      <CunninghamProvider>
        <SimpleDataGrid
          columns={[
            {
              field: "firstName",
              headerName: "First name",
            },
            {
              field: "lastName",
              headerName: "Last name",
            },
            {
              field: "email",
              headerName: "Email",
            },
            {
              field: "address",
              headerName: "Address",
            },
          ]}
          rows={rows}
        />
      </CunninghamProvider>
    );

    const table = screen.getByRole("table");
    const ths = getAllByRole(table, "columnheader");
    expect(ths.length).toBe(4);
    expect(ths[0].textContent).toEqual("First name");
    expect(ths[1].textContent).toEqual("Last name");
    expect(ths[2].textContent).toEqual("Email");
    expect(ths[3].textContent).toEqual("Address");
    rows.forEach((row) => {
      const element = screen.getByTestId(row.id);
      const tds = getAllByRole(element, "cell");
      expect(tds.length).toBe(4);
      expect(tds[0].textContent).toEqual(row.firstName);
      expect(tds[1].textContent).toEqual(row.lastName);
      expect(tds[2].textContent).toEqual(row.email);
      expect(tds[3].textContent).toEqual(row.address);
    });
    // Make sure the pagination is not rendered ( because it is disabled by default )
    expect(document.querySelector(".c__pagination")).toBeNull();
  });
  it("should render a grid with working pagination", async () => {
    const rows = Array.from(Array(23))
      .map(() => ({
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        address: faker.address.streetAddress(),
      }))
      .sort((a, b) => a.firstName.localeCompare(b.firstName));
    render(
      <CunninghamProvider>
        <SimpleDataGrid
          columns={[
            {
              field: "firstName",
              headerName: "First name",
            },
            {
              field: "lastName",
              headerName: "Last name",
            },
            {
              field: "email",
              headerName: "Email",
            },
            {
              field: "address",
              headerName: "Address",
            },
          ]}
          rows={rows}
          defaultPaginationParams={{
            pageSize: 10,
          }}
          defaultSortModel={[
            {
              field: "firstName",
              sort: "asc",
            },
          ]}
        />
      </CunninghamProvider>
    );

    // Verify first page rows.
    expect(screen.getAllByRole("row").length).toBe(11);
    rows.slice(0, 10).forEach((row) => {
      const element = screen.getByTestId(row.id);
      const tds = getAllByRole(element, "cell");
      expect(tds.length).toBe(4);
      expect(tds[0].textContent).toEqual(row.firstName);
      expect(tds[1].textContent).toEqual(row.lastName);
      expect(tds[2].textContent).toEqual(row.email);
      expect(tds[3].textContent).toEqual(row.address);
    });

    // Expect pagination to be rendered.
    expectPaginationList([
      { text: "navigate_before", name: "Go to previous page" },
      { text: "1", name: "You are currently on page 1" },
      { text: "2", name: "Go to page 2" },
      { text: "3", name: "Go to page 3" },
      { text: "navigate_next", name: "Go to next page" },
    ]);

    // Go to page 2.
    const nextButton = screen.getByRole("button", {
      name: "Go to next page",
    });
    const user = userEvent.setup();
    user.click(nextButton);

    // Verify second page rows.
    expect(screen.getAllByRole("row").length).toBe(11);
    await waitFor(() => {
      rows.slice(10, 20).forEach((row) => {
        const element = screen.getByTestId(row.id);
        const tds = getAllByRole(element, "cell");
        expect(tds.length).toBe(4);
        expect(tds[0].textContent).toEqual(row.firstName);
        expect(tds[1].textContent).toEqual(row.lastName);
        expect(tds[2].textContent).toEqual(row.email);
        expect(tds[3].textContent).toEqual(row.address);
      });
    });

    expectPaginationList([
      { text: "navigate_before", name: "Go to previous page" },
      { text: "1", name: "Go to page 1" },
      { text: "2", name: "You are currently on page 2" },
      { text: "3", name: "Go to page 3" },
      { text: "navigate_next", name: "Go to next page" },
    ]);

    // Go to page 3.
    user.click(nextButton);

    // Verify third page rows.
    expect(screen.getAllByRole("row").length).toBe(11);
    await waitFor(() => {
      rows.slice(20, 23).forEach((row) => {
        const element = screen.getByTestId(row.id);
        const tds = getAllByRole(element, "cell");
        expect(tds.length).toBe(4);
        expect(tds[0].textContent).toEqual(row.firstName);
        expect(tds[1].textContent).toEqual(row.lastName);
        expect(tds[2].textContent).toEqual(row.email);
        expect(tds[3].textContent).toEqual(row.address);
      });
    });

    expectPaginationList([
      { text: "navigate_before", name: "Go to previous page" },
      { text: "1", name: "Go to page 1" },
      { text: "2", name: "Go to page 2" },
      { text: "3", name: "You are currently on page 3" },
      { text: "navigate_next", name: "Go to next page" },
    ]);
  });
  it("should render a grid with working rows selection", async () => {
    const rows = Array.from(Array(23))
      .map(() => ({
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        address: faker.address.streetAddress(),
      }))
      .sort((a, b) => a.firstName.localeCompare(b.firstName));

    let lastRowSelection: Record<string, boolean>;

    const Wrapper = () => {
      const [rowSelection, setRowSelection] = useState({});
      lastRowSelection = rowSelection;
      return (
        <CunninghamProvider>
          <SimpleDataGrid
            columns={[
              {
                field: "firstName",
                headerName: "First name",
              },
              {
                field: "lastName",
                headerName: "Last name",
              },
              {
                field: "email",
                headerName: "Email",
              },
              {
                field: "address",
                headerName: "Address",
              },
            ]}
            rows={rows}
            defaultSortModel={[
              {
                field: "firstName",
                sort: "asc",
              },
            ]}
            enableRowSelection={true}
            rowSelection={rowSelection}
            onRowSelectionChange={setRowSelection}
          />
        </CunninghamProvider>
      );
    };

    render(<Wrapper />);

    const user = userEvent.setup();
    const rowsToSelect = [rows[0], rows[10]];

    // Check first row.
    let element = screen.getByTestId(rowsToSelect[0].id);
    let checkbox: HTMLInputElement = getByRole(element, "checkbox");
    user.click(checkbox);
    await waitFor(() => {
      expect(lastRowSelection[rowsToSelect[0].id]).toBe(true);
    });

    // Check second row.
    element = screen.getByTestId(rowsToSelect[1].id);
    checkbox = getByRole(element, "checkbox");
    user.click(checkbox);
    await waitFor(() => {
      expect(lastRowSelection[rowsToSelect[0].id]).toBe(true);
      expect(lastRowSelection[rowsToSelect[1].id]).toBe(true);
    });

    // Uncheck first row.
    element = screen.getByTestId(rowsToSelect[0].id);
    checkbox = getByRole(element, "checkbox");
    user.click(checkbox);
    await waitFor(() => {
      expect(lastRowSelection[rowsToSelect[0].id]).toBe(undefined);
      expect(lastRowSelection[rowsToSelect[1].id]).toBe(true);
    });
  });
  it("should render a grid with working sortable columns", async () => {
    const rows = Array.from(Array(23))
      .map(() => ({
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        address: faker.address.streetAddress(),
      }))
      .sort((a, b) => a.firstName.localeCompare(b.firstName));
    render(
      <CunninghamProvider>
        <SimpleDataGrid
          columns={[
            {
              field: "firstName",
              headerName: "First name",
            },
            {
              field: "lastName",
              headerName: "Last name",
            },
            {
              field: "email",
              headerName: "Email",
            },
            {
              field: "address",
              headerName: "Address",
            },
          ]}
          rows={rows}
          defaultPaginationParams={{
            pageSize: 10,
          }}
          defaultSortModel={[
            {
              field: "firstName",
              sort: "asc",
            },
          ]}
        />
      </CunninghamProvider>
    );

    // Verify first page rows are sorted by firstName ASC.
    expect(screen.getAllByRole("row").length).toBe(11);
    rows.slice(0, 10).forEach((row) => {
      const element = screen.getByTestId(row.id);
      const tds = getAllByRole(element, "cell");
      expect(tds.length).toBe(4);
      expect(tds[0].textContent).toEqual(row.firstName);
      expect(tds[1].textContent).toEqual(row.lastName);
      expect(tds[2].textContent).toEqual(row.email);
      expect(tds[3].textContent).toEqual(row.address);
    });

    // Verify last page rows are sorted by firstName ASC.
    const page3Button = screen.getByRole("button", { name: "Go to page 3" });
    const user = userEvent.setup();
    user.click(page3Button);

    await waitFor(() => {
      rows.slice(20, 23).forEach((row) => {
        const element = screen.getByTestId(row.id);
        const tds = getAllByRole(element, "cell");
        expect(tds.length).toBe(4);
        expect(tds[0].textContent).toEqual(row.firstName);
        expect(tds[1].textContent).toEqual(row.lastName);
        expect(tds[2].textContent).toEqual(row.email);
        expect(tds[3].textContent).toEqual(row.address);
      });
    });

    // Go to page 1 and sort by firstName DESC.
    const page1Button = screen.getByRole("button", { name: "Go to page 1" });
    user.click(page1Button);

    const table = screen.getByRole("table");
    const ths = getAllByRole(table, "columnheader");
    expect(ths.length).toBe(4);
    expect(ths[0].textContent).toContain("First name");
    expect(ths[0].textContent).toContain("arrow_drop_up");
    user.click(ths[0].querySelector("div")!);

    // Verify first page rows are sorted by firstName DESC.
    await waitFor(() => {
      expect(ths[0].textContent).toContain("arrow_drop_down");
      [...rows]
        .reverse()
        .slice(0, 10)
        .forEach((row) => {
          const element = screen.getByTestId(row.id);
          const tds = getAllByRole(element, "cell");
          expect(tds.length).toBe(4);
          expect(tds[0].textContent).toEqual(row.firstName);
          expect(tds[1].textContent).toEqual(row.lastName);
          expect(tds[2].textContent).toEqual(row.email);
          expect(tds[3].textContent).toEqual(row.address);
        });
    });

    // Verify last page rows are sorted by firstName DESC.
    user.click(page3Button);
    await waitFor(() => {
      [...rows]
        .reverse()
        .slice(20, 23)
        .forEach((row) => {
          const element = screen.getByTestId(row.id);
          const tds = getAllByRole(element, "cell");
          expect(tds.length).toBe(4);
          expect(tds[0].textContent).toEqual(row.firstName);
          expect(tds[1].textContent).toEqual(row.lastName);
          expect(tds[2].textContent).toEqual(row.email);
          expect(tds[3].textContent).toEqual(row.address);
        });
    });

    // Click again on sort button to disable sorting.
    user.click(ths[0].querySelector("div")!);
    await waitFor(() => {
      // Make sure there are no arrow_drop_down nor arrow_drop_up.
      expect(ths[0].textContent).toEqual("First name");
    });

    // Click on email header to make it the new sort column.
    expect(ths[2].textContent).toEqual("Email");
    user.click(ths[2].querySelector("div")!);
    await waitFor(() => {
      expect(ths[2].textContent).toContain("arrow_drop_up");
      expect(ths[0].textContent).toEqual("First name");
    });

    // Verify first page rows are sorted by email ASC.
    user.click(page1Button);
    await waitFor(() => {
      [...rows]
        .sort((a, b) => a.email.localeCompare(b.email))
        .slice(0, 10)
        .forEach((row) => {
          const element = screen.getByTestId(row.id);
          const tds = getAllByRole(element, "cell");
          expect(tds.length).toBe(4);
          expect(tds[0].textContent).toEqual(row.firstName);
          expect(tds[1].textContent).toEqual(row.lastName);
          expect(tds[2].textContent).toEqual(row.email);
          expect(tds[3].textContent).toEqual(row.address);
        });
    });
  });
  it("should render a grid with non-sortable columns", async () => {
    const rows = Array.from(Array(23))
      .map(() => ({
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        address: faker.address.streetAddress(),
      }))
      .sort((a, b) => a.firstName.localeCompare(b.firstName));
    render(
      <CunninghamProvider>
        <SimpleDataGrid
          columns={[
            {
              field: "firstName",
              headerName: "First name",
            },
            {
              field: "lastName",
              headerName: "Last name",
            },
            {
              field: "email",
              headerName: "Email",
              enableSorting: false,
            },
            {
              field: "address",
              headerName: "Address",
            },
          ]}
          rows={rows}
          defaultPaginationParams={{
            pageSize: 10,
          }}
          defaultSortModel={[
            {
              field: "firstName",
              sort: "asc",
            },
          ]}
        />
      </CunninghamProvider>
    );

    // Make sure the sort is enabled on the first name column.
    const table = screen.getByRole("table");
    let ths = getAllByRole(table, "columnheader");
    expect(ths.length).toBe(4);
    expect(ths[0].textContent).toContain("First name");
    expect(ths[0].textContent).toContain("arrow_drop_up");
    expect(ths[2].textContent).toEqual("Email");

    // Click on the email header to make sure it is not sortable.
    const user = userEvent.setup();
    user.click(ths[2].querySelector("div")!);
    // Make sure the sort is never enabled on the email column.
    await sleep(100);
    ths = getAllByRole(table, "columnheader");
    expect(ths[0].textContent).toContain("First name");
    expect(ths[0].textContent).toContain("arrow_drop_up");
    expect(ths[2].textContent).toEqual("Email");

    // Make sure the first page is still sorted by firstName ASC.
    rows.slice(0, 10).forEach((row) => {
      const element = screen.getByTestId(row.id);
      const tds = getAllByRole(element, "cell");
      expect(tds.length).toBe(4);
      expect(tds[0].textContent).toEqual(row.firstName);
      expect(tds[1].textContent).toEqual(row.lastName);
      expect(tds[2].textContent).toEqual(row.email);
      expect(tds[3].textContent).toEqual(row.address);
    });
  });
  it("should render an empty grid", async () => {
    const rows: Row[] = [];
    render(
      <CunninghamProvider>
        <SimpleDataGrid
          columns={[
            {
              field: "firstName",
              headerName: "First name",
            },
          ]}
          rows={rows}
        />
      </CunninghamProvider>
    );

    screen.getByRole("img", { name: /illustration of an empty table/i });
    screen.getByText(/this table is empty/i);
  });
  it("should render a loading grid even if rows are empty", async () => {
    const rows: Row[] = [];
    render(
      <CunninghamProvider>
        <SimpleDataGrid
          columns={[
            {
              field: "firstName",
              headerName: "First name",
            },
          ]}
          rows={rows}
          isLoading={true}
        />
      </CunninghamProvider>
    );

    // Verify that the empty state is not rendered.
    expect(
      screen.queryByRole("img", { name: /illustration of an empty table/i })
    ).toBeNull();
    expect(screen.queryByText(/this table is empty/i)).toBeNull();

    // Verify the loading state.
    screen.getByRole("status", {
      name: "Loading data",
    });
  });
});
