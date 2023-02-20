export type PartialNested<T> = {
  [K in keyof T]?: T extends object ? PartialNested<T[K]> : T[K];
};
