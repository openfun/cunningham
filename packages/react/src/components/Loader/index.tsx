import React from "react";

interface Props {
  "aria-label"?: string;
}

export const Loader = (props: Props) => {
  return <div className="c__loader" role="status" {...props} />;
};
