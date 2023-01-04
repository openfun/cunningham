import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

export const Button = ({ children }: Props) => {
  return <button className="c__button">{children}</button>;
};
