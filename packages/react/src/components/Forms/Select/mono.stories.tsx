import { Meta, StoryFn } from "@storybook/react";
import React, { useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { onSubmit } from ":/components/Forms/Examples/ReactHookForm/reactHookFormUtils";
import {
  ContextCallbackFetchOptions,
  Option,
  Select,
  SelectHandle,
} from ":/components/Forms/Select";
import { Button } from ":/components/Button";
import {
  getCountryOption,
  RhfSelect,
  fetchOptions,
} from ":/components/Forms/Select/stories-utils";
import { Modal, ModalSize, useModal } from ":/components/Modal";
import { Input } from ":/components/Forms/Input";
import { CunninghamProvider } from ":/components/Provider";

export default {
  title: "Components/Forms/Select/Mono",
  component: Select,
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = (args) => (
  <div style={{ paddingBottom: "200px", position: "relative" }}>
    <Select {...args} />
  </div>
);

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

export const ControlledEdit = () => {
  const [value, setValue] = useState(OPTIONS[0].value);
  const [options, setOptions] = useState(OPTIONS);

  const edit = () => {
    setOptions([{ value: "woodbury", label: "EDITTED" }, ...OPTIONS.slice(1)]);
  };

  return (
    <div>
      <div>
        Value: <span>{value}</span>
        <Button onClick={edit}>Edit</Button>
      </div>
      <Select
        label="Select a city"
        options={options}
        value={value}
        multi={false}
        searchable={true}
        onChange={(e) => {
          setValue(e.target.value as string);
        }}
      />
      <Button onClick={() => setValue("")}>Reset</Button>
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

export const SearchableUncontrolledWithAsyncOptionsFetching = () => {
  const [isLoading, setIsLoading] = useState(true);

  const fetchAsyncOptions = async (context: ContextCallbackFetchOptions) => {
    let arrayOptions: Option[] = [];

    setIsLoading(true);
    try {
      arrayOptions = await fetchOptions(context, OPTIONS, 1000);
    } catch (error) {
      /* empty */
    }

    setIsLoading(false);
    return arrayOptions;
  };

  return (
    <div style={{ paddingBottom: "200px", position: "relative" }}>
      <Select
        label="Select a city"
        options={fetchAsyncOptions}
        isLoading={isLoading}
        searchable={true}
      />
    </div>
  );
};

export const SearchableUncontrolledWithAsyncOptionsFetchingAndDefaultValue =
  () => {
    const [isLoading, setIsLoading] = useState(true);

    const fetchAsyncOptions = async (context: ContextCallbackFetchOptions) => {
      let arrayOptions: Option[] = [];

      setIsLoading(true);
      try {
        arrayOptions = await fetchOptions(context, OPTIONS, 1000);
      } catch (error) {
        /* empty */
      }

      setIsLoading(false);
      return arrayOptions;
    };

    return (
      <div style={{ paddingBottom: "200px", position: "relative" }}>
        <Select
          label="Select a city"
          options={fetchAsyncOptions}
          isLoading={isLoading}
          defaultValue={OPTIONS[4].value}
          searchable={true}
        />
      </div>
    );
  };

export const SearchableControlledWithAsyncOptionsFetching = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState<string | number | undefined>("woodbury");

  const fetchAsyncOptions = async (context: ContextCallbackFetchOptions) => {
    let arrayOptions: Option[] = [];

    setIsLoading(true);
    try {
      arrayOptions = await fetchOptions(context, OPTIONS, 1000);
    } catch (error) {
      /* empty */
    }

    setIsLoading(false);
    return arrayOptions;
  };

  return (
    <CunninghamProvider>
      <div style={{ paddingBottom: "200px", position: "relative" }}>
        <div>Value = {value}|</div>
        <Button onClick={() => setValue(undefined)}>Clear</Button>
        <Select
          label="City"
          options={fetchAsyncOptions}
          searchable={true}
          isLoading={isLoading}
          value={value}
          onChange={(e) => setValue(e.target.value as string)}
        />
      </div>
    </CunninghamProvider>
  );
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
    defaultValue: "france",
  },
};
export const SearchableCustomRender = {
  render: Template,
  args: {
    label: "Select a country",
    showLabelWhenSelected: false,
    searchable: true,
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
      <Select label="Select a city" options={OPTIONS} ref={ref} />
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
