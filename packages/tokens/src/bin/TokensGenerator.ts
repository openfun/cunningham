interface ThemeShape {
  colors: {
    [key: string]: string;
  };
}

export interface ConfigShape {
  theme: ThemeShape;
}

export const tokensGenerator = (config: ConfigShape) => {
  return {
    colors: { ...config.theme.colors },
  };
};
