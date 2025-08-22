import React from "react";
import { Input, InputProps } from ":/components/Forms/Input/index";
import { Button } from ":/components/Button";
import { useCunningham } from ":/components/Provider";

export const InputPassword = (props: Omit<InputProps, "rightIcon">) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const { className, ...otherProps } = props;
  const customClassName = "c__input--password";
  const { t } = useCunningham();

  return (
    <Input
      {...otherProps}
      className={`${className} ${customClassName}`}
      type={showPassword ? "text" : "password"}
      rightIcon={
        <Button
          onClick={() => setShowPassword(!showPassword)}
          icon={
            <span className="material-icons">
              {showPassword ? "visibility_off" : "visibility"}
            </span>
          }
          color="tertiary"
          variant="neutral"
          size="small"
          aria-label={t(
            `components.forms.input.password.${showPassword ? "hide" : "show"}_password`
          )}
        />
      }
    />
  );
};
