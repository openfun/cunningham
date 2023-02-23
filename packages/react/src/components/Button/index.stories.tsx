import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button } from "./index";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  color: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary",
  color: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  children: "Tertiary",
  color: "tertiary",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled",
  color: "primary",
  disabled: true,
};

export const Danger = Template.bind({});
Danger.args = {
  children: "Danger",
  color: "danger",
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  children: "Icon",
  icon: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.8724 10.0166H13.248L16.6251 4.07749C16.9258 3.54846 16.2447 3.01176 15.8005 3.42755L6.57343 12.0655C6.22192 12.3946 6.45489 12.9838 6.93615 12.9838H11.5606L8.18353 18.9229C7.88275 19.4519 8.56335 19.9886 9.00746 19.5728L18.2352 10.9349C18.5867 10.6058 18.3537 10.0166 17.8724 10.0166Z"
      />
    </svg>
  ),
  color: "primary",
};

export const IconRight = Template.bind({});
IconRight.args = {
  children: "Icon",
  iconPosition: "right",
  icon: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.8724 10.0166H13.248L16.6251 4.07749C16.9258 3.54846 16.2447 3.01176 15.8005 3.42755L6.57343 12.0655C6.22192 12.3946 6.45489 12.9838 6.93615 12.9838H11.5606L8.18353 18.9229C7.88275 19.4519 8.56335 19.9886 9.00746 19.5728L18.2352 10.9349C18.5867 10.6058 18.3537 10.0166 17.8724 10.0166Z"
      />
    </svg>
  ),
  color: "primary",
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  "aria-label": "Button with only an icon",
  icon: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.8724 10.0166H13.248L16.6251 4.07749C16.9258 3.54846 16.2447 3.01176 15.8005 3.42755L6.57343 12.0655C6.22192 12.3946 6.45489 12.9838 6.93615 12.9838H11.5606L8.18353 18.9229C7.88275 19.4519 8.56335 19.9886 9.00746 19.5728L18.2352 10.9349C18.5867 10.6058 18.3537 10.0166 17.8724 10.0166Z"
      />
    </svg>
  ),
  color: "primary",
};
