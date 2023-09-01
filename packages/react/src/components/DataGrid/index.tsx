import React, { useMemo } from "react";
import classNames from "classnames";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  RowSelectionState,
  TableOptions,
  useReactTable,
} from "@tanstack/react-table";
import { Pagination, PaginationProps } from ":/components/Pagination";
import { useCunningham } from ":/components/Provider";
import { Loader } from ":/components/Loader";
import {
  paginationToPaginationState,
  sortingStateToSortModel,
  sortModelToSortingState,
  useHeadlessColumns,
} from ":/components/DataGrid/utils";
import emptyImageUrl from ":/components/DataGrid/empty.svg";

export interface Row extends Record<string, any> {
  id: string;
}

export interface ColumnField {
  id?: string;
  field: string;
  renderCell?: never;
}

export interface ColumnCustomCell<T extends Row = Row> {
  id: string;
  renderCell: (params: { row: T }) => React.ReactNode;
}

export type Column<T extends Row = Row> = (
  | ColumnCustomCell<T>
  | ColumnField
) & {
  headerName?: string;
  highlight?: boolean;
  enableSorting?: boolean;
};

export type SortModel = { field: string; sort: "asc" | "desc" | null }[];

export interface BaseProps<T extends Row = Row> {
  columns: Column<T>[];
  rows: T[];
  isLoading?: boolean;
  enableRowSelection?: TableOptions<T>["enableRowSelection"];
  onRowSelectionChange?: (newSelection: RowSelectionState) => void;
  rowSelection?: RowSelectionState;
}

interface Props<T extends Row = Row> extends BaseProps<T> {
  pagination?: PaginationProps;
  sortModel?: SortModel;
  onSortModelChange?: (newSortModel: SortModel) => void;
  /** Options for the underlying tanstack table. */
  tableOptions?: TableOptions<T>;
  displayHeader?: boolean;
}

export const DataGrid = <T extends Row>({
  columns,
  rows,
  pagination,
  sortModel,
  onSortModelChange,
  isLoading,
  enableRowSelection,
  onRowSelectionChange,
  rowSelection,
  tableOptions,
  displayHeader = true,
}: Props<T>) => {
  const { t } = useCunningham();
  const headlessColumns = useHeadlessColumns({ columns, enableRowSelection });

  /**
   * Features.
   */
  const paginationState = useMemo(
    () => paginationToPaginationState(pagination),
    [pagination],
  );
  const headlessSorting = useMemo(
    () => sortModelToSortingState(sortModel),
    [sortModel],
  );

  /**
   * Table.
   */
  const table = useReactTable({
    data: rows,
    columns: headlessColumns,
    state: {
      sorting: headlessSorting,
      rowSelection,
      pagination: paginationState,
    },
    // Sorting
    getSortedRowModel: getSortedRowModel(),
    manualSorting: true,
    onSortingChange: (newHeadlessSorting) => {
      // Should always be a function, but we must do this verification to avoid
      // a TS error.
      if (typeof newHeadlessSorting === "function") {
        onSortModelChange?.(
          sortingStateToSortModel(newHeadlessSorting(headlessSorting)),
        );
      }
    },
    // Pagination
    manualPagination: true,
    pageCount: pagination?.pagesCount ?? 0,
    onPaginationChange: (newPagination) => {
      if (paginationState && typeof newPagination === "function") {
        pagination?.onPageChange?.(newPagination(paginationState).pageIndex);
      }
    },
    // Row selection
    getCoreRowModel: getCoreRowModel(),
    enableRowSelection,
    onRowSelectionChange: (newRowSelection) => {
      if (newRowSelection && typeof newRowSelection === "function") {
        onRowSelectionChange?.(newRowSelection(rowSelection!));
      }
    },
    // Related to https://github.com/TanStack/table/issues/4555.
    getRowId: (row) => {
      return row.id;
    },
    ...tableOptions,
  });
  const isEmpty = rows.length === 0;
  const showEmptyPlaceholder = !isLoading && isEmpty;

  const getContent = () => {
    if (showEmptyPlaceholder) {
      return (
        <div className="c__datagrid__empty-placeholder fs-h3 clr-greyscale-900 fw-bold">
          <img src={emptyImageUrl} alt={t("components.datagrid.empty_alt")} />
          {t("components.datagrid.empty")}
        </div>
      );
    }
    return (
      <>
        {isLoading && (
          <div className="c__datagrid__loader">
            <div className="c__datagrid__loader__background" />
            <Loader aria-label={t("components.datagrid.loader_aria")} />
          </div>
        )}
        {!isEmpty && (
          <>
            <table>
              <thead>
                {displayHeader &&
                  table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => {
                        return (
                          <th key={header.id} colSpan={header.colSpan}>
                            {header.isPlaceholder ? null : (
                              <div
                                className={classNames(
                                  "c__datagrid__header fs-h5",
                                  {
                                    "c__datagrid__header--sortable":
                                      header.column.getCanSort(),
                                  },
                                )}
                                {...(header.column.getCanSort()
                                  ? {
                                      role: "button",
                                      tabIndex: 0,
                                      onClick:
                                        header.column.getToggleSortingHandler(),
                                    }
                                  : {})}
                              >
                                {flexRender(
                                  header.column.columnDef.header,
                                  header.getContext(),
                                )}
                                {header.column.getIsSorted() === "asc" && (
                                  <span className="material-icons">
                                    arrow_drop_up
                                  </span>
                                )}
                                {header.column.getIsSorted() === "desc" && (
                                  <span className="material-icons">
                                    arrow_drop_down
                                  </span>
                                )}
                                {!header.column.getIsSorted() && (
                                  <span className="c__datagrid__header__icon-placeholder" />
                                )}
                              </div>
                            )}
                          </th>
                        );
                      })}
                    </tr>
                  ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id} data-testid={row.id}>
                    {row.getVisibleCells().map((cell, i) => {
                      let highlight = false;
                      if (enableRowSelection && i > 0) {
                        // Enabling selection adds a column at the beginning of the table.
                        highlight = !!columns[i - 1].highlight;
                      } else {
                        highlight = !!columns[i].highlight;
                      }
                      return (
                        <td
                          key={cell.id}
                          className={classNames({
                            "c__datagrid__row__cell--highlight": highlight,
                            "c__datagrid__row__cell--actions":
                              cell.column.id === "actions",
                          })}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
            {!!pagination && <Pagination {...pagination} />}
          </>
        )}
      </>
    );
  };

  return (
    <div
      className={classNames("c__datagrid", {
        "c__datagrid--empty": isEmpty,
        "c__datagrid--loading": isLoading,
      })}
    >
      {getContent()}
    </div>
  );
};
