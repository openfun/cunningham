import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary" | "tertiary" | "danger";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  active?: boolean;
}

export const Button = ({
  children,
  color = "primary",
  iconPosition = "left",
  icon,
  active,
  ...props
}: Props) => {
  const classes = ["c__button", "c__button--" + color];
  if (icon && children) {
    classes.push("c__button--with-icon--" + iconPosition);
  }
  if (icon && !children) {
    classes.push("c__button--icon-only");
  }
  if (active) {
    classes.push("c__button--active");
  }
  return (
    <button className={classes.join(" ")} {...props}>
      {!!icon && iconPosition === "left" && icon}
      {children}
      {!!icon && iconPosition === "right" && icon}
    </button>
  );
};
