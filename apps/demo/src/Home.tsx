import React, { useEffect, useState } from "react";
import {
  Button,
  DataGrid,
  SortModel,
  usePagination,
  useToastProvider,
  VariantType,
  useModals,
} from "@openfun/cunningham-react";
import { PageProps } from "./App";
import { database } from "./Character";

export const Home = ({ modal }: { modal: PageProps }) => {
  const { toast } = useToastProvider();
  const modals = useModals();
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
  }, [pagination.page, sortModel, modal.isOpen, refresh]);

  return (
    <main className="page__home">
      <header className="page__home__title">
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
          onClick={modal.open}
        >
          Add character
        </Button>
      </header>
      <section>
        <div className="card">
          <DataGrid
            columns={[
              {
                field: "name",
                headerName: "Name",
              },
              {
                id: "sex",
                headerName: "Sex",
                renderCell: (params) => {
                  return (
                    <span className="material-icons">{params.row.sex}</span>
                  );
                },
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
                  return params.row.isGuest ? (
                    <span className="material-icons ml-s">check_box</span>
                  ) : (
                    <span className="material-icons ml-s">
                      check_box_outline_blank
                    </span>
                  );
                },
              },
              {
                id: "actions",
                renderCell: (params) => (
                  <Button
                    color="tertiary-text"
                    size="small"
                    onClick={async () => {
                      const decision = await modals.deleteConfirmationModal();
                      if (!decision) {
                        return;
                      }
                      const index = database.findIndex(
                        (character) => character.id === params.row.id,
                      );
                      database.splice(index, 1);
                      setRefresh(refresh + 1);
                      toast(
                        "Character deleted successfully",
                        VariantType.WARNING,
                      );
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
      </section>
      <footer className="links">
        <ul>
          <li>
            <Button
              size="small"
              color="tertiary-text"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.france-universite-numerique.fr/en/"
            >
              France Université Numérique
            </Button>
          </li>
        </ul>
        <ul>
          <li>
            <Button
              size="small"
              color="tertiary-text"
              target="_blank"
              rel="noopener noreferrer"
              href="https://discord.gg/TXPSCMeDzd"
            >
              Discord
            </Button>
          </li>
          <li>
            <Button
              size="small"
              color="tertiary-text"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/openfun/cunningham"
            >
              Github
            </Button>
          </li>
          <li>
            <Button
              size="small"
              color="tertiary-text"
              target="_blank"
              rel="noopener noreferrer"
              href="https://openfun.github.io/cunningham/storybook"
            >
              Documentation
            </Button>
          </li>
          <li>
            <Button
              size="small"
              color="tertiary-text"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.figma.com/file/JbPT1R6YUFW4oH8jHvH960/DS-Cunningham---PUBLIC?type=design"
            >
              UI Kit
            </Button>
          </li>
        </ul>
      </footer>
    </main>
  );
};
