export enum VariantType {
  INFO = "info",
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error",
  NEUTRAL = "neutral",
}

export const colorFromType = (type?: VariantType) => {
  switch (type) {
    case VariantType.INFO:
      return "info";
    case VariantType.SUCCESS:
      return "success";
    case VariantType.WARNING:
      return "warning";
    case VariantType.ERROR:
      return "danger";
    default:
      return "neutral";
  }
};

export const iconFromType = (type?: VariantType) => {
  switch (type) {
    case VariantType.INFO:
      return "info";
    case VariantType.SUCCESS:
      return "check_circle";
    case VariantType.WARNING:
      return "error_outline";
    case VariantType.ERROR:
      return "cancel";
    default:
      return "";
  }
};
