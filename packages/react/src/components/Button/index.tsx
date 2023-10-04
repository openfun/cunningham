import React, { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary" | "tertiary" | "danger";
  size?: "medium" | "small" | "nano";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  active?: boolean;
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      color = "primary",
      size = "medium",
      iconPosition = "left",
      icon,
      active,
      className,
      fullWidth,
      ...props
    },
    ref,
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
    if (fullWidth) {
      classes.push("c__button--full-width");
    }
    const iconElement = <span className="c__button__icon">{icon}</span>;
    // const iconElement = icon;
    return (
      <button className={classes.join(" ")} {...props} ref={ref}>
        {!!icon && iconPosition === "left" && iconElement}
        {children}
        {!!icon && iconPosition === "right" && iconElement}
      </button>
    );
  },
);
