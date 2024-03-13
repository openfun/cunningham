import React, { forwardRef } from "react";
import { Input, InputProps } from ":/components/Forms/Input/index";
import { Button } from ":/components/Button";
import { useCunningham } from ":/components/Provider";

export const InputPassword = forwardRef<
  HTMLInputElement,
  Omit<InputProps, "rightIcon">
>((props: InputProps, ref) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const { className, ...otherProps } = props;
  const customClassName = "c__input--password";
  const { t } = useCunningham();
  return (
    <Input
      {...otherProps}
      ref={ref}
      className={className + " " + customClassName}
      type={showPassword ? "text" : "password"}
      rightIcon={
        showPassword ? (
          <Button
            onClick={() => setShowPassword(false)}
            icon={<span className="material-icons">visibility_off</span>}
            color="tertiary-text"
            size="small"
            aria-label={t("components.forms.input.password.hide_password")}
          />
        ) : (
          <Button
            onClick={() => setShowPassword(true)}
            icon={<span className="material-icons">visibility</span>}
            color="tertiary-text"
            size="small"
            aria-label={t("components.forms.input.password.show_password")}
          />
        )
      }
    />
  );
});
