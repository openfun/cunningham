interface ThemeShape {
  colors: {
    [key: string]: string;
  };
}

export interface ConfigShape {
  theme: ThemeShape;
}

export type Tokens = Record<PropertyKey, unknown>;

export const tokensGenerator = (config: ConfigShape): Tokens => {
  return {
    colors: { ...config.theme.colors },
  };
};
