import { Meta } from "@storybook/react";
import React, { useRef } from "react";
import { TextArea } from ":/components/Forms/TextArea/index";
import { Input } from ":/components/Forms/Input";
import { Button } from ":/components/Button";

export default {
  title: "Components/Forms/TextArea",
  component: TextArea,
  args: {
    rows: 4,
  },
} as Meta<typeof TextArea>;

export const ShowCase = () => {
  return (
    <div>
      <div>
        <Input label="Your name" fullWidth={true} />
      </div>
      <div className="mt-s">
        <TextArea label="Your name" rows={4} fullWidth={true} />
      </div>
    </div>
  );
};

export const Default = {
  args: {
    defaultValue: "Hello world",
    label: "Describe your job",
  },
};

export const Success = {
  args: {
    defaultValue: "Hello world",
    label: "Describe your job",
    state: "success",
    text: "This is an optional success message",
  },
};

export const Error = {
  args: {
    defaultValue: "Hello world",
    label: "Describe your job",
    state: "error",
    text: "This is an optional error message",
  },
};

export const ErrorItems = {
  args: {
    defaultValue: "Hello world",
    label: "Describe your job",
    state: "error",
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
    label: "Describe your job",
    disabled: true,
  },
};

export const DisabledFilled = {
  args: {
    label: "Describe your job",
    defaultValue: "John Doe",
    disabled: true,
  },
};

export const Empty = {
  args: {
    label: "Describe your job",
  },
};

export const OverflowingText = {
  args: {
    label: "Describe your job",
    defaultValue:
      "John Dave Mike Smith Doe Junior Senior Yoda Skywalker John Dave Mike Smith Doe Junior Senior Yoda Skywalker John Dave Mike Smith Doe Junior Senior Yoda Skywalker",
  },
};

export const WithText = {
  args: {
    defaultValue: "Hello world",
    label: "Describe your job",
    text: "This is a text, you can display anything you want here like warnings, information or errors.",
  },
};

export const WithTextRight = {
  args: {
    defaultValue: "Hello world",
    label: "Describe your job",
    rightText: "0/300",
  },
};

export const WithBothTexts = {
  args: {
    defaultValue: "Hello world",
    label: "Describe your job",
    text: "This is a text, you can display anything you want here like warnings, information or errors.",
    rightText: "0/300",
  },
};

export const FullWidth = {
  args: {
    defaultValue: "Hello world",
    label: "Describe your job",
    fullWidth: true,
    text: "This is a text, you can display anything you want here like warnings, information or errors.",
    rightText: "0/300",
  },
};

export const CharCounter = {
  args: {
    defaultValue: "CEO",
    label: "Describe your job",
    text: "This is a text, you can display anything you want here like warnings, information or errors.",
    charCounter: true,
    charCounterMax: 30,
  },
};

export const Controlled = () => {
  const [value, setValue] = React.useState("I am controlled");
  return (
    <div>
      <div className="clr-greyscale-900">
        Value: <span>{value}</span>
      </div>
      <TextArea
        label="Describe your job"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={4}
      />
      <Button onClick={() => setValue("")}>Reset</Button>
    </div>
  );
};

export const NonControlled = () => {
  return (
    <TextArea
      defaultValue="john.doe@example.com"
      label="Describe your job"
      rows={4}
    />
  );
};

export const WithRef = () => {
  const ref = useRef<HTMLTextAreaElement>(null);
  return (
    <div>
      <TextArea label="Describe your job" ref={ref} rows={4} />
      <Button onClick={() => ref.current?.focus()}>Focus</Button>
    </div>
  );
};

export const FormExample = () => {
  return (
    <div>
      <form>
        <div>
          <TextArea
            label="Describe your job"
            defaultValue="As a developer, my role involves creating, maintaining, and improving software applications and systems. I work with various programming languages and technologies to bring digital solutions to life."
            rows={4}
            fullWidth={true}
          />
        </div>
        <div className="mt-s">
          <TextArea
            label="Describe your hobbies"
            defaultValue="- Gym
- Running
- Coding"
            rows={4}
            fullWidth={true}
          />
        </div>
        <div className="mt-s">
          <TextArea
            label="How could you improve your habits ?"
            defaultValue="Wake up earlier in the morning"
            text="Be exhaustive"
            charCounter={true}
            charCounterMax={30}
            rows={2}
            fullWidth={true}
          />
        </div>
        <div className="mt-s">
          <TextArea
            label="Tell us about your favorite stack"
            disabled={true}
            rows={2}
            fullWidth={true}
          />
        </div>
        <div className="mt-s">
          <TextArea
            label="How to code a weather app ?"
            defaultValue="Creating a weather app involves several steps, and I'll provide a high-level overview of how you might approach coding one. This example assumes you want to build a web-based weather app using HTML, CSS, and JavaScript, along with data from a weather API. "
            state="error"
            text="Address not found"
            rows={4}
            fullWidth={true}
          />
        </div>
        <div className="mt-s">
          <TextArea
            label="How to setup a database ?"
            defaultValue="Setting up a PostgreSQL database involves several steps, from installation to configuration. Below is a step-by-step guide on how to set up a PostgreSQL database on a typical Linux environment. The process is similar on other platforms, with slight variations."
            text="Five numbers format"
            state="success"
            rows={4}
            fullWidth={true}
          />
        </div>
        <div className="mt-s">
          <TextArea
            label="Tell us about your favorite libraries"
            defaultValue="- ReactQuery
- ReactJS
- AngularJS
- Django"
            state="success"
            rows={7}
            fullWidth={true}
          />
        </div>
      </form>
    </div>
  );
};
