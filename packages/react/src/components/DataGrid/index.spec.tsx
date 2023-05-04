import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { act, render, screen, waitFor } from "@testing-library/react";
import { getAllByRole, getByRole } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { usePagination } from ":/components/Pagination";
import { DataGrid, SortModel } from ":/components/DataGrid/index";
import { CunninghamProvider } from ":/components/Provider";
import { Deferred } from ":/tests/deferred";
import { expectPaginationList } from ":/components/Pagination/utils";
import { Button } from ":/components/Button";

describe("<DataGrid/>", () => {
  afterEach(() => {});

  it("should render a grid with server-side loading", async () => {
    const database = Array.from(Array(23)).map(() => ({
      id: faker.datatype.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      address: faker.address.streetAddress(),
    }));

    const Component = () => {
      const [isLoading, setIsLoading] = useState(true);
      const pagination = usePagination({});
      const [sortModel, setSortModel] = useState<SortModel>([
        {
          field: "lastName",
          sort: "desc",
        },
      ]);
      const [rows, setRows] = useState<any[]>([]);

      useEffect(() => {
        setIsLoading(true);

        const fetchData = async () => {
          const query: any = {
            page: pagination.page,
          };
          if (sortModel.length > 0) {
            query.sort = sortModel[0].field;
            query.sortOrder = sortModel[0].sort;
          }

          // Simulate HTTP request.
          // eslint-disable-next-line compat/compat
          const queryString = new URLSearchParams(query);
          const response = await fetch("https://example.com?" + queryString);
          const data = await response.json();

          // Set the pagination length.
          pagination.setPagesCount(Math.ceil(data.count / pagination.pageSize));
          // Select the rows to display on the current page.
          setRows(data.rows);
          setIsLoading(false);
        };
        fetchData();
      }, [pagination.page, sortModel]);

      return (
        <CunninghamProvider>
          <DataGrid
            columns={[
              {
                field: "firstName",
                headerName: "First name",
                highlight: true,
              },
              {
                field: "lastName",
                headerName: "Last name",
              },
              {
                field: "email",
                headerName: "Email",
                highlight: true,
              },
              {
                field: "address",
                headerName: "Address",
              },
            ]}
            rows={rows}
            pagination={pagination}
            sortModel={sortModel}
            onSortModelChange={setSortModel}
            isLoading={isLoading}
          />
        </CunninghamProvider>
      );
    };

    let deferred = new Deferred<string>();

    fetchMock.mockIf(
      "https://example.com/?page=1&sort=lastName&sortOrder=desc",
      () => deferred.promise
    );

    render(<Component />);

    // Make sure it is loading.
    expect(screen.queryAllByRole("row").length).toBe(0);
    screen.getByRole("status", {
      name: "Loading data",
    });

    // Resolve request.
    database.sort((a, b) => a.firstName.localeCompare(b.firstName));
    await act(() =>
      deferred.resolve(
        JSON.stringify({
          rows: database.slice(0, 10),
          count: database.length,
        })
      )
    );

    // Make sure the loader disappears.
    await waitFor(() =>
      expect(
        screen.queryByRole("status", {
          name: "Loading data",
        })
      ).toBeNull()
    );

    // Make sure the rows are rendered.
    await waitFor(() => {
      expect(screen.getAllByRole("row").length).toBe(11);
      database.slice(0, 10).forEach((row) => {
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
      { text: "1", name: "You are currently on page 1" },
      { text: "2", name: "Go to page 2" },
      { text: "3", name: "Go to page 3" },
      { text: "navigate_next", name: "Go to next page" },
    ]);

    // Mock page 2 fetch.
    deferred = new Deferred();
    fetchMock.mockIf(
      "https://example.com/?page=2&sort=lastName&sortOrder=desc",
      () => deferred.promise
    );

    // Go to page 2.
    const nextButton = screen.getByRole("button", {
      name: "Go to next page",
    });
    const user = userEvent.setup();
    user.click(nextButton);

    // While loading it still shows the previous page.
    await waitFor(() => {
      screen.getByRole("status", {
        name: "Loading data",
      });
      expect(screen.getAllByRole("row").length).toBe(11);
      database.slice(0, 10).forEach((row) => {
        const element = screen.getByTestId(row.id);
        const tds = getAllByRole(element, "cell");
        expect(tds.length).toBe(4);
        expect(tds[0].textContent).toEqual(row.firstName);
        expect(tds[1].textContent).toEqual(row.lastName);
        expect(tds[2].textContent).toEqual(row.email);
        expect(tds[3].textContent).toEqual(row.address);
      });
    });

    // Resolve page 2 mock.
    await act(() =>
      deferred.resolve(
        JSON.stringify({
          rows: database.slice(10, 20),
          count: database.length,
        })
      )
    );

    // Make sure the loader disappears.
    await waitFor(() =>
      expect(
        screen.queryByRole("status", {
          name: "Loading data",
        })
      ).toBeNull()
    );

    // Make sure the rows are rendered.
    await waitFor(() => {
      expect(screen.getAllByRole("row").length).toBe(11);
      database.slice(10, 20).forEach((row) => {
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
  it("should render custom cells", async () => {
    const database = Array.from(Array(10)).map(() => ({
      id: faker.datatype.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      address: faker.address.streetAddress(),
    }));

    const Component = () => {
      return (
        <CunninghamProvider>
          <DataGrid
            columns={[
              {
                field: "firstName",
                headerName: "First name",
                highlight: true,
              },
              {
                renderCell: () => (
                  <Button
                    color="tertiary"
                    size="small"
                    icon={<span className="material-icons">delete</span>}
                  />
                ),
              },
            ]}
            rows={database}
          />
        </CunninghamProvider>
      );
    };

    render(<Component />);

    database.forEach((row) => {
      const element = screen.getByTestId(row.id);
      const tds = getAllByRole(element, "cell");
      expect(tds.length).toBe(2);
      expect(tds[0].textContent).toEqual(row.firstName);
      getByRole(tds[1], "button", {
        name: "delete",
      });
    });
  });
  it("should render highlighted column", async () => {
    const database = Array.from(Array(10)).map(() => ({
      id: faker.datatype.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      address: faker.address.streetAddress(),
    }));

    const Component = () => {
      return (
        <CunninghamProvider>
          <DataGrid
            columns={[
              {
                field: "firstName",
                headerName: "First name",
                highlight: true,
              },
              {
                field: "lastName",
                headerName: "Last name",
              },
              {
                field: "email",
                headerName: "Email",
                highlight: true,
              },
            ]}
            rows={database}
          />
        </CunninghamProvider>
      );
    };

    render(<Component />);

    const table = screen.getByRole("table");
    const ths = getAllByRole(table, "columnheader");
    expect(ths.length).toBe(3);
    expect(ths[0].textContent).toEqual("First name");
    expect(ths[1].textContent).toEqual("Last name");
    expect(ths[2].textContent).toEqual("Email");

    database.forEach((row) => {
      const element = screen.getByTestId(row.id);
      const tds = getAllByRole(element, "cell");
      expect(tds.length).toBe(3);
      expect(tds[0].textContent).toEqual(row.firstName);
      expect(Array.from(tds[0].classList)).toContain(
        "c__datagrid__row__cell--highlight"
      );
      expect(tds[1].textContent).toEqual(row.lastName);
      expect(Array.from(tds[1].classList)).not.toContain(
        "c__datagrid__row__cell--highlight"
      );
      expect(tds[2].textContent).toEqual(row.email);
      expect(Array.from(tds[2].classList)).toContain(
        "c__datagrid__row__cell--highlight"
      );
    });
  });
});
