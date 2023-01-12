import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary" | "tertiary";
}

export const Button = ({ children, color = "primary", ...props }: Props) => {
  return (
    <button className={"c__button c__button--" + color} {...props}>
      {children}
    </button>
  );
};
