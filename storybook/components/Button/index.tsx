import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  createElement,
  ReactNode,
  RefAttributes,
} from "react";

type DomProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonElement = HTMLButtonElement & HTMLAnchorElement;
export type ButtonProps = Omit<DomProps, "color"> &
  RefAttributes<ButtonElement> & {
    size?: "medium" | "small" | "nano";
    color?:
      | "primary"
      | "primary-text"
      | "secondary"
      | "tertiary"
      | "tertiary-text"
      | "danger";
    icon?: ReactNode;
    iconPosition?: "left" | "right";
    active?: boolean;
    fullWidth?: boolean;
  };

export const Button = ({
  children,
  color = "primary",
  size = "medium",
  iconPosition = "left",
  icon,
  active,
  className,
  fullWidth,
  ref,
  ...props
}: ButtonProps) => {
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
  if (["primary-text", "tertiary-text"].includes(color)) {
    classes.push("c__button--text");
  }
  if (props.href && props.disabled) {
    classes.push("c__button--disabled");
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
};
