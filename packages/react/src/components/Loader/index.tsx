import React from "react";
import classNames from "classnames";

interface Props {
  "aria-label"?: string;
  size?: "small" | "medium";
}

export const Loader = ({ size = "medium", ...props }: Props) => {
  return (
    <div
      className={classNames("c__loader", "c__loader--" + size)}
      role="status"
      {...props}
    />
  );
};
