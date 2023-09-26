export type PartialNested<T> = {
  [K in keyof T]?: T extends object ? PartialNested<T[K]> : T[K];
};

export type PartialExtendableNested<T> = {
  [K in keyof T]?: T[K] extends object ? PartialExtendableNested<T[K]> : T[K];
} & Record<PropertyKey, any>;
