import { ReactNode } from "react";
import { ButtonProps } from ":/components/Button";
import { VariantType } from ":/utils/VariantUtils";

/**
 * This function is used for doc purpose only.
 */
export const toast = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  message,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options,
}: {
  /** Message displayed inside the toast */
  message: string;
  /** Type of the toast */
  type?: VariantType;
  /** Various options */
  options?: {
    duration: number;
    icon?: ReactNode;
    primaryLabel?: string;
    primaryOnClick?: ButtonProps["onClick"];
    primaryProps?: ButtonProps;
  };
}) => {
  return {};
};
