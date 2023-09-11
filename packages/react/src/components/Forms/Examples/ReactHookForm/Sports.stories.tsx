import { yupResolver } from "@hookform/resolvers/yup";
import { Meta } from "@storybook/react";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import * as Yup from "yup";
import { Input } from ":/components/Forms/Input";
import { Button } from ":/components/Button";
import { CunninghamProvider } from ":/components/Provider";
import { Radio, RadioGroup } from ":/components/Forms/Radio";
import { RhfSelect } from ":/components/Forms/Select/stories-utils";
import {
  getFieldState,
  getFieldErrorMessage,
  onSubmit,
} from "./reactHookFormUtils";

export default {
  title: "Components/Forms/Examples/React-Hook-Form",
} as Meta;

interface SportsStoryFormValues {
  firstName: string;
  lastName: string;
  gender: string;
  competition: string;
  rewards: string[];
}

const sportsSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  gender: Yup.string().required(),
  competition: Yup.string().defined().required(),
  rewards: Yup.array().of(Yup.string().defined()).defined(),
});

export const Sports = () => {
  const methods = useForm<SportsStoryFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      rewards: [],
    },
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(sportsSchema),
  });

  return (
    <CunninghamProvider>
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
          <h1
            className="fs-h3 fw-bold clr-greyscale-900"
            style={{ textAlign: "center" }}
          >
            Register
          </h1>

          <div>
            <div className="fs-l clr-greyscale-800 mb-t">Gender</div>
            <RadioGroup
              state={getFieldState("gender", methods.formState)}
              text={getFieldErrorMessage("gender", methods.formState)}
              style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}
            >
              <Radio
                label="Male"
                state={getFieldState("gender", methods.formState)}
                {...methods.register("gender")}
              />
              <Radio
                label="Female"
                state={getFieldState("gender", methods.formState)}
                {...methods.register("gender")}
              />
              <Radio
                label="Other"
                state={getFieldState("gender", methods.formState)}
                {...methods.register("gender")}
              />
            </RadioGroup>
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Input
              label="First name"
              state={getFieldState("firstName", methods.formState)}
              text={getFieldErrorMessage("firstName", methods.formState)}
              {...methods.register("firstName")}
            />
            <Input
              label="Last name"
              state={getFieldState("lastName", methods.formState)}
              text={getFieldErrorMessage("lastName", methods.formState)}
              {...methods.register("lastName")}
            />
          </div>

          <RhfSelect
            name="competition"
            label="Competition"
            options={[
              {
                label: "Athletics",
              },
              {
                label: "Swimming",
              },
              {
                label: "Marathon",
              },
            ]}
            fullWidth={true}
          />
          <RhfSelect
            name="rewards"
            label="Previous rewards"
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
                label: "Flocon",
              },
              {
                label: "Ourson",
              },
              {
                label: "Chamois",
              },
            ]}
            fullWidth={true}
          />
          <Button fullWidth={true}>Apply</Button>
          <a
            href="/#"
            className="clr-greyscale-800 fs-m"
            style={{ textAlign: "center" }}
          >
            Need help ?
          </a>
        </form>
      </FormProvider>
    </CunninghamProvider>
  );
};
