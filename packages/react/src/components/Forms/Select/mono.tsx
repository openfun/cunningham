import React, {
  forwardRef,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { UseSelectStateChange } from "downshift";
import { FieldProps } from ":/components/Forms/Field";
import { optionToValue, SubProps } from ":/components/Forms/Select/mono-common";
import { SelectMonoSearchable } from ":/components/Forms/Select/mono-searchable";
import { SelectMonoSimple } from ":/components/Forms/Select/mono-simple";
import { SelectHandle } from ":/components/Forms/Select/index";

export interface Option {
  value?: string;
  label: string;
  disabled?: boolean;
}

export type SelectProps = PropsWithChildren &
  FieldProps & {
    label: string;
    hideLabel?: boolean;
    options: Option[];
    searchable?: boolean;
    name?: string;
    defaultValue?: string | number | string[];
    value?: string | number | string[];
    onChange?: (event: {
      target: { value: string | number | undefined | string[] };
    }) => void;
    onBlur?: (event: {
      target: { value: string | number | undefined | string[] };
    }) => void;
    disabled?: boolean;
    clearable?: boolean;
    multi?: boolean;
  };

export const SelectMono = forwardRef<SelectHandle, SelectProps>(
  (props, ref) => {
    const defaultSelectedItem = props.defaultValue
      ? props.options.find(
          (option) => optionToValue(option) === props.defaultValue,
        )
      : undefined;
    const [value, setValue] = useState(
      defaultSelectedItem ? optionToValue(defaultSelectedItem) : props.value,
    );

    /**
     * This useEffect is used to update the local value when the component is controlled.
     * The defaultValue is used only on first render.
     */
    useEffect(() => {
      if (props.defaultValue) {
        return;
      }
      setValue(props.value);
    }, [props.value, props.defaultValue]);

    const commonDownshiftProps: SubProps["downshiftProps"] = {
      initialSelectedItem: defaultSelectedItem,
      onSelectedItemChange: (e: UseSelectStateChange<Option>) => {
        const eventCmp = e.selectedItem ? optionToValue(e.selectedItem) : null;
        const valueCmp = value ?? null;
        // We make sure to not trigger a onChange event if the value are not different.
        // This could happen on first render when the component is controlled, the value will be
        // set inside a useEffect down in SelectMonoSearchable or SelectMonoSimple. So that means the
        // downshift component will always render empty the first time.
        if (eventCmp !== valueCmp) {
          setValue(eventCmp || undefined);
          props.onChange?.({
            target: {
              value: e.selectedItem ? optionToValue(e.selectedItem) : undefined,
            },
          });
        }
      },
      isItemDisabled: (item) => !!item.disabled,
    };

    return props.searchable ? (
      <SelectMonoSearchable
        {...props}
        downshiftProps={commonDownshiftProps}
        value={value}
        ref={ref}
      />
    ) : (
      <SelectMonoSimple
        {...props}
        downshiftProps={commonDownshiftProps}
        value={value}
        ref={ref}
      />
    );
  },
);
