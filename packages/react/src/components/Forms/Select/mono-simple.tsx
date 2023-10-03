import { useSelect } from "downshift";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import {
  optionToString,
  optionToValue,
  SelectMonoAux,
  SubProps,
} from ":/components/Forms/Select/mono-common";
import { SelectHandle } from ":/components/Forms/Select/index";

export const SelectMonoSimple = forwardRef<SelectHandle, SubProps>(
  (props, ref) => {
    const downshiftReturn = useSelect({
      ...props.downshiftProps,
      items: props.options,
      itemToString: optionToString,
    });

    // When component is controlled, this useEffect will update the local selected item.
    useEffect(() => {
      const selectedItem = downshiftReturn.selectedItem
        ? optionToValue(downshiftReturn.selectedItem)
        : undefined;

      const optionToSelect = props.options.find(
        (option) => optionToValue(option) === props.value,
      );

      // Already selected
      if (optionToSelect && selectedItem === props.value) {
        return;
      }

      downshiftReturn.selectItem(optionToSelect ?? null);
    }, [props.value, props.options]);

    const wrapperRef = useRef<HTMLElement>(null);

    useImperativeHandle(ref, () => ({
      blur: () => {
        downshiftReturn.closeMenu();
        wrapperRef.current?.blur();
      },
    }));

    return (
      <SelectMonoAux
        {...props}
        downshiftReturn={{
          ...downshiftReturn,
          wrapperProps: downshiftReturn.getToggleButtonProps({
            disabled: props.disabled,
            ref: wrapperRef,
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
  },
);
