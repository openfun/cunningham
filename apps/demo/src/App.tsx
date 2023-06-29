import {
  Button,
  CunninghamProvider,
  Pagination,
  SUPPORTED_LOCALES,
  Switch,
  usePagination,
} from "@openfun/cunningham-react";
import React, { useState } from "react";
import { tokens } from "./cunningham-tokens";

export const App = () => {
  const pagination = usePagination({ defaultPage: 50, defaultPagesCount: 100 });
  const [locale, setLocale] = useState("en-US");
  return (
    <CunninghamProvider currentLocale={locale}>
      <div className="center">
        <h1 className="test">Cunningham Demo.</h1>
        <select
          className="mb-s"
          value={locale}
          onChange={(e) => setLocale(e.target.value)}
        >
          {SUPPORTED_LOCALES.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
        <Switch defaultChecked={true} />
        <Button>World best button.</Button>
        <h3>Primary-500 color is {tokens.theme.colors["primary-500"]}</h3>
        <Pagination {...pagination} />
      </div>
    </CunninghamProvider>
  );
};
