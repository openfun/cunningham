import {
  CellContext,
  ColumnDef,
  createColumnHelper,
  PaginationState,
  SortingState,
} from "@tanstack/react-table";
import React from "react";
import { Checkbox } from ":/components/Forms/Checkbox";
import { PaginationProps } from ":/components/Pagination";
import { BaseProps, Column, Row, SortModel } from ":/components/DataGrid/index";
import { useCunningham } from ":/components/Provider";

export const HEADER_ID_SELECT = "cunningham-select";

/**
 * Converts Cunningham's columns to the underlying tanstack table.
 */
export const useHeadlessColumns = <T extends Row>({
  columns,
  enableRowSelection,
}: {
  columns: Column<T>[];
  enableRowSelection?: BaseProps<T>["enableRowSelection"];
}): ColumnDef<T, any>[] => {
  const { t } = useCunningham();
  const columnHelper = createColumnHelper<T>();
  let headlessColumns = columns.map((column) => {
    // Based on types we can assume that at least one of both is defined.
    const id = (column.id ?? column.field) as string;
    const opts = {
      id,
      enableSorting:
        column.enableSorting === undefined ? true : column.enableSorting,
      header: column.headerName,
      size: column.size,
      cell: (info: CellContext<any, any>) => {
        if (column.renderCell) {
          return column.renderCell({ row: info.row.original });
        }
        return info.cell.getValue();
      },
    };
    if (column.field) {
      return columnHelper.accessor(column.field as any, opts);
    }
    return columnHelper.display(opts);
  });
  if (enableRowSelection) {
    headlessColumns = [
      columnHelper.display({
        id: HEADER_ID_SELECT,
        size: 34,
        header: () => null,
        cell: ({ row }) => {
          if (!row.getCanSelect()) {
            return null;
          }
          return (
            <Checkbox
              checked={row.getIsSelected()}
              disabled={!row.getCanSelect}
              indeterminate={row.getIsSomeSelected()}
              onChange={row.getToggleSelectedHandler()}
              aria-label={t("components.datagrid.row_selection_aria")}
            />
          );
        },
      }),
      ...headlessColumns,
    ];
  }
  return headlessColumns;
};

export const sortModelToSortingState = (sortModel?: SortModel) => {
  if (!sortModel) {
    return [];
  }
  return (
    sortModel
      // Remove sort: null values.
      .filter((sort) => !!sort.sort)
      .map((sort) => ({
        id: sort.field,
        desc: sort.sort === "desc",
      }))
  );
};

export const sortingStateToSortModel = (sorting: SortingState): SortModel => {
  return sorting.map((sort) => ({
    field: sort.id,
    sort: sort.desc ? "desc" : "asc",
  }));
};

export const paginationToPaginationState = (
  pagination?: PaginationProps,
): PaginationState | undefined => {
  if (!pagination) {
    return undefined;
  }
  return {
    pageIndex: pagination.page ?? 0,
    pageSize: pagination.pageSize,
  };
};
