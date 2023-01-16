import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary" | "tertiary" | "danger";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

export const Button = ({
  children,
  color = "primary",
  iconPosition = "left",
  icon,
  ...props
}: Props) => {
  const classes = ["c__button", "c__button--" + color];
  if (icon) {
    classes.push("c__button--with-icon--" + iconPosition);
  }
  return (
    <button className={classes.join(" ")} {...props}>
      {!!icon && iconPosition === "left" && icon}
      {children}
      {!!icon && iconPosition === "right" && icon}
    </button>
  );
};
