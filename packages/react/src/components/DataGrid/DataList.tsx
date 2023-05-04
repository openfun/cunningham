import React from "react";
import { BaseProps, DataGrid } from ":/components/DataGrid/index";

export const DataList = ({ rows, ...props }: BaseProps) => {
  return <DataGrid {...props} displayHeader={false} rows={rows} />;
};
