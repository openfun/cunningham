import { Meta } from "@storybook/react";
import React from "react";
import { Input } from ":/components/Forms/Input";
import { Checkbox } from ":/components/Forms/Checkbox";
import { Button } from ":/components/Button";
import { Select } from ":/components/Forms/Select";
import { CunninghamProvider } from ":/components/Provider";
import { FileUploader } from ":/components/Forms/FileUploader";
import { Switch } from ":/components/Forms/Switch";
import { Radio } from ":/components/Forms/Radio";

export default {
  title: "Components/Forms/Examples",
} as Meta;


export const Sports = () => {
  return (
    <CunninghamProvider>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "400px",
        }}
      >
        <h1
          className="fs-h3 fw-bold clr-greyscale-900"
          style={{ textAlign: "center" }}
        >
          Register
        </h1>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Input label="First name" />
          <Input label="Last name" />
        </div>

        <div style={{ display: "flex", gap: "0.5rem" }}>
          <Radio name="gender" label="Male" fullWidth={true} />
          <Radio name="gender" label="Female" />
          <Radio name="gender" label="Other" />
        </div>
        <Select
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
        <Select
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
        <Button fullWidth={true} color="secondary">
          Need help ?
        </Button>
      </form>
    </CunninghamProvider>
  );
};
