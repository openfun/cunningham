import {
  Button,
  CunninghamProvider,
  Pagination,
  Select,
  SUPPORTED_LOCALES,
  Switch,
  usePagination,
} from "@openfun/cunningham-react";
import React, { useState } from "react";
import { tokens } from "./cunningham-tokens";

enum Theme {
  DEFAULT = "default",
  DARK = "dark",
}

const THEMES: Theme[] = [Theme.DEFAULT, Theme.DARK];

export const App = () => {
  const pagination = usePagination({ defaultPage: 50, defaultPagesCount: 100 });
  const [locale, setLocale] = useState("en-US");
  const [theme, setTheme] = useState<Theme>(Theme.DEFAULT);
  return (
    <CunninghamProvider currentLocale={locale} theme={theme}>
      <div className="center">
        <h1 className="clr-greyscale-900">Cunningham Demo.</h1>

        <div className="mb-s">
          <Select
            label="Locale"
            options={SUPPORTED_LOCALES.map((v) => ({
              label: v,
            }))}
            clearable={false}
            value={locale}
            onChange={(e) => setLocale(e.target.value as string)}
          />
        </div>

        <Select
          label="Theme"
          options={THEMES.map((v) => ({
            label: v,
          }))}
          clearable={false}
          value={THEMES[0]}
          onChange={(e) => setTheme(e.target.value as Theme)}
        />

        <div className="p-s">
          <Switch defaultChecked={true} label="Switch" />
        </div>
        <Button>World best button.</Button>
        <h3 className="clr-greyscale-900">
          Primary-500 color is{" "}
          {tokens.themes[theme].theme.colors["primary-500"]}
        </h3>
        <Pagination {...pagination} />
      </div>
    </CunninghamProvider>
  );
};
