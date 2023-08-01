import { yupResolver } from "@hookform/resolvers/yup";
import { Meta } from "@storybook/react";
import React from "react";
import { useForm, Controller, ControllerRenderProps } from "react-hook-form";
import * as Yup from "yup";
import { Input } from ":/components/Forms/Input";
import { Button } from ":/components/Button";
import { Select } from ":/components/Forms/Select";
import { CunninghamProvider } from ":/components/Provider";
import { Radio, RadioGroup } from ":/components/Forms/Radio";
import {
  getFieldState,
  getFieldErrorMessage,
  onSubmit,
} from ":/tests/reactHookFormUtils";

export default {
  title: "Components/Forms/Reac-Hook-Form",
} as Meta;

enum GenderEnum {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other",
}
enum CompetitionEnum {
  ATHLETICS = "Athletics",
  SWIMMING = "Swimming",
  MARATHON = "Marathon",
}
enum RewardEnum {
  BRONZE = "bronze",
  SILVER = "silver",
  GOLD = "gold",
  FLOCON = "flocon",
  OURSON = "ourson",
  CHAMOIS = "chamois",
}

interface SportsStoryFormValues {
  firstName: string;
  lastName: string;
  gender: GenderEnum;
  competition: CompetitionEnum;
  rewards: RewardEnum[];
}

const sportsSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  gender: Yup.string<GenderEnum>().required(),
  competition: Yup.string()
    .defined()
    .required()
    .oneOf(Object.values(CompetitionEnum)),
  rewards: Yup.array().of(Yup.string<RewardEnum>().defined()).defined(),
});

export const Sports = () => {
  const { register, handleSubmit, formState, control } =
    useForm<SportsStoryFormValues>({
      defaultValues: {
        firstName: "",
        lastName: "",
        rewards: [],
      },
      mode: "onChange",
      reValidateMode: "onChange",
      resolver: yupResolver(sportsSchema),
    });

  const renderCompetitionSelect = ({
    field,
  }: {
    field: ControllerRenderProps<SportsStoryFormValues, "competition">;
  }) => {
    return (
      <Select
        label="Competition"
        options={[
          {
            label: "Athletics",
            value: CompetitionEnum.ATHLETICS,
          },
          {
            label: "Swimming",
            value: CompetitionEnum.SWIMMING,
          },
          {
            label: "Marathon",
            value: CompetitionEnum.MARATHON,
          },
        ]}
        state={getFieldState("competition", formState)}
        text={getFieldErrorMessage("competition", formState)}
        onBlur={field.onBlur}
        onChange={field.onChange}
        value={field.value}
      />
    );
  };

  const renderRewardsMultiSelect = ({
    field,
  }: {
    field: ControllerRenderProps<SportsStoryFormValues, "rewards">;
  }) => {
    return (
      <Select
        label="Rewards"
        options={[
          {
            label: "Bronze",
            value: RewardEnum.BRONZE,
          },
          {
            label: "Silver",
            value: RewardEnum.SILVER,
          },
          {
            label: "Gold",
            value: RewardEnum.GOLD,
          },
          {
            label: "Flocon",
            value: RewardEnum.FLOCON,
          },
          {
            label: "Ourson",
            value: RewardEnum.OURSON,
          },
          {
            label: "Chamois",
            value: RewardEnum.CHAMOIS,
          },
        ]}
        state={getFieldState("rewards", formState)}
        text={getFieldErrorMessage("rewards", formState)}
        onBlur={field.onBlur}
        onChange={field.onChange}
        value={field.value}
        multi={true}
      />
    );
  };

  return (
    <CunninghamProvider>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "400px",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1
          className="fs-h3 fw-bold clr-greyscale-900"
          style={{ textAlign: "center" }}
        >
          Register
        </h1>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Input
            label="First name"
            state={getFieldState("firstName", formState)}
            text={getFieldErrorMessage("firstName", formState)}
            {...register("firstName")}
          />
          <Input
            label="Last name"
            state={getFieldState("lastName", formState)}
            text={getFieldErrorMessage("lastName", formState)}
            {...register("lastName")}
          />
        </div>

        <RadioGroup
          state={getFieldState("gender", formState)}
          text={getFieldErrorMessage("gender", formState)}
          style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}
        >
          <Radio
            label="Male"
            fullWidth={true}
            state={getFieldState("gender", formState)}
            {...register("gender")}
          />
          <Radio
            label="Female"
            state={getFieldState("gender", formState)}
            {...register("gender")}
          />
          <Radio
            label="Other"
            state={getFieldState("gender", formState)}
            {...register("gender")}
          />
        </RadioGroup>
        <Controller
          control={control}
          name="competition"
          render={renderCompetitionSelect}
        />
        <Controller
          control={control}
          name="rewards"
          render={renderRewardsMultiSelect}
        />
        <Button fullWidth={true}>Apply</Button>
        <Button fullWidth={true} color="secondary">
          Need help ?
        </Button>
      </form>
    </CunninghamProvider>
  );
};
