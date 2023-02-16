import React, { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, ...props }: Props) => {
  const classes = ["c__input"];
  if (className) {
    classes.push(className);
  }
  return <input type="text" className={classes.join(" ")} {...props} />;
};
