import { render, screen } from "@testing-library/react";
import React, { PropsWithChildren, useMemo, useState } from "react";
import userEvent from "@testing-library/user-event";
import { expect } from "vitest";
import {
  CunninghamProvider,
  DEFAULT_LOCALE,
  useCunningham,
} from ":/components/Provider/index";
import * as enUS from ":/locales/en-US.json";
import { Button } from ":/components/Button";

describe("<CunninghamProvider />", () => {
  it("should render", () => {
    render(
      <CunninghamProvider>
        <h1>Hi</h1>
      </CunninghamProvider>,
    );
    screen.getByRole("heading", { level: 1, name: "Hi" });
  });

  it("should render accurate translation", () => {
    const Wrapper = (props: PropsWithChildren) => {
      return <CunninghamProvider>{props.children}</CunninghamProvider>;
    };
    const Wrapped = () => {
      const { t } = useCunningham();
      return <h1>{t("components.provider.test", { name: "Bob" })}</h1>;
    };

    render(<Wrapped />, { wrapper: Wrapper });
    screen.getByRole("heading", { level: 1, name: "This is a test: Bob" });
  });

  it("should render custom translations and switching", async () => {
    const Wrapper = (props: PropsWithChildren) => {
      // Create a new locale with a custom translation.
      const zuBU = useMemo(() => {
        const base = JSON.parse(JSON.stringify(enUS));
        base.components.provider.test = "Zubu Zubu";
        return base;
      }, []);

      const [currentLocale, setCurrentLocale] = useState("en-US");

      const onSwitch = () => {
        setCurrentLocale(currentLocale === "en-US" ? "zu-BU" : "en-US");
      };

      return (
        <CunninghamProvider
          customLocales={{
            "zu-BU": zuBU,
          }}
          currentLocale={currentLocale}
        >
          {props.children}
          <Button onClick={onSwitch}>Switch</Button>
        </CunninghamProvider>
      );
    };
    const Wrapped = () => {
      const { t } = useCunningham();
      return <h1>{t("components.provider.test", { name: "Bob" })}</h1>;
    };

    render(<Wrapped />, { wrapper: Wrapper });
    screen.getByRole("heading", { level: 1, name: "This is a test: Bob" });

    const switchButton = screen.getByRole("button", { name: "Switch" });
    const user = userEvent.setup();
    user.click(switchButton);

    await screen.findByRole("heading", { level: 1, name: "Zubu Zubu" });
  });

  it("should use default locale for undefined translations in current locale", () => {
    const Wrapper = (props: PropsWithChildren) => {
      return (
        <CunninghamProvider currentLocale="tu-TU">
          {props.children}
        </CunninghamProvider>
      );
    };
    const Wrapped = () => {
      const { t } = useCunningham();
      return <h1>{t("components.provider.test", { name: "Bob" })}</h1>;
    };

    render(<Wrapped />, { wrapper: Wrapper });
    screen.getByRole("heading", { level: 1, name: "This is a test: Bob" });
  });

  it("should use key as translation when the key is not defined across current locale and default locale", () => {
    const Wrapper = (props: PropsWithChildren) => {
      return <CunninghamProvider>{props.children}</CunninghamProvider>;
    };
    const Wrapped = () => {
      const { t } = useCunningham();
      return <h1>{t("components.will_never_exist")}</h1>;
    };

    render(<Wrapped />, { wrapper: Wrapper });
    screen.getByRole("heading", {
      level: 1,
      name: "components.will_never_exist",
    });
  });

  it("should return current locale", () => {
    const locale = "fr-FR";
    const Wrapper = (props: PropsWithChildren) => {
      return (
        <CunninghamProvider currentLocale={locale}>
          {props.children}
        </CunninghamProvider>
      );
    };
    const Wrapped = () => {
      const { currentLocale } = useCunningham();
      expect(currentLocale).eq(locale);
      return <div />;
    };
    render(<Wrapped />, { wrapper: Wrapper });
  });

  it("should return default locale if no current locale is provided", () => {
    const Wrapper = (props: PropsWithChildren) => {
      return <CunninghamProvider>{props.children}</CunninghamProvider>;
    };
    const Wrapped = () => {
      const { currentLocale } = useCunningham();
      expect(currentLocale).eq(DEFAULT_LOCALE);
      return <div />;
    };
    render(<Wrapped />, { wrapper: Wrapper });
  });

  it("should return default locale if the current locale is not supported", () => {
    const wrongLocale = "fr_FR";
    const Wrapper = (props: PropsWithChildren) => {
      return (
        <CunninghamProvider currentLocale={wrongLocale}>
          {props.children}
        </CunninghamProvider>
      );
    };
    const Wrapped = () => {
      const { currentLocale } = useCunningham();
      expect(currentLocale).eq(DEFAULT_LOCALE);
      return <div />;
    };
    render(<Wrapped />, { wrapper: Wrapper });
  });

  it("should change theme by updating :root classes", async () => {
    const Wrapper = (props: PropsWithChildren) => {
      const [theme, setTheme] = useState("default");
      return (
        <CunninghamProvider theme={theme}>
          <Button onClick={() => setTheme("default")}>Default</Button>
          <Button onClick={() => setTheme("dark")}>Dark</Button>
          <Button onClick={() => setTheme("custom")}>Custom</Button>
          {props.children}
        </CunninghamProvider>
      );
    };
    render(<Wrapper />);

    expect(document.querySelector(":root")).toHaveClass(
      "cunningham-theme--default",
    );

    const user = userEvent.setup();
    const darkButton = screen.getByRole("button", { name: "Dark" });
    await user.click(darkButton);

    expect(document.querySelector(":root")).toHaveClass(
      "cunningham-theme--dark",
    );
    const customButton = screen.getByRole("button", { name: "Custom" });
    await user.click(customButton);

    expect(Array.from(document.querySelector(":root")!.classList)).toEqual([
      "cunningham-theme--custom",
    ]);
  });
});
