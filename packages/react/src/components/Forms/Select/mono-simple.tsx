import { useSelect } from "downshift";
import React, { useEffect } from "react";
import {
  optionToString,
  optionToValue,
  SelectMonoAux,
  SubProps,
} from ":/components/Forms/Select/mono-common";

export const SelectMonoSimple = (props: SubProps) => {
  const downshiftReturn = useSelect({
    ...props.downshiftProps,
    items: props.options,
    itemToString: optionToString,
  });

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

  return (
    <SelectMonoAux
      {...props}
      downshiftReturn={{
        ...downshiftReturn,
        wrapperProps: downshiftReturn.getToggleButtonProps({
          disabled: props.disabled,
        }),
        toggleButtonProps: {},
      }}
      labelAsPlaceholder={!downshiftReturn.selectedItem}
    >
      {downshiftReturn.selectedItem && (
        <span>{optionToString(downshiftReturn.selectedItem)}</span>
      )}
    </SelectMonoAux>
  );
};
