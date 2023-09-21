import { yupResolver } from "@hookform/resolvers/yup";
import { Meta } from "@storybook/react";
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { RhfInput } from ":/components/Forms/Input/stories-utils";
import { Checkbox } from ":/components/Forms/Checkbox";
import { Button } from ":/components/Button";
import {
  getFieldState,
  getFieldErrorMessage,
  onSubmit,
} from "./reactHookFormUtils";

export default {
  title: "Components/Forms/Examples/React-Hook-Form",
} as Meta;

interface LoginStoryFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
  rememberMe: Yup.bool().required().oneOf([true]),
});

export const Login = () => {
  const { register, handleSubmit, formState } = useForm<LoginStoryFormValues>({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "300px",
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1
        className="fs-h3 fw-bold clr-greyscale-900"
        style={{ textAlign: "center" }}
      >
        Log in
      </h1>
      <RhfInput
        label="Email"
        fullWidth={true}
        state={getFieldState("email", formState)}
        text={getFieldErrorMessage("email", formState)}
        {...register("email")}
      />
      <RhfInput
        label="Password"
        state={getFieldState("password", formState)}
        type="password"
        text={
          getFieldErrorMessage("password", formState) || "Forgot your password?"
        }
        fullWidth={true}
        {...register("password")}
      />
      <div>
        <Checkbox
          label="Remember me"
          state={getFieldState("rememberMe", formState)}
          text={getFieldErrorMessage("rememberMe", formState)}
          {...register("rememberMe")}
        />
      </div>
      <Button fullWidth={true}>Log in</Button>
      <div className="fs-m clr-greyscale-800" style={{ textAlign: "center" }}>
        You do not have an account?{" "}
        <a href="/#" className="clr-greyscale-800">
          Register
        </a>
      </div>
    </form>
  );
};
