import React from "react";
import { Option, OptionWithRender } from ":/components/Forms/Select";

export const isOptionWithRender = (
  option: Option,
): option is OptionWithRender => {
  return (option as OptionWithRender).render !== undefined;
};

export const SelectedOption = ({
  option,
  showLabelWhenSelected = true,
}: {
  option: Option | undefined | null;
  showLabelWhenSelected?: boolean;
}) => {
  if (!option) {
    return null;
  }
  if (isOptionWithRender(option) && !showLabelWhenSelected) {
    return option.render();
  }
  return <span>{option.label}</span>;
};
