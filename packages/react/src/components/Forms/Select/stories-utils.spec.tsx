import React, { useEffect, useState } from "react";
import { render, screen } from "@testing-library/react";
import { FormProvider, useForm } from "react-hook-form";
import { CunninghamProvider } from ":/components/Provider";
import { RhfSelect } from "./stories-utils";
import { Button } from ":/components/Button";
import userEvent from "@testing-library/user-event";

interface RhfFormValues {
  city: string;
}
const RhfForm = ({ values }: { values: RhfFormValues }) => {
  const methods = useForm<RhfFormValues>({
    defaultValues: {
      city: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  useEffect(() => {
    console.log('RhfForm::useEffect::reset:values', values);
    methods.reset(values);
  }, [values]);

  const onSubmit = (values) => {
    console.log('RhfForm::onSubmit::values', values)
  }

  return (
    <CunninghamProvider>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <RhfSelect
            name="city"
            label="City"
            options={[
              {
                value: "paris",
                label: "Paris",
              },
              {
                value: "london",
                label: "London",
              },
            ]}
          />
          <Button type="submit">Submit</Button>
        </form>
      </FormProvider>
    </CunninghamProvider>
  );
};

describe("stories-utils:<RhfSelect/>", () => {
  it("should initializer with value", async () => {
    render(<RhfForm values={{ city: "paris" }} />);

    const user = userEvent.setup();

    // This dump "{ city: 'paris' }"
    // reset work's
    await user.click(screen.getByText('Submit'));

    const cityInput: HTMLSelectElement = screen.getByRole("combobox", {
      name: "City",
    });

    // /!\ here cityInput.value === undefined
    expect(cityInput.value).toBe("paris");
    expect(cityInput).toHaveValue("paris");
  });
});
