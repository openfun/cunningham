import React, { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary" | "tertiary" | "danger";
  size?: "medium" | "small";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  active?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      color = "primary",
      size = "medium",
      iconPosition = "left",
      icon,
      active,
      className,
      ...props
    },
    ref
  ) => {
    const classes = [
      "c__button",
      "c__button--" + color,
      "c__button--" + size,
      className,
    ];
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
      <button className={classes.join(" ")} {...props} ref={ref}>
        {!!icon && iconPosition === "left" && icon}
        {children}
        {!!icon && iconPosition === "right" && icon}
      </button>
    );
  }
);
