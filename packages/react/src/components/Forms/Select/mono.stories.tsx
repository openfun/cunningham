import { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import * as Yup from "yup";
import { faker } from "@faker-js/faker";
import { yupResolver } from "@hookform/resolvers/yup";
import { onSubmit } from ":/components/Forms/Examples/ReactHookForm/reactHookFormUtils";
import { Select } from ":/components/Forms/Select";
import { Button } from ":/components/Button";
import { RhfSelect } from ":/components/Forms/Select/stories-utils";

export default {
  title: "Components/Forms/Select/Mono",
  component: Select,
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = (args) => (
  <div style={{ paddingBottom: "200px" }}>
    <Select {...args} />
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
    label: "Select a city",
    options: OPTIONS,
    defaultValue: OPTIONS[4].value,
  },
};

export const Disabled = {
  render: Template,

  args: {
    label: "Select a city",
    options: OPTIONS,
    defaultValue: OPTIONS[4].value,
    disabled: true,
  },
};

export const WithText = {
  render: Template,

  args: {
    label: "Select a city",
    options: OPTIONS,
    defaultValue: OPTIONS[4].value,
    text: "This is a text, you can display anything you want here like warnings, information or errors.",
  },
};

export const HiddenLabel = {
  render: Template,

  args: {
    label: "Select a city",
    hideLabel: true,
    options: OPTIONS,
    defaultValue: OPTIONS[4].value,
  },
};

export const Controlled = () => {
  const [value, setValue] = useState(OPTIONS[8].value);
  return (
    <div>
      <div>
        Value: <span>{value}</span>
      </div>
      <Select
        label="Select a city"
        options={OPTIONS}
        value={value}
        onChange={(e) => {
          setValue(e.target.value as string);
        }}
      />
      <Button onClick={() => setValue("")}>Reset</Button>
      <Button onClick={() => setValue(OPTIONS[0].value)}>
        Set {OPTIONS[0].label}
      </Button>
      <Button onClick={() => setValue(OPTIONS[1].value)}>
        Set {OPTIONS[1].label}
      </Button>
    </div>
  );
};

export const Overflow = {
  render: Template,

  args: {
    label: "Select a city",
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
    label: "Select a city",
    options: OPTIONS,
    searchable: true,
  },
};

export const SearchableUncontrolled = {
  render: Template,

  args: {
    label: "Select a city",
    options: OPTIONS,
    defaultValue: OPTIONS[4].value,
    searchable: true,
  },
};

export const SearchableDisabled = {
  render: Template,

  args: {
    label: "Select a city",
    options: OPTIONS,
    defaultValue: OPTIONS[4].value,
    searchable: true,
    disabled: true,
  },
};

export const SearchableControlled = () => {
  const [value, setValue] = useState(OPTIONS[8].value);
  return (
    <div>
      <div>
        Value: <span>{value}</span>
      </div>
      <Select
        label="Select a city"
        options={OPTIONS}
        searchable={true}
        value={value}
        onChange={(e) => {
          setValue(e.target.value as string);
        }}
      />
      <Button onClick={() => setValue("")}>Reset</Button>
      <Button onClick={() => setValue(OPTIONS[0].value)}>
        Set {OPTIONS[0].label}
      </Button>
      <Button onClick={() => setValue(OPTIONS[1].value)}>
        Set {OPTIONS[1].label}
      </Button>
    </div>
  );
};

export const FullWidth = {
  render: Template,

  args: {
    label: "Select a city",
    options: OPTIONS,
    fullWidth: true,
  },
};

export const NotClearable = {
  render: Template,
  args: {
    label: "Select a city",
    options: OPTIONS,
    defaultValue: OPTIONS[4].value,
    clearable: false,
  },
};

export const DisabledOptions = {
  render: Template,
  args: {
    label: "Select a city",
    options: OPTIONS.map((option, i) => ({ ...option, disabled: i % 3 === 0 })),
  },
};

export const Success = {
  render: Template,

  args: {
    label: "Select a city",
    options: OPTIONS,
    state: "success",
    text: "Well done",
  },
};

export const Error = {
  render: Template,

  args: {
    label: "Select a city",
    options: OPTIONS,
    state: "error",
    text: "Something went wrong",
  },
};

export const NoOptions = {
  render: Template,
  args: {
    label: "No options available",
    options: [],
  },
};

export const FormExample = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData(e.target as any);
    // eslint-disable-next-line no-console
    console.log(data.getAll("city"));
  };

  return (
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
  );
};

export const ReactHookForm = () => {
  enum CitiesOptionEnum {
    NONE = "",
    DIJON = "dijon",
    PARIS = "paris",
    TOKYO = "tokyo",
  }

  interface SelectExampleFormValues {
    joTown: CitiesOptionEnum;
  }

  const selectExampleSchema = Yup.object().shape({
    joTown: Yup.string()
      .required()
      .oneOf([CitiesOptionEnum.PARIS], "That's not the right town!"),
  });

  const methods = useForm<SelectExampleFormValues>({
    defaultValues: {
      joTown: CitiesOptionEnum.NONE,
    },
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(selectExampleSchema),
  });

  return (
    <FormProvider {...methods}>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "400px",
        }}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className="clr-greyscale-900">
          Where will the 2024 Olympics take place?
        </div>
        <RhfSelect
          name="joTown"
          label="Select a city"
          fullWidth={true}
          options={[
            {
              label: "Dijon",
              value: CitiesOptionEnum.DIJON,
            },
            {
              label: "Paris",
              value: CitiesOptionEnum.PARIS,
            },
            {
              label: "Tokyo",
              value: CitiesOptionEnum.TOKYO,
            },
          ]}
        />
        <Button fullWidth={true}>Submit</Button>
      </form>
    </FormProvider>
  );
};
