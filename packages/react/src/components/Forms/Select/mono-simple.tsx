import { useSelect, UseSelectReturnValue } from "downshift";
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
import { Option, SelectHandle, SelectProps } from ":/components/Forms/Select";
import { SelectedOption } from ":/components/Forms/Select/utils";

/**
 * Here we ensure that the selected item is always in sync with the options.
 * Ex: If the selected options changes label we want to reflect that.
 * @param downshiftReturn
 * @param props
 * @param arrayOptions
 */
const useKeepSelectedItemInSyncWithOptions = (
  downshiftReturn: UseSelectReturnValue<Option>,
  props: Pick<SelectProps, "value">,
  arrayOptions: Option[],
) => {
  useEffect(() => {
    const optionToSelect = arrayOptions.find(
      (option) => optionToValue(option) === props.value,
    );
    downshiftReturn.selectItem(optionToSelect ?? null);
  }, [props.value, arrayOptions]);
};

export const SelectMonoSimple = forwardRef<SelectHandle, SubProps>(
  (props, ref) => {
    const arrayOptions: Option[] = Array.isArray(props.options)
      ? props.options
      : [];

    const downshiftReturn = useSelect({
      ...props.downshiftProps,
      items: arrayOptions,
      itemToString: optionToString,
    });

    const wrapperRef = useRef<HTMLElement>(null);

    useKeepSelectedItemInSyncWithOptions(downshiftReturn, props, arrayOptions);

    useImperativeHandle(ref, () => ({
      blur: () => {
        downshiftReturn.closeMenu();
        wrapperRef.current?.blur();
      },
    }));

    return (
      <SelectMonoAux
        {...props}
        options={arrayOptions}
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
        <SelectedOption option={downshiftReturn.selectedItem} {...props} />
      </SelectMonoAux>
    );
  },
);
