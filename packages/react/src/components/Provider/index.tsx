import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
} from "react";
import * as enUS from ":/locales/en-US.json";
import * as frFR from ":/locales/fr-FR.json";
import { PartialNested } from ":/types";
import { Locales } from ":/components/Provider/Locales";

type TranslationSet = PartialNested<typeof enUS>;

const CunninghamContext = createContext<
  | undefined
  | {
      t: (key: string, vars?: Record<string, string | number>) => string;
      currentLocale: string;
    }
>(undefined);

export const useCunningham = () => {
  const context = useContext(CunninghamContext);
  if (context === undefined) {
    throw new Error("useCunningham must be used within a CunninghamProvider.");
  }
  return context;
};

interface Props extends PropsWithChildren {
  customLocales?: Record<string, TranslationSet>;
  currentLocale?: string;
  theme?: string;
}

export const DEFAULT_LOCALE = Locales.enUS;
export const DEFAULT_THEME = "default";
export const SUPPORTED_LOCALES = Object.values(Locales);
const THEME_CLASSNAME_PREFIX = "cunningham-theme--";

const findTranslation = (
  key: string,
  locale: TranslationSet,
): string | undefined => {
  const [namespace, ...keys] = key.split(".");
  return keys.reduce((acc, subKey) => acc[subKey], (locale as any)[namespace]);
};

export const CunninghamProvider = ({
  currentLocale = DEFAULT_LOCALE,
  customLocales,
  theme = DEFAULT_THEME,
  children,
}: Props) => {
  const locales: Record<string, TranslationSet> = useMemo(
    () => ({
      [DEFAULT_LOCALE]: enUS,
      "fr-FR": frFR,
      ...customLocales,
    }),
    [customLocales],
  );

  const locale = useMemo(() => {
    return (locales[currentLocale] && currentLocale) || DEFAULT_LOCALE;
  }, [currentLocale, locales]);

  const context = useMemo(
    () => ({
      t: (key: string, vars?: Record<string, string | number>) => {
        let message: string =
          findTranslation(key, locales[locale]) ??
          findTranslation(key, locales[DEFAULT_LOCALE]) ??
          key;

        // Replace vars in message from vars in form of {varName}.
        if (vars) {
          Object.keys(vars).forEach((varName) => {
            message = message?.replace(`{${varName}}`, "" + vars[varName]);
          });
        }

        return message;
      },
      currentLocale: locale,
    }),
    [currentLocale, locales],
  );

  useEffect(() => {
    const root = document.querySelector(":root")!;
    root.classList.forEach((className) => {
      if (className.startsWith(THEME_CLASSNAME_PREFIX)) {
        root.classList.remove(className);
      }
    });
    root.classList.add(THEME_CLASSNAME_PREFIX + theme);
  }, [theme]);

  return (
    <CunninghamContext.Provider value={context}>
      {children}
    </CunninghamContext.Provider>
  );
};
