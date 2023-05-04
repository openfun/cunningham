import React, {
  createContext,
  PropsWithChildren,
  useContext,
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
}

export const DEFAULT_LOCALE = Locales.enUS;
export const SUPPORTED_LOCALES = Object.values(Locales);

const findTranslation = (
  key: string,
  locale: TranslationSet
): string | undefined => {
  const [namespace, ...keys] = key.split(".");
  return keys.reduce((acc, subKey) => acc[subKey], (locale as any)[namespace]);
};

export const CunninghamProvider = ({
  currentLocale = DEFAULT_LOCALE,
  customLocales,
  children,
}: Props) => {
  const locales: Record<string, TranslationSet> = useMemo(
    () => ({
      [DEFAULT_LOCALE]: enUS,
      "fr-FR": frFR,
      ...customLocales,
    }),
    [customLocales]
  );

  const locale = useMemo(() => {
    if (!locales[currentLocale]) {
      return locales[DEFAULT_LOCALE];
    }
    return locales[currentLocale];
  }, [currentLocale, locales]);

  const context = useMemo(
    () => ({
      t: (key: string, vars?: Record<string, string | number>) => {
        let message: string =
          findTranslation(key, locale) ??
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
    }),
    [currentLocale, locales]
  );

  return (
    <CunninghamContext.Provider value={context}>
      {children}
    </CunninghamContext.Provider>
  );
};
