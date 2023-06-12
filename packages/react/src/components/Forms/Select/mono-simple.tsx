import { useSelect } from "downshift";
import React from "react";
import {
  optionToString,
  SelectMonoAux,
  SubProps,
} from ":/components/Forms/Select/mono-common";

export const SelectMonoSimple = (props: SubProps) => {
  const downshiftReturn = useSelect({
    ...props.downshiftProps,
    items: props.options,
    itemToString: optionToString,
  });

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
