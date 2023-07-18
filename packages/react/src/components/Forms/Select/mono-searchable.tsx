import React, { useEffect, useRef, useState } from "react";
import { useCombobox } from "downshift";
import { useCunningham } from ":/components/Provider";
import {
  getOptionsFilter,
  optionToString,
  SelectMonoAux,
  SubProps,
} from ":/components/Forms/Select/mono-common";

export const SelectMonoSearchable = (props: SubProps) => {
  const { t } = useCunningham();
  const [optionsToDisplay, setOptionsToDisplay] = useState(props.options);
  const [hasInputFocused, setHasInputFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const downshiftReturn = useCombobox({
    ...props.downshiftProps,
    items: optionsToDisplay,
    itemToString: optionToString,
    onInputValueChange: (e) => {
      setOptionsToDisplay(props.options.filter(getOptionsFilter(e.inputValue)));
      if (!e.inputValue) {
        downshiftReturn.selectItem(null);
      }
    },
  });

  const [labelAsPlaceholder, setLabelAsPlaceholder] = useState(
    !downshiftReturn.selectedItem,
  );
  useEffect(() => {
    if (hasInputFocused || downshiftReturn.inputValue) {
      setLabelAsPlaceholder(false);
      return;
    }
    setLabelAsPlaceholder(!downshiftReturn.selectedItem);
  }, [
    downshiftReturn.selectedItem,
    hasInputFocused,
    downshiftReturn.inputValue,
  ]);

  const inputProps = downshiftReturn.getInputProps({
    ref: inputRef,
    disabled: props.disabled,
  });

  return (
    <SelectMonoAux
      {...props}
      downshiftReturn={{
        ...downshiftReturn,
        wrapperProps: {
          onClick: () => {
            inputRef.current?.focus();
            downshiftReturn.openMenu();
          },
        },
        toggleButtonProps: downshiftReturn.getToggleButtonProps({
          disabled: props.disabled,
          "aria-label": t("components.forms.select.toggle_button_aria_label"),
        }),
      }}
      labelAsPlaceholder={labelAsPlaceholder}
      options={optionsToDisplay}
    >
      <input
        {...inputProps}
        onFocus={() => {
          setHasInputFocused(true);
        }}
        onBlur={() => {
          setHasInputFocused(false);
        }}
      />
    </SelectMonoAux>
  );
};
