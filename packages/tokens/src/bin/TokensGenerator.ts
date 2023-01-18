import cunningham from "cunningham";

export type ConfigShape = typeof cunningham;

export type Tokens = Record<PropertyKey, unknown> & ConfigShape;

export const tokensGenerator = (config: ConfigShape): Tokens => {
  return {
    ...config,
  };
};
