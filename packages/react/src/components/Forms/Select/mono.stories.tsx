import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import { Select } from ":/components/Forms/Select";
import { Button } from ":/components/Button";
import { CunninghamProvider } from ":/components/Provider";

export default {
  title: "Components/Forms/Select/Mono",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <div style={{ paddingBottom: "200px" }}>
    <CunninghamProvider>
      <Select {...args} />
    </CunninghamProvider>
  </div>
);

const CITIES = Array.from({ length: 10 }).map(() => faker.location.city());
const OPTIONS = CITIES.map((city) => ({
  label: city,
  value: city.toLowerCase(),
}));

export const Uncontrolled = Template.bind({});
Uncontrolled.args = {
  label: "Select a city",
  options: OPTIONS,
  defaultValue: OPTIONS[4].value,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Select a city",
  options: OPTIONS,
  defaultValue: OPTIONS[4].value,
  disabled: true,
};

export const WithText = Template.bind({});
WithText.args = {
  label: "Select a city",
  options: OPTIONS,
  defaultValue: OPTIONS[4].value,
  text: "This is a text, you can display anything you want here like warnings, information or errors.",
};
export const Controlled = () => {
  const [value, setValue] = useState(OPTIONS[8].value);
  return (
    <CunninghamProvider>
      <div>
        <div>
          Value: <span>{value}</span>
        </div>
        <Select
          label="Select a city"
          options={OPTIONS}
          value={value}
          onChange={(e) => setValue(e.target.value as string)}
        />
        <Button onClick={() => setValue("")}>Reset</Button>
      </div>
    </CunninghamProvider>
  );
};

export const Overflow = Template.bind({});
Overflow.args = {
  label: "Select a city",
  options: [
    {
      value: "1",
      label: "Very long long long long long long long city name",
    },
  ],
  defaultValue: "1",
};

export const SearchableEmpty = Template.bind({});
SearchableEmpty.args = {
  label: "Select a city",
  options: OPTIONS,
  searchable: true,
};

export const SearchableUncontrolled = Template.bind({});
SearchableUncontrolled.args = {
  label: "Select a city",
  options: OPTIONS,
  defaultValue: OPTIONS[4].value,
  searchable: true,
};

export const SearchableDisabled = Template.bind({});
SearchableDisabled.args = {
  label: "Select a city",
  options: OPTIONS,
  defaultValue: OPTIONS[4].value,
  searchable: true,
  disabled: true,
};

export const SearchableControlled = () => {
  const [value, setValue] = useState(OPTIONS[8].value);
  return (
    <CunninghamProvider>
      <div>
        <div>
          Value: <span>{value}</span>
        </div>
        <Select
          label="Select a city"
          options={OPTIONS}
          searchable={true}
          value={value}
          onChange={(e) => setValue(e.target.value as string)}
        />
        <Button onClick={() => setValue("")}>Reset</Button>
      </div>
    </CunninghamProvider>
  );
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  label: "Select a city",
  options: OPTIONS,
  fullWidth: true,
};

export const Success = Template.bind({});
Success.args = {
  label: "Select a city",
  options: OPTIONS,
  state: "success",
  text: "Well done",
};

export const Error = Template.bind({});
Error.args = {
  label: "Select a city",
  options: OPTIONS,
  state: "error",
  text: "Something went wrong",
};

export const FormExample = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData(e.target as any);
    // eslint-disable-next-line no-console
    console.log(data.getAll("city"));
  };

  return (
    <CunninghamProvider>
      <form onSubmit={handleSubmit}>
        <div className="mb-s">
          <Select
            label="Your city"
            name="city"
            options={OPTIONS}
            defaultValue={OPTIONS[2].value}
            text="The city you were born in"
            state="success"
          />
        </div>
        <div className="mb-s">
          <Select
            label="Your gender"
            name="gender"
            options={[
              {
                label: "Male",
              },
              {
                label: "Female",
              },
              {
                label: "Other",
              },
            ]}
          />
        </div>
        <div className="mb-s">
          <Select
            label="Your department"
            name="department"
            searchable={true}
            options={[
              {
                label: "Legal",
              },
              {
                label: "Tech",
              },
              {
                label: "AI",
              },
              {
                label: "Accounting",
              },
            ]}
          />
        </div>
        <div className="mb-s">
          <Select
            label="Your grade"
            text="Any error you want"
            name="grade"
            searchable={true}
            options={[
              {
                label: "Level 1",
              },
              {
                label: "Level 2",
              },
              {
                label: "Level 3",
              },
              {
                label: "Emperor",
              },
            ]}
            state="error"
          />
        </div>
        <div className="mb-s">
          <Select
            label="Your plan"
            text="This field is disabled"
            name="grade"
            disabled={true}
            options={[
              {
                label: "Bronze",
              },
              {
                label: "Silver",
              },
              {
                label: "Gold",
              },
              {
                label: "Platinum",
              },
            ]}
            defaultValue="Platinum"
          />
        </div>
        <Button>Submit</Button>
      </form>
    </CunninghamProvider>
  );
};
