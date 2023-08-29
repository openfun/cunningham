import { yupResolver } from "@hookform/resolvers/yup";
import { Meta } from "@storybook/react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import React, { useRef } from "react";
import {
  getFieldState,
  getFieldErrorMessage,
  onSubmit,
} from ":/components/Forms/Examples/ReactHookForm/reactHookFormUtils";
import { Input } from ":/components/Forms/Input/index";
import { Button } from ":/components/Button";

export default {
  title: "Components/Forms/Input",
  component: Input,
} as Meta<typeof Input>;

export const Default = {
  args: {
    defaultValue: "Hello world",
    label: "Your name",
  },
};

export const Success = {
  args: {
    defaultValue: "Hello world",
    label: "Your name",
    state: "success",
    icon: <span className="material-icons">person</span>,
    text: "This is an optional success message",
  },
};

export const Error = {
  args: {
    defaultValue: "Hello world",
    label: "Your name",
    state: "error",
    icon: <span className="material-icons">person</span>,
    text: "This is an optional error message",
  },
};

export const ErrorItems = {
  args: {
    defaultValue: "Hello world",
    label: "Your name",
    state: "error",
    icon: <span className="material-icons">person</span>,
    text: "This is an optional error message",
    textItems: [
      "Text too long",
      "Wrong choice",
      "Must contain at least 9 characters, uppercase and digits",
    ],
  },
};

export const DisabledEmpty = {
  args: {
    label: "Your name",
    icon: <span className="material-icons">person</span>,
    disabled: true,
  },
};

export const DisabledFilled = {
  args: {
    label: "Your name",
    defaultValue: "John Doe",
    icon: <span className="material-icons">person</span>,
    disabled: true,
  },
};

export const Empty = {
  args: {
    label: "Your email",
  },
};

export const Icon = {
  args: {
    label: "Account balance",
    icon: <span className="material-icons">attach_money</span>,
    defaultValue: "1000",
  },
};

export const IconRight = {
  args: {
    label: "Account balance",
    rightIcon: <span className="material-icons">attach_money</span>,
    defaultValue: "1000",
  },
};

export const IconBoth = {
  args: {
    label: "Not a recommended use",
    icon: <span className="material-icons">attach_money</span>,
    rightIcon: <span className="material-icons">attach_money</span>,
    defaultValue: "Is isn't recommended to use both icons",
  },
};

export const OverflowingText = {
  args: {
    label: "Your name",
    icon: <span className="material-icons">attach_money</span>,
    defaultValue: "John Dave Mike Smith Doe Junior Senior Yoda Skywalker",
  },
};

export const WithText = {
  args: {
    defaultValue: "Hello world",
    label: "Your name",
    text: "This is a text, you can display anything you want here like warnings, informations or errors.",
  },
};

export const WithTextRight = {
  args: {
    defaultValue: "Hello world",
    label: "Your name",
    rightText: "0/300",
  },
};

export const WithBothTexts = {
  args: {
    defaultValue: "Hello world",
    label: "Your name",
    text: "This is a text, you can display anything you want here like warnings, informations or errors.",
    rightText: "0/300",
  },
};

export const FullWidth = {
  args: {
    defaultValue: "Hello world",
    label: "Your name",
    fullWidth: true,
    text: "This is a text, you can display anything you want here like warnings, informations or errors.",
    rightText: "0/300",
  },
};

export const CharCounter = {
  args: {
    defaultValue: "CEO",
    label: "Job title",
    text: "This is a text, you can display anything you want here like warnings, informations or errors.",
    charCounter: true,
    charCounterMax: 30,
  },
};

export const Controlled = () => {
  const [value, setValue] = React.useState("I am controlled");
  return (
    <div>
      <div>
        Value: <span>{value}</span>
      </div>
      <Input
        label="Your identity"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={() => setValue("")}>Reset</Button>
    </div>
  );
};

export const NonControlled = () => {
  return <Input defaultValue="john.doe@example.com" label="Your email" />;
};

export const WithRef = () => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div>
      <Input label="Your identity" ref={ref} />
      <Button onClick={() => ref.current?.focus()}>Focus</Button>
    </div>
  );
};

export const FormExample = () => {
  return (
    <div>
      <form>
        <div>
          <Input label="First name" defaultValue="John" />
        </div>
        <div className="mt-s">
          <Input label="Last name" defaultValue="Smith" />
        </div>
        <div className="mt-s">
          <Input
            label="Job Title"
            defaultValue="Project Manager"
            text="Your position in the company"
            charCounter={true}
            charCounterMax={30}
          />
        </div>
        <div className="mt-s">
          <Input label="Code" defaultValue="XIJZ81" disabled={true} />
        </div>
        <div className="mt-s">
          <Input
            label="Address"
            defaultValue="1 Infinite Loop"
            state="error"
            text="Address not found"
            icon={<span className="material-icons">apartment</span>}
          />
        </div>
        <div className="mt-s">
          <Input
            label="Zip"
            defaultValue="96020"
            text="Five numbers format"
            state="success"
            icon={<span className="material-icons">location_on</span>}
          />
        </div>
        <div className="mt-s">
          <Input
            label="City"
            defaultValue="Palo Alto"
            state="success"
            icon={<span className="material-icons">map</span>}
          />
        </div>
      </form>
    </div>
  );
};

export const ReactHookForm = () => {
  interface InputExampleFormValues {
    email: string;
  }

  const inputExampleSchema = Yup.object().shape({
    email: Yup.string().email().required(),
  });
  const { register, handleSubmit, formState } = useForm<InputExampleFormValues>(
    {
      defaultValues: {
        email: "",
      },
      mode: "onChange",
      reValidateMode: "onChange",
      resolver: yupResolver(inputExampleSchema),
    },
  );

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
      <Input
        label="Email address"
        fullWidth={true}
        state={getFieldState("email", formState)}
        text={getFieldErrorMessage("email", formState)}
        {...register("email")}
      />
      <Button fullWidth={true}>Log-in</Button>
    </form>
  );
};
