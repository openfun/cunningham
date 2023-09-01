import { Meta } from "@storybook/react";
import React, { useEffect, useMemo, useState } from "react";
import { faker } from "@faker-js/faker";
import { DataGrid, SortModel } from ":/components/DataGrid/index";
import { usePagination } from ":/components/Pagination";
import { CunninghamProvider } from ":/components/Provider";
import { Button } from ":/components/Button";
import { SimpleDataGrid } from ":/components/DataGrid/SimpleDataGrid";
import { DataList } from ":/components/DataGrid/DataList";

export default {
  title: "Components/DataGrid",
  component: DataGrid,
} as Meta<typeof DataGrid>;

export const Empty = () => {
  return (
    <CunninghamProvider>
      <DataGrid
        columns={[
          {
            field: "firstName",
            headerName: "First name",
            highlight: true,
          },
        ]}
        rows={[]}
      />
    </CunninghamProvider>
  );
};

export const Loading = () => {
  return (
    <CunninghamProvider>
      <DataGrid
        columns={[
          {
            field: "firstName",
            headerName: "First name",
            highlight: true,
          },
        ]}
        rows={[]}
        isLoading={true}
      />
    </CunninghamProvider>
  );
};

export const ClientSideWithoutPagination = () => {
  const database = useMemo(
    () =>
      Array.from(Array(23)).map(() => ({
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        address: faker.location.streetAddress(),
      })),
    [],
  );
  return (
    <CunninghamProvider>
      <SimpleDataGrid
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
            enableSorting: false,
          },
          {
            headerName: "Actions",
            id: "actions",
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

export const ClientSideWithPagination = () => {
  const database = useMemo(
    () =>
      Array.from(Array(23)).map(() => ({
        id: faker.string.uuid(),
        carName: faker.company.name(),
        year: faker.date.past().getFullYear(),
        price: +faker.commerce.price({ min: 5000, max: 5005 }),
      })),
    [],
  );

  const [rowSelection, setRowSelection] = useState({});

  return (
    <CunninghamProvider>
      <SimpleDataGrid
        columns={[
          {
            field: "carName",
            headerName: "Car name",
            enableSorting: false,
          },
          {
            field: "year",
            headerName: "Year",
          },
          {
            field: "price",
            headerName: "Price ($)",
            highlight: true,
          },
        ]}
        rows={database}
        defaultPaginationParams={{
          pageSize: 5,
        }}
        defaultSortModel={[
          {
            field: "price",
            sort: "desc",
          },
        ]}
        enableRowSelection={true}
        rowSelection={rowSelection}
        onRowSelectionChange={setRowSelection}
      />
      <div>Selected rows: {Object.keys(rowSelection).join(", ")}</div>
    </CunninghamProvider>
  );
};

export const FullServerSide = () => {
  const database = useMemo(
    () =>
      Array.from(Array(191)).map(() => ({
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        address: faker.location.streetAddress(),
      })),
    [],
  );
  const [rowSelection, setRowSelection] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const pagination = usePagination({ defaultPage: 10 });
  const [sortModel, setSortModel] = useState<SortModel>([
    {
      field: "lastName",
      sort: "desc",
    },
  ]);
  const [rows, setRows] = useState<typeof database>([]);

  useEffect(() => {
    // Simulate server-side fetching.

    // Sort database. On your side this is supposed to be done on the server.
    const sortKey = sortModel.length > 0 ? sortModel[0].field : "id";
    const sortPolarity =
      sortModel.length > 0 && sortModel[0].sort === "asc" ? 1 : -1;
    const sortedDatabase = [...database].sort((a: any, b: any) => {
      if (a[sortKey] < b[sortKey]) return -sortPolarity;
      if (a[sortKey] > b[sortKey]) return sortPolarity;
      return 0;
    });

    setIsLoading(true);
    // Simulate HTTP request.
    setTimeout(() => {
      // Set the pagination length.
      pagination.setPagesCount(
        Math.ceil(sortedDatabase.length / pagination.pageSize),
      );
      // Select the rows to display on the current page.
      setRows(
        sortedDatabase.slice(
          (pagination.page - 1) * pagination.pageSize,
          pagination.page * pagination.pageSize,
        ),
      );
      setIsLoading(false);
    }, 1000);
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
          {
            id: "actions",
            renderCell: () => (
              <Button
                color="tertiary"
                size="small"
                icon={<span className="material-icons">delete</span>}
              />
            ),
          },
        ]}
        rows={rows}
        pagination={pagination}
        sortModel={sortModel}
        onSortModelChange={setSortModel}
        isLoading={isLoading}
        enableRowSelection={true}
        rowSelection={rowSelection}
        onRowSelectionChange={setRowSelection}
      />
    </CunninghamProvider>
  );
};

export const DataListOnly = () => {
  const database = useMemo(
    () =>
      Array.from(Array(5)).map((_value, index) => ({
        id: `list key for element ${index}`,
        title: faker.word.sample(),
        date: faker.date.past({ years: 1 }).toISOString(),
      })),
    [],
  );

  return (
    <CunninghamProvider>
      <DataList
        rows={database}
        columns={[
          { field: "title" },
          { field: "date" },
          {
            headerName: "actions",
            id: "actions",
            renderCell: () => {
              return (
                <Button size="small" color="secondary">
                  Do it
                </Button>
              );
            },
          },
        ]}
      />
    </CunninghamProvider>
  );
};
