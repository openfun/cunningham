export const resolve = (
  object: Record<string, any>,
  path: string,
  separator: string = "."
): any => {
  return path.split(separator).reduce((acc, cur) => {
    return acc[cur];
  }, object);
};
