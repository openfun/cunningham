import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Radio, RadioGroup } from "components/Forms/Radio/index";

export default {
  title: "Components/Forms/Radio",
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => (
  <Radio {...args} aria-label="Radio" />
);

export const Default = Template.bind({});
Default.args = {};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Label",
};

export const WithLabelChecked = Template.bind({});
WithLabelChecked.args = {
  label: "Label",
  checked: true,
};

export const WithText = Template.bind({});
WithText.args = {
  label: "Label",
  text: "Some optional text",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Label",
  disabled: true,
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  label: "Label",
  disabled: true,
  checked: true,
  text: "Some optional text",
};

export const Error = Template.bind({});
Error.args = {
  checked: true,
  label: "Label",
  text: "This is an optional text",
  state: "error",
};

export const Success = Template.bind({});
Success.args = {
  checked: true,
  label: "Label",
  text: "This is an optional text",
  state: "success",
};

export const Group = () => {
  return (
    <div>
      <div className="fs-l fw-bold mb-t">Your office</div>
      <RadioGroup>
        <Radio
          label="New York"
          name="city"
          value="new_york"
          text="5th Avenue Offices"
        />
        <Radio
          label="Singapour"
          name="city"
          value="singapour"
          text="Opened in 2015"
        />
        <Radio
          label="Dublin"
          name="city"
          value="dublin"
          text="Closed since 2019"
          disabled={true}
        />
      </RadioGroup>
    </div>
  );
};

export const GroupError = () => {
  return (
    <div>
      <div className="fs-l fw-bold mb-t">Your office</div>
      <RadioGroup state="error" text="An important error message">
        <Radio
          label="New York"
          name="city"
          value="new_york"
          text="5th Avenue Offices"
        />
        <Radio
          label="Singapour"
          name="city"
          value="singapour"
          text="Opened in 2015"
        />
        <Radio
          label="Dublin"
          name="city"
          value="dublin"
          text="Closed since 2019"
          disabled={true}
        />
      </RadioGroup>
    </div>
  );
};

export const GroupSuccess = () => {
  return (
    <div>
      <div className="fs-l fw-bold mb-t">Your office</div>
      <RadioGroup state="success" text="Success message !">
        <Radio
          label="New York"
          name="city"
          value="new_york"
          text="5th Avenue Offices"
        />
        <Radio
          label="Singapour"
          name="city"
          value="singapour"
          text="Opened in 2015"
        />
        <Radio
          label="Dublin"
          name="city"
          value="dublin"
          text="Closed since 2019"
          disabled={true}
        />
      </RadioGroup>
    </div>
  );
};
