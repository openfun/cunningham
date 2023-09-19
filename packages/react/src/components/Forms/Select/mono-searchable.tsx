import React, { useEffect, useRef, useState } from "react";
import { useCombobox } from "downshift";
import { useCunningham } from ":/components/Provider";
import {
  getOptionsFilter,
  optionToString,
  optionToValue,
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

  // When component is controlled, this useEffect will update the local selected item.
  useEffect(() => {
    if (props.downshiftProps.initialSelectedItem !== undefined) {
      return;
    }
    const optionToSelect = props.options.find(
      (option) => optionToValue(option) === props.value,
    );
    downshiftReturn.selectItem(optionToSelect ?? null);
  }, [props.value, props.options, props.downshiftProps]);

  // Even there is already a value selected, when opening the combobox menu we want to display all available choices.
  useEffect(() => {
    if (downshiftReturn.isOpen) {
      setOptionsToDisplay(props.options);
    }
  }, [downshiftReturn.isOpen]);

  const onInputBlur = () => {
    setHasInputFocused(false);
    if (downshiftReturn.selectedItem) {
      // Here the goal is to make sure that when the input in blurred then the input value
      // has exactly the selectedItem label. Which is not the case by default.
      downshiftReturn.selectItem(downshiftReturn.selectedItem);
    } else {
      // We want the input to be empty when no item is selected.
      downshiftReturn.setInputValue("");
    }
  };

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
          onInputBlur();
        }}
      />
    </SelectMonoAux>
  );
};
