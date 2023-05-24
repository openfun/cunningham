import {
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
    const opts = {
      id: column.field ?? "actions",
      enableSorting: column.enableSorting,
      header: column.headerName,
    };
    if (column.field) {
      // The any cast is needed because the type of the accessor is hard-defined on react-table.
      // On our side we only use string as type for simplicity purpose.
      return columnHelper.accessor(column.field as any, opts);
    }
    return columnHelper.display({
      ...opts,
      cell: (info) => {
        return column.renderCell!({ row: info.row.original });
      },
    });
  });
  if (enableRowSelection) {
    headlessColumns = [
      columnHelper.display({
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={table.getIsAllRowsSelected()}
            indeterminate={table.getIsSomeRowsSelected()}
            onChange={table.getToggleAllRowsSelectedHandler()}
            aria-label={t("components.datagrid.rows_selection_aria")}
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            disabled={!row.getCanSelect}
            indeterminate={row.getIsSomeSelected()}
            onChange={row.getToggleSelectedHandler()}
            aria-label={t("components.datagrid.row_selection_aria")}
          />
        ),
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
  pagination?: PaginationProps
): PaginationState | undefined => {
  if (!pagination) {
    return undefined;
  }
  return {
    pageIndex: pagination.page ?? 0,
    pageSize: pagination.pageSize,
  };
};
