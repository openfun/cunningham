import React from "react";
import classNames from "classnames";

export interface LoaderProps {
  "aria-label"?: string;
  size?: "small" | "medium";
}

export const Loader = ({ size = "medium", ...props }: LoaderProps) => {
  return (
    <div
      className={classNames("c__loader", "c__loader--" + size)}
      role="status"
      {...props}
    />
  );
};
