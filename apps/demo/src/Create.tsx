import React from "react";
import {
  Alert,
  Button,
  Checkbox,
  DatePicker,
  DateRangePicker,
  FileUploader,
  Input,
  Radio,
  RadioGroup,
  Select,
  Switch,
  TextArea,
  useToastProvider,
  VariantType,
} from "@openfun/cunningham-react";
import { faker } from "@faker-js/faker";
import { Character, database, randomDates } from "./Character";
import { Page, PageProps } from "./App";

export const Create = ({ changePage }: PageProps) => {
  const { toast } = useToastProvider();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const submit = () => {
    const character: Character = {
      id: faker.string.uuid(),
      name: inputRef.current?.value || "",
      sex: "male",
      isGuest: false,
      ...randomDates(),
    };
    database.unshift(character);

    changePage(Page.HOME);
    toast("Character created successfully", VariantType.SUCCESS);
  };

  return (
    <div className="page__create clr-greyscale-900">
      <h1>Add a character</h1>
      <div className="card">
        <h3 className="fw-bold fs-h3">General Information</h3>
        <Alert type={VariantType.INFO}>
          You are about to add a new character to the collection
        </Alert>
        <Input
          ref={inputRef}
          label="Name"
          text="Enter first and last name"
          fullWidth={true}
        />
        <Select
          label="Sex"
          fullWidth={true}
          options={[
            {
              label: "Male",
            },
            {
              label: "Female",
            },
          ]}
        />
        <DatePicker label="Birth Date" fullWidth={true} />
        <DateRangePicker
          startLabel="First appearance"
          endLabel="Last appearance"
          fullWidth={true}
        />
        <Checkbox label="This character is a guest" />
      </div>
      <div className="card mt-l">
        <h3 className="fw-bold fs-h3">Bio</h3>
        <Alert type={VariantType.WARNING}>
          Please be exhaustive, every detail counts!
        </Alert>
        <TextArea
          label="Biography"
          text="Enter a detailed biography"
          fullWidth={true}
          rows={8}
        />
        <RadioGroup>
          <Radio
            label="Appeared between 0 and 5 times"
            name="occurences"
            value="A"
          />
          <Radio
            label="Appeared between 6 and 10 times"
            name="occurences"
            value="B"
          />
          <Radio
            label="Appeared between 10 and 20 times"
            name="occurences"
            value="C"
          />
          <Radio
            label="Appeared between 20+ times"
            name="occurences"
            value="D"
          />
        </RadioGroup>
        <Switch label="Make this character public" />

        <div>
          <h4>Add pictures</h4>

          <div className="mt-s">
            <FileUploader
              fullWidth={true}
              text="JPG, PNG or GIF - Max file size 2MB"
              multiple={true}
            />
          </div>
        </div>
      </div>
      <div className="mt-l">
        <Button fullWidth={true} onClick={() => submit()}>
          Add character
        </Button>
      </div>
    </div>
  );
};
