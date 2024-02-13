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

  const submit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const fakeDates = randomDates();
    const character: Character = {
      id: faker.string.uuid(),
      name: (formData.get("name") as any) || "",
      sex: (formData.get("sex") as any) || "",
      isGuest: (formData.get("is_guest") as any) || "",
      birthDate:
        new Date(formData.get("birthdate") as any) || fakeDates.birthDate,
      firstAppearanceDate:
        new Date(formData.get("appearance_dates_start") as any) ||
        fakeDates.firstAppearanceDate,
      lastAppearanceDate: fakeDates.lastAppearanceDate,
    };
    database.unshift(character);

    changePage(Page.HOME);
    toast("Character created successfully", VariantType.SUCCESS);
  };

  return (
    <form className="page__create clr-greyscale-900" onSubmit={submit}>
      <h1>Add a character</h1>
      <div className="card">
        <h3 className="fw-bold fs-h3">General Information</h3>
        <Alert type={VariantType.INFO}>
          You are about to add a new character to the collection
        </Alert>
        <Input
          name="name"
          label="Name"
          text="Enter first and last name"
          fullWidth={true}
          required
        />
        <Select
          name="sex"
          label="Sex"
          fullWidth={true}
          options={[
            {
              label: "Female",
              value: "female",
            },
            {
              label: "Male",
              value: "male",
            },
          ]}
        />
        <DatePicker name="birthdate" label="Birth Date" fullWidth={true} />
        <DateRangePicker
          name="appearance_dates"
          startLabel="First appearance"
          endLabel="Last appearance"
          fullWidth={true}
        />
        <Checkbox name="is_guest" label="This character is a guest" />
      </div>
      <div className="card mt-l">
        <h3 className="fw-bold fs-h3">Bio</h3>
        <Alert type={VariantType.WARNING}>
          Please be exhaustive, every detail counts!
        </Alert>
        <TextArea
          name="bio"
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
        <Switch name="is_public" label="Make this character public" />

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
        <Button fullWidth={true} type="submit">
          Add character
        </Button>
      </div>
    </form>
  );
};
