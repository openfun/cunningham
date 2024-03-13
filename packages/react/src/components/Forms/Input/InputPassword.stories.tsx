import { Meta } from "@storybook/react";
import { InputPassword } from ":/components/Forms/Input/InputPassword";

export default {
  title: "Components/Forms/Input",
  component: InputPassword,
} as Meta<typeof InputPassword>;

export const Password = {
  args: {
    label: "Your most secret password",
  },
};
