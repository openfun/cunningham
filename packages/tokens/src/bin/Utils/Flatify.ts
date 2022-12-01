export const flatify = (obj: any, separator: string) => {
  const flatObj: any = {};
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    if (typeof value === "object") {
      const flatChild = flatify(value, separator);
      Object.keys(flatChild).forEach((subKey) => {
        flatObj[key + separator + subKey] = flatChild[subKey];
      });
    } else {
      flatObj[key] = value;
    }
  });
  return flatObj;
};
