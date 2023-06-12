import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { faker } from "@faker-js/faker";
import { Select } from ":/components/Forms/Select";
import { CunninghamProvider } from ":/components/Provider";
import { Button } from ":/components/Button";

export default {
  title: "Components/Forms/Select/Multi",
  component: Select,
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = (args) => (
  <div style={{ paddingBottom: "200px" }}>
    <CunninghamProvider>
      <Select {...args} multi={true} />
    </CunninghamProvider>
  </div>
);

const CITIES = Array.from({ length: 10 }).map(() => faker.location.city());
const OPTIONS = CITIES.map((city) => ({
  label: city,
  value: city.toLowerCase(),
}));

export const Uncontrolled = {
  render: Template,
  args: {
    label: "Select cities",
    options: OPTIONS,
    defaultValue: [OPTIONS[4].value],
  },
};

export const Disabled = {
  render: Template,
  args: {
    label: "Select cities",
    options: OPTIONS,
    defaultValue: OPTIONS[4].value,
    disabled: true,
  },
};

export const WithText = {
  render: Template,
  args: {
    label: "Select cities",
    options: OPTIONS,
    defaultValue: OPTIONS[4].value,
    text: "This is a text, you can display anything you want here like warnings, information or errors.",
  },
};

export const HiddenLabel = {
  render: Template,
  args: {
    label: "Select cities",
    hideLabel: true,
    options: OPTIONS,
    defaultValue: OPTIONS[4].value,
  },
};

export const Controlled = () => {
  const [value, setValue] = useState([OPTIONS[6].value, OPTIONS[8].value]);
  return (
    <CunninghamProvider>
      <div>
        <div>
          Value: <span>{JSON.stringify(value)}</span>
        </div>
        <Select
          label="Select cities"
          multi={true}
          options={OPTIONS}
          value={value}
          onChange={(e) => setValue(e.target.value as string[])}
        />
        <Button onClick={() => setValue([])}>Reset</Button>
      </div>
    </CunninghamProvider>
  );
};

export const Overflow = {
  render: Template,
  args: {
    label: "Select cities",
    options: [
      {
        value: "1",
        label: "Very long long long long long long long city name",
      },
    ],
    defaultValue: "1",
  },
};

export const SearchableEmpty = {
  render: Template,
  args: {
    label: "Select cities",
    options: OPTIONS,
    searchable: true,
  },
};

export const SearchableUncontrolled = {
  render: Template,
  args: {
    label: "Select cities",
    options: OPTIONS,
    defaultValue: OPTIONS[4].value,
    searchable: true,
  },
};

export const SearchableDisabled = {
  render: Template,
  args: {
    label: "Select cities",
    options: OPTIONS,
    defaultValue: OPTIONS[4].value,
    searchable: true,
    disabled: true,
  },
};

export const SearchableControlled = () => {
  const [value, setValue] = useState([OPTIONS[6].value, OPTIONS[8].value]);
  return (
    <CunninghamProvider>
      <div>
        <div>
          Value: <span>{JSON.stringify(value)}</span>
        </div>
        <Select
          label="Select cities"
          options={OPTIONS}
          searchable={true}
          multi={true}
          value={value}
          onChange={(e) => setValue(e.target.value as string[])}
        />
        <Button onClick={() => setValue([])}>Reset</Button>
      </div>
    </CunninghamProvider>
  );
};

export const FullWidth = {
  render: Template,
  args: {
    label: "Select cities",
    options: OPTIONS,
    defaultValue: OPTIONS[4].value,
    searchable: true,
    fullWidth: true,
  },
};

export const NotClearable = {
  render: Template,
  args: {
    label: "Select cities",
    options: OPTIONS,
    defaultValue: OPTIONS[4].value,
    clearable: false,
  },
};

export const DisabledOptions = {
  render: Template,
  args: {
    label: "Select cities",
    options: OPTIONS.map((option, i) => ({ ...option, disabled: i % 3 === 0 })),
  },
};

export const SearchableDisabledOptions = {
  render: Template,
  args: {
    searchable: true,
    label: "Select cities",
    options: OPTIONS.map((option, i) => ({ ...option, disabled: i % 3 === 0 })),
  },
};

export const Success = {
  render: Template,
  args: {
    label: "Select cities",
    options: OPTIONS,
    state: "success",
    text: "Well done",
  },
};

export const Error = {
  render: Template,
  args: {
    label: "Select cities",
    options: OPTIONS,
    state: "error",
    text: "Something went wrong",
  },
};

export const FormExample = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData(e.target as any);
    // eslint-disable-next-line no-console
    console.log(data.getAll("cities"));
    // eslint-disable-next-line no-console
    console.log(data.getAll("test"));
  };

  return (
    <CunninghamProvider>
      <form onSubmit={handleSubmit}>
        <div className="mb-s">
          <Select
            label="Your favorite cities"
            name="cities"
            options={OPTIONS}
            text="The cities you love the most"
            state="success"
            defaultValue={[OPTIONS[4].value]}
            multi={true}
          />
        </div>
        <div className="mb-s">
          <Select
            label="Your departments"
            name="departments"
            searchable={true}
            multi={true}
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
            label="Your skills"
            text="Any error you want"
            name="skills"
            multi={true}
            options={[
              {
                label: "Front-end",
              },
              {
                label: "Back-end",
              },
              {
                label: "Full-stack",
              },
            ]}
            state="error"
          />
        </div>
        <div className="mb-s">
          <Select
            label="Your options"
            text="This field is disabled"
            name="grade"
            disabled={true}
            multi={true}
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
            defaultValue={["Platinum", "Gold"]}
          />
        </div>

        <Button>Submit</Button>
      </form>
    </CunninghamProvider>
  );
};
