import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  createElement,
  forwardRef,
  ReactNode,
} from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    color?: "primary" | "secondary" | "tertiary" | "danger";
    size?: "medium" | "small" | "nano";
    icon?: ReactNode;
    iconPosition?: "left" | "right";
    active?: boolean;
    fullWidth?: boolean;
  };

export type ButtonElement = HTMLButtonElement & HTMLAnchorElement;

export const Button = forwardRef<ButtonElement, ButtonProps>(
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
    const tagName = props.href ? "a" : "button";
    return createElement(
      tagName,
      {
        className: classes.join(" "),
        ...props,
        ref,
      },
      <>
        {!!icon && iconPosition === "left" && iconElement}
        {children}
        {!!icon && iconPosition === "right" && iconElement}
      </>,
    );
  },
);
