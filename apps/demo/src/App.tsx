import { Button, CunninghamProvider, Select } from "@openfun/cunningham-react";
import React, { useEffect, useMemo, useState } from "react";
import { Create } from "./Create";
import { Home } from "./Home";

enum Theme {
  CUNNINGHAM = "cunningham",
  REDFLUX = "redflux",
}

enum Variant {
  LIGHT = "light",
  DARK = "dark",
}

const THEMES: Record<Theme, Record<Variant, string | undefined>> = {
  [Theme.CUNNINGHAM]: {
    light: "default",
    dark: "dark",
  },
  [Theme.REDFLUX]: {
    light: undefined,
    dark: "redflux_dark",
  },
};

export enum Page {
  HOME,
  CREATE,
}

export interface PageProps {
  changePage: (page: Page) => void;
}

const preferredScheme = window.matchMedia("(prefers-color-scheme: dark)")
  .matches
  ? { theme: Theme.CUNNINGHAM, variant: Variant.DARK }
  : { theme: Theme.CUNNINGHAM, variant: Variant.LIGHT };

export const App = () => {
  const [locale] = useState("en-US");
  const [theme, setTheme] = useState<Theme>(
    (sessionStorage.getItem("c-theme") as Theme | null) ??
      preferredScheme.theme,
  );
  const [variant, setVariant] = useState<Variant>(
    (sessionStorage.getItem("c-variant") as Variant | null) ??
      preferredScheme.variant,
  );
  const activeTheme = useMemo(() => THEMES[theme][variant], [theme, variant]);
  const [page, setPage] = useState<Page>(Page.HOME);
  const handleThemeChange = (event: MediaQueryListEvent) => {
    const nextVariant = event.matches ? Variant.DARK : Variant.LIGHT;
    if (THEMES[theme][nextVariant] !== undefined) {
      setVariant(nextVariant);
    }
  };

  useEffect(() => {
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    query.addEventListener("change", handleThemeChange);

    return () => {
      query.removeEventListener("change", handleThemeChange);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-variant", variant);
    sessionStorage.setItem("c-theme", theme);
    sessionStorage.setItem("c-variant", variant);
  }, [theme, variant]);

  return (
    <CunninghamProvider currentLocale={locale} theme={activeTheme}>
      <div className="container">
        {theme === Theme.CUNNINGHAM && (
          <img
            className="pattern"
            src={
              variant === Variant.DARK
                ? "pattern_dark.png"
                : "pattern_default.png"
            }
            alt="Background pattern"
          />
        )}
        {page === Page.HOME && <Home changePage={(p) => setPage(p)} />}
        {page === Page.CREATE && <Create changePage={(p) => setPage(p)} />}
      </div>

      <div className="theme-switch">
        <Select
          value={theme}
          label="Theme"
          clearable={false}
          options={Object.keys(THEMES).map((key) => ({
            value: key,
            label: key[0].toUpperCase() + key.slice(1),
          }))}
          onChange={(e) => {
            setTheme(e.target.value as Theme);
            if (THEMES[e.target.value as Theme][variant] === undefined) {
              setVariant(
                variant === Variant.LIGHT ? Variant.DARK : Variant.LIGHT,
              );
            }
          }}
        />
        <Button
          color="tertiary"
          icon={
            <span className="material-icons">
              {variant === Variant.DARK ? "light_mode" : "dark_mode"}
            </span>
          }
          onClick={() => {
            setVariant(
              variant === Variant.LIGHT ? Variant.DARK : Variant.LIGHT,
            );
          }}
          disabled={
            THEMES[theme][
              variant === Variant.LIGHT ? Variant.DARK : Variant.LIGHT
            ] === undefined
          }
        />
      </div>
    </CunninghamProvider>
  );
};
