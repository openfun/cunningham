import React, { useEffect, useState } from "react";
import {
  Button,
  DataGrid,
  SortModel,
  ToastType,
  usePagination,
  useToastProvider,
} from "@openfun/cunningham-react";
import { Page, PageProps } from "./App";
import { database } from "./Character";

export const Home = ({ changePage }: PageProps) => {
  const { toast } = useToastProvider();
  const [rowSelection, setRowSelection] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const pagination = usePagination({ defaultPage: 1 });
  const [sortModel, setSortModel] = useState<SortModel>([
    {
      field: "lastName",
      sort: "desc",
    },
  ]);
  const [rows, setRows] = useState<typeof database>([]);
  const [refresh, setRefresh] = useState(1);

  useEffect(() => {
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
  }, [pagination.page, sortModel, refresh]);

  return (
    <div className="page__home">
      <div className="page__home__title">
        <h1 className="clr-greyscale-900">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          🍿Cunningham's <span className="clr-primary-400">Cast</span>
        </h1>
        <p className="clr-greyscale-600 fs-m fw-regular">
          Happy Days is an American television sitcom that aired first-run from
          January 15, 1974, to September 24, 1984, on ABC-TV
          <br /> with a total of 255 half-hour episodes spanning over eleven
          seasons. <br />
          <br />
          Created by Garry Marshall, the series presented an idealized vision of
          life in the mid-1950s to mid-1960s Midwestern United States.
        </p>
        <Button
          color="primary"
          icon={<span className="material-icons">movie</span>}
          onClick={() => changePage(Page.CREATE)}
        >
          Add character
        </Button>
      </div>
      <div className="card">
        <DataGrid
          columns={[
            {
              field: "name",
              headerName: "Name",
            },
            {
              field: "gender",
              headerName: "Gender",
            },
            {
              id: "birthDate",
              headerName: "Birth Date",
              renderCell: (params) => {
                return params.row.birthDate.toLocaleDateString();
              },
            },
            {
              id: "firstAppearanceDate",
              headerName: "First Appearance",
              renderCell: (params) => {
                return params.row.firstAppearanceDate.toLocaleDateString();
              },
            },
            {
              id: "isGuest",
              headerName: "Is Guest",
              renderCell: (params) => {
                return params.row.isGuest ? "yes" : "no";
              },
            },
            {
              id: "actions",
              renderCell: (params) => (
                <Button
                  color="tertiary-text"
                  size="small"
                  onClick={() => {
                    const index = database.findIndex(
                      (character) => character.id === params.row.id,
                    );
                    database.splice(index, 1);
                    setRefresh(refresh + 1);
                    toast("Character deleted successfully", ToastType.WARNING);
                  }}
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
      </div>
    </div>
  );
};
