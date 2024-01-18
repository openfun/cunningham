import { Button, CunninghamProvider } from "@openfun/cunningham-react";
import React, { useEffect, useState } from "react";
import { Create } from "./Create";
import { Home } from "./Home";

enum Theme {
  DEFAULT = "default",
  DARK = "dark",
}

export enum Page {
  HOME,
  CREATE,
}

export interface PageProps {
  changePage: (page: Page) => void;
}

const preferredScheme = window.matchMedia("(prefers-color-scheme: dark)")
  .matches
  ? Theme.DARK
  : Theme.DEFAULT;

export const App = () => {
  const [locale] = useState("en-US");
  const [theme, setTheme] = useState<Theme>(preferredScheme);
  const [page, setPage] = useState<Page>(Page.HOME);
  const handleThemeChange = (event: MediaQueryListEvent) =>
    setTheme(event.matches ? Theme.DARK : Theme.DEFAULT);

  useEffect(() => {
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    query.addEventListener("change", handleThemeChange);

    return () => {
      query.removeEventListener("change", handleThemeChange);
    };
  }, []);

  return (
    <CunninghamProvider currentLocale={locale} theme={theme}>
      <div className="container">
        <img
          className="pattern"
          src={
            theme === Theme.DARK ? "pattern_dark.png" : "pattern_default.png"
          }
          alt="Background pattern"
        />
        {page === Page.HOME && <Home changePage={(p) => setPage(p)} />}
        {page === Page.CREATE && <Create changePage={(p) => setPage(p)} />}
      </div>

      <div className="theme-switch">
        <Button
          color="tertiary"
          icon={
            <span className="material-icons">
              {theme === Theme.DARK ? "light_mode" : "dark_mode"}
            </span>
          }
          onClick={() => {
            setTheme(theme === Theme.DARK ? Theme.DEFAULT : Theme.DARK);
          }}
        />
      </div>
    </CunninghamProvider>
  );
};
