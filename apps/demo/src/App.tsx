import { Button, usePagination, Pagination } from "@openfun/cunningham-react";
import React from "react";
import { tokens } from "./cunningham-tokens";

export const App = () => {
  const pagination = usePagination({ defaultPage: 50, defaultPagesCount: 100 });
  return (
    <div className="center">
      <h1 className="test">Cunningham Demo.</h1>
      <Button>World best button.</Button>
      <h3>Primary-500 color is {tokens.theme.colors["primary-500"]}</h3>
      <Pagination {...pagination} />
    </div>
  );
};
