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
    variant?:
      | "brand"
      | "neutral"
      | "info"
      | "success"
      | "warning"
      | "error"
      | "success";
    color?: "primary" | "secondary" | "tertiary" | "bordered";
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
  variant = "brand",
  icon,
  active,
  className,
  fullWidth,
  ref,
  ...props
}: ButtonProps) => {
  const classes = [
    "c__button",
    "c__button--" + variant,
    "c__button--" + variant + "--" + color,
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
    </>
  );
};
