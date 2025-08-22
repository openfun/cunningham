import React, { useRef, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Meta, StoryFn } from "@storybook/react";
import { onSubmit } from ":/components/Forms/Examples/ReactHookForm/reactHookFormUtils";
import { Select, SelectHandle } from ":/components/Forms/Select";
import { Button } from ":/components/Button";
import {
  getCountryOption,
  RhfSelect,
} from ":/components/Forms/Select/stories-utils";
import { Modal, ModalSize, useModal } from ":/components/Modal";
import { Input } from ":/components/Forms/Input";

export default {
  title: "Components/Forms/Select/Multi",
  component: Select,
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = (args) => {
  return (
    <div style={{ paddingBottom: "200px" }}>
      <Select {...args} multi={true} />
    </div>
  );
};

const CITIES = [
  "Woodbury",
  "Port Gayle",
  "Geovannichester",
  "San Rafael",
  "Conradchester",
  "Geraldinehaven",
  "Bofield",
  "East Ansel",
  "New Carlo",
  "West Minnieborough",
];
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

export const Monoline = {
  render: Template,
  args: {
    label: "Select cities",
    options: OPTIONS,
    defaultValue: [OPTIONS[4].value, OPTIONS[2].value, OPTIONS[1].value],
    monoline: true,
    clearable: true,
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
    <div>
      <div className="clr-gray-900">
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
    <div>
      <div className="clr-gray-900">
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

export const NoOptions = {
  render: Template,
  args: {
    label: "No options available",
    options: [],
  },
};

export const CustomRender = {
  render: Template,
  args: {
    label: "Select a country",
    showLabelWhenSelected: false,
    options: [
      getCountryOption("Germany", "DE"),
      getCountryOption("France", "FR"),
      getCountryOption("United States", "US"),
      getCountryOption("Spain", "ES"),
      getCountryOption("China", "CN"),
    ],
  },
};
export const SearchableCustomRender = {
  render: Template,
  args: {
    label: "Select a country",
    showLabelWhenSelected: false,
    searchable: true,
    defaultValue: ["france", "united states"],
    options: [
      getCountryOption("Germany", "DE"),
      getCountryOption("France", "FR"),
      getCountryOption("United States", "US"),
      getCountryOption("Spain", "ES"),
      getCountryOption("China", "CN"),
    ],
  },
};

export const Ref = () => {
  const ref = useRef<SelectHandle>(null);

  return (
    <>
      <div className="pb-s">
        <Button
          onClick={() =>
            setTimeout(() => {
              // eslint-disable-next-line no-console
              console.log("calling blur() ...");
              ref.current?.blur();
            }, 2000)
          }
        >
          Trigger onBlur in 2 seconds
        </Button>
      </div>
      <Select label="Select a city" options={OPTIONS} multi={true} ref={ref} />
    </>
  );
};

export const SearchableRef = () => {
  const ref = useRef<SelectHandle>(null);

  return (
    <>
      <div className="pb-s">
        <Button
          onClick={() =>
            setTimeout(() => {
              // eslint-disable-next-line no-console
              console.log("calling blur() ...");
              ref.current?.blur();
            }, 2000)
          }
        >
          Trigger onBlur in 2 seconds
        </Button>
      </div>
      <Select
        label="Select a city"
        options={OPTIONS}
        multi={true}
        searchable={true}
        ref={ref}
      />
    </>
  );
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
  );
};

export const SelectInModal = () => {
  const modal = useModal({ isOpenDefault: true });
  return (
    <Modal size={ModalSize.MEDIUM} {...modal} title="Example">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Select
          label="Context"
          options={[
            {
              label: "Ask a document",
            },
            {
              label: "Download files",
            },
            {
              label: "Ask for help",
            },
          ]}
          multi={true}
          fullWidth={true}
          clearable={true}
        />
        <div style={{ display: "flex", gap: "1rem" }}>
          <Input label="First name" />
          <Input label="Last name" />
        </div>
        <Input
          label="Email address"
          fullWidth={true}
          text="Only @acme.com domain is authorized"
        />
        <div style={{ display: "flex", gap: "1rem" }}>
          <div style={{ width: "25%" }}>
            <Input label="ZIP" fullWidth={true} />
          </div>
          <Input label="City" fullWidth={true} />
        </div>
        <Select
          label="Skills"
          options={[
            {
              label: "Communication",
            },
            {
              label: "Teamwork",
            },
            {
              label: "Problem solving",
            },
            {
              label: "Leadership",
            },
            {
              label: "Work ethic",
            },
          ]}
          multi={true}
          fullWidth={true}
        />
      </div>
    </Modal>
  );
};

export const ReactHookForm = () => {
  enum CitiesOptionEnum {
    NONE = "",
    DIJON = "dijon",
    PARIS = "paris",
    TOKYO = "tokyo",
    VANNES = "vannes",
  }

  interface SelectExampleFormValues {
    capitalCity: CitiesOptionEnum[];
  }

  const selectExampleSchema = Yup.object().shape({
    capitalCity: Yup.array()
      .required()
      .test({
        test: (cityList) =>
          cityList.every((city) =>
            [CitiesOptionEnum.PARIS, CitiesOptionEnum.TOKYO].includes(city)
          ),
        message: "Wrong answer!",
      }),
  });

  const methods = useForm<SelectExampleFormValues>({
    defaultValues: {
      capitalCity: [],
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
        <div className="clr-gray-900">
          Which cities are capital of countries ?
        </div>
        <RhfSelect
          name="capitalCity"
          label="Select a city"
          multi={true}
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
            {
              label: "Vannes",
              value: CitiesOptionEnum.VANNES,
            },
          ]}
        />
        <Button fullWidth={true}>Submit</Button>
      </form>
    </FormProvider>
  );
};
