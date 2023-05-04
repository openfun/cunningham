import React, { useEffect, useMemo, useState } from "react";
import { usePagination } from ":/components/Pagination";
import {
  BaseProps,
  DataGrid,
  Row,
  SortModel,
} from ":/components/DataGrid/index";

/**
 * Handles sorting, pagination.
 */
export const SimpleDataGrid = ({
  rows,
  defaultPaginationParams,
  defaultSortModel = [],
  ...props
}: BaseProps & {
  /** Pagination default props, should never change. */
  defaultPaginationParams?: Parameters<typeof usePagination>[0] | boolean;
  /** Pagination default props, should never change. */
  defaultSortModel?: SortModel;
}) => {
  const [realRows, setRealRows] = useState<Row[]>([]);
  const [sortModel, setSortModel] = useState<SortModel>(defaultSortModel);
  const realPaginationParams = useMemo(() => {
    if (typeof defaultPaginationParams === "boolean") {
      return {};
    }
    return defaultPaginationParams;
  }, [defaultPaginationParams]);

  const pagination = realPaginationParams
    ? usePagination(realPaginationParams)
    : undefined;

  useEffect(() => {
    pagination?.setPagesCount(Math.ceil(rows.length / pagination.pageSize));
  }, [rows]);

  useEffect(() => {
    const sortKey = sortModel.length > 0 ? sortModel[0].field : "id";
    const sortPolarity =
      sortModel.length > 0 && sortModel[0].sort === "asc" ? 1 : -1;
    const sortedRows = [...rows].sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return -sortPolarity;
      if (a[sortKey] > b[sortKey]) return sortPolarity;
      return 0;
    });

    if (pagination) {
      setRealRows(
        sortedRows.slice(
          (pagination.page - 1) * pagination.pageSize,
          pagination.page * pagination.pageSize
        )
      );
    } else {
      setRealRows(sortedRows);
    }
  }, [pagination?.page, sortModel, rows]);

  return (
    <DataGrid
      {...props}
      pagination={pagination}
      rows={realRows}
      sortModel={sortModel}
      onSortModelChange={setSortModel}
    />
  );
};
