export type PartialNested<T> = {
  [K in keyof T]?: T extends object ? PartialNested<T[K]> : T[K];
};

export type PartialExtendableNested<T> = {
  [K in keyof T]?: T[K] extends object ? PartialExtendableNested<T[K]> : T[K];
} & Record<PropertyKey, any>;

// From https://github.com/Microsoft/TypeScript/issues/25760#issuecomment-405931434.
export type WithOptional<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;
