import { yupResolver } from "@hookform/resolvers/yup";
import { Meta } from "@storybook/react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import React from "react";
import { Switch } from ":/components/Forms/Switch/index";
import { Button } from ":/components/Button";
import {
  getFieldState,
  getFieldErrorMessage,
  onSubmit,
} from ":/tests/reactHookFormUtils";

export default {
  title: "Components/Forms/Switch",
  component: Switch,
} as Meta<typeof Switch>;

export const Default = {
  args: {},
};

export const Checked = {
  args: {
    checked: true,
  },
};

export const WithLabel = {
  args: {
    label: "Label",
  },
};

export const WithLabelChecked = {
  args: {
    label: "Label",
    checked: true,
  },
};

export const WithText = {
  args: {
    label: "Label",
    text: "This is an optional text",
    checked: true,
  },
};

export const FullWidth = {
  args: {
    label: "Label",
    text: "This is an optional text",
    fullWidth: true,
  },
};

export const WithLabelRight = {
  args: {
    label: "Label",
    labelSide: "right",
  },
};

export const WithLabelRightAndText = {
  args: {
    label: "Label",
    labelSide: "right",
    text: "This is an optional text",
  },
};

export const WithLabelRightAndFullWidth = {
  args: {
    label: "Label",
    text: "This is an optional text",
    fullWidth: true,
    labelSide: "right",
  },
};

export const Disabled = {
  args: {
    label: "Label",
    text: "This is an optional text",
    disabled: true,
  },
};

export const DisabledChecked = {
  args: {
    label: "Label",
    text: "This is an optional text",
    disabled: true,
    defaultChecked: true,
  },
};

export const Error = {
  args: {
    label: "Label",
    text: "This is an optional text",
    state: "error",
    defaultChecked: true,
  },
};

export const Success = {
  args: {
    label: "Label",
    text: "This is an optional text",
    state: "success",
    defaultChecked: true,
  },
};

export const Controlled = {
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return (
      <div>
        <div>Value: {JSON.stringify(checked)}</div>
        <Switch
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <Button onClick={() => setChecked(!checked)}>Toggle</Button>
      </div>
    );
  },
};

export const ReactHookForm = () => {
  interface SwitchExampleFormValues {
    terms: boolean;
  }

  const switchExampleSchema = Yup.object().shape({
    terms: Yup.boolean()
      .required()
      .oneOf([true], "You have to accept the terms of use"),
  });

  const { register, handleSubmit, formState } =
    useForm<SwitchExampleFormValues>({
      defaultValues: {
        terms: false,
      },
      mode: "onChange",
      reValidateMode: "onChange",
      resolver: yupResolver(switchExampleSchema),
    });

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "400px",
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Switch
        label="I accept the terms of use"
        fullWidth
        state={getFieldState("terms", formState)}
        text={getFieldErrorMessage("terms", formState)}
        {...register("terms")}
      />
      <Button fullWidth={true}>Log-in</Button>
    </form>
  );
};

export const FormExample = {
  render: () => {
    return (
      <form>
        <div style={{ width: "300px" }}>
          <Switch
            label="Energy efficiency"
            fullWidth={true}
            text="Increases power by 15%"
          />
          <Switch
            label="Battery percentage"
            fullWidth={true}
            defaultChecked={true}
          />
          <Switch label="Wi-Fi" fullWidth={true} defaultChecked={true} />
          <Switch label="Bluetooth" fullWidth={true} />
          <Switch
            label="VPN"
            fullWidth={true}
            text="You must pay for this feature"
            state="error"
            disabled={true}
          />
        </div>
      </form>
    );
  },
};

export const FormExampleRight = {
  render: () => {
    return (
      <form>
        <div style={{ width: "300px" }}>
          <Switch
            label="Energy efficiency"
            fullWidth={true}
            labelSide="right"
            text="Increases power by 15%"
          />
          <Switch
            label="Battery percentage"
            fullWidth={true}
            defaultChecked={true}
            labelSide="right"
          />
          <Switch
            label="Wi-Fi"
            fullWidth={true}
            defaultChecked={true}
            labelSide="right"
          />
          <Switch label="Bluetooth" fullWidth={true} labelSide="right" />
          <Switch
            label="VPN"
            fullWidth={true}
            labelSide="right"
            text="You must pay for this feature"
            state="error"
            disabled={true}
          />
        </div>
      </form>
    );
  },
};
