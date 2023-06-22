/**
 * FROM https://gist.github.com/zentala/1e6f72438796d74531803cc3833c039c
 * @param bytes
 * @param decimals
 */
export function formatBytes(bytes: number, decimals: number = 2) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const units = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const exponent = Math.floor(Math.log(bytes) / Math.log(k));
  return (
    parseFloat((bytes / k ** exponent).toFixed(decimals)) +
    " " +
    units[exponent]
  );
}

export const replaceInputFilters = (input: HTMLInputElement, files: File[]) => {
  const dataTransfer = new DataTransfer();
  files.forEach((f) => {
    dataTransfer.items.add(f);
  });
  input.files = dataTransfer.files;
};
