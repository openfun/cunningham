import { Meta } from "@storybook/react";
import React, { useEffect, useMemo, useState } from "react";
import { faker } from "@faker-js/faker";
import { DataGrid, SortModel } from ":/components/DataGrid/index";
import { usePagination } from ":/components/Pagination";
import { Button } from ":/components/Button";
import { SimpleDataGrid } from ":/components/DataGrid/SimpleDataGrid";
import { DataList } from ":/components/DataGrid/DataList";

export default {
  title: "Components/DataGrid",
  component: DataGrid,
} as Meta<typeof DataGrid>;

export const Empty = () => {
  return (
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
  );
};
export const EmptyCustomWithButton = () => {
  return (
    <DataGrid
      columns={[
        {
          field: "firstName",
          headerName: "First name",
          highlight: true,
        },
      ]}
      rows={[]}
      emptyPlaceholderLabel="This table is empty, create the first object"
      emptyCta={
        <Button
          color="secondary"
          icon={<span className="material-icons">add</span>}
        >
          Create object
        </Button>
      }
    />
  );
};

export const EmptyCustomNoImage = () => {
  return (
    <DataGrid
      columns={[
        {
          field: "firstName",
          headerName: "First name",
          highlight: true,
        },
      ]}
      rows={[]}
      hideEmptyPlaceholderImage={true}
      emptyPlaceholderLabel="This table is empty :("
    />
  );
};

export const Loading = () => {
  return (
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
              color="tertiary-text"
              size="small"
              icon={<span className="material-icons">delete</span>}
            />
          ),
        },
      ]}
      rows={database}
    />
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
    <>
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
    </>
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
        country: faker.location.countryCode(),
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
          headerName: "Country",
          field: "country",
          renderCell: (context) => {
            return (
              <span
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <img
                  style={{ height: "24px" }}
                  src={`https://flagsapi.com/${context.row.country}/shiny/64.png`}
                  alt="Flag"
                />
                {context.row.country}
              </span>
            );
          },
        },
        {
          id: "actions",
          renderCell: () => (
            <Button
              color="tertiary-text"
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
  );
};
