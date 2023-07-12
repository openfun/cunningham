import React, {
  forwardRef,
  PropsWithChildren,
  Ref,
  useMemo,
  useRef,
} from "react";
import {
  DateRangePickerState,
  DatePickerState,
} from "@react-stately/datepicker";
import { DateRangePickerAria, DatePickerAria } from "@react-aria/datepicker";
import classNames from "classnames";
import { I18nProvider } from "@react-aria/i18n";
import { Button } from ":/components/Button";
import { Popover } from ":/components/Popover";
import { Field, FieldProps } from ":/components/Forms/Field";
import { useCunningham } from ":/components/Provider";
import {
  Calendar,
  CalendarRange,
} from ":/components/Forms/DatePicker/Calendar";
import { convertDateValueToString } from ":/components/Forms/DatePicker/utils";

export type DatePickerAuxSubProps = FieldProps & {
  label?: string;
  minValue?: string;
  maxValue?: string;
  disabled?: boolean;
  name?: string;
  locale?: string;
};

export type DatePickerAuxProps = PropsWithChildren &
  DatePickerAuxSubProps & {
    pickerState: DateRangePickerState | DatePickerState;
    pickerProps: Pick<
      DateRangePickerAria | DatePickerAria,
      "buttonProps" | "groupProps"
    >;
    calendar: React.ReactElement<typeof Calendar | typeof CalendarRange>;
    isFocused: boolean;
    labelAsPlaceholder: boolean;
    optionalClassName?: string;
    onClear: () => void;
  };

/**
 * This component is used by date and date range picker components.
 * It contains the common logic between the two.
 */
const DatePickerAux = forwardRef(
  (
    {
      pickerState,
      pickerProps,
      onClear,
      isFocused,
      labelAsPlaceholder,
      calendar,
      children,
      name,
      locale,
      disabled = false,
      optionalClassName,
      ...props
    }: DatePickerAuxProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    const { t, currentLocale } = useCunningham();
    const pickerRef = useRef<HTMLDivElement>(null);

    const isDateInvalid = useMemo(
      () =>
        pickerState.validationState === "invalid" || props.state === "error",
      [pickerState.validationState, props.state],
    );

    // onPress props don't exist on the <Button /> component.
    // Remove it to avoid any warning.
    const { onPress: onPressToggleButton, ...otherButtonProps } =
      pickerProps.buttonProps;

    return (
      <I18nProvider locale={locale || currentLocale}>
        <Field {...props}>
          <div
            ref={pickerRef}
            className={classNames(["c__date-picker", optionalClassName], {
              "c__date-picker--disabled": disabled,
              "c__date-picker--invalid": isDateInvalid,
              "c__date-picker--success": props.state === "success",
              "c__date-picker--focused":
                !isDateInvalid &&
                !disabled &&
                (pickerState.isOpen || isFocused),
            })}
          >
            <div
              className={classNames("c__date-picker__wrapper", {
                "c__date-picker__wrapper--clickable": labelAsPlaceholder,
              })}
              ref={ref}
              {...pickerProps.groupProps}
              role="button"
              tabIndex={0}
              onClick={() => !pickerState.isOpen && pickerState.open()}
            >
              {"dateRange" in pickerState ? (
                <>
                  <input
                    type="hidden"
                    name={name && `${name}_start`}
                    value={convertDateValueToString(pickerState.value.start)}
                  />
                  <input
                    type="hidden"
                    name={name && `${name}_end`}
                    value={convertDateValueToString(pickerState.value.end)}
                  />
                </>
              ) : (
                <input
                  type="hidden"
                  name={name}
                  value={convertDateValueToString(pickerState.value)}
                />
              )}
              <div className="c__date-picker__wrapper__icon">
                <Button
                  {...{
                    ...otherButtonProps,
                    "aria-label": t(
                      pickerState.isOpen
                        ? "components.forms.date_picker.toggle_button_aria_label_close"
                        : "components.forms.date_picker.toggle_button_aria_label_open",
                    ),
                  }}
                  color="tertiary"
                  size="small"
                  className="c__date-picker__wrapper__toggle"
                  onClick={pickerState.toggle}
                  icon={<span className="material-icons">calendar_today</span>}
                  disabled={disabled}
                />
              </div>
              {children}
              <Button
                className={classNames("c__date-picker__inner__action", {
                  "c__date-picker__inner__action--empty": !pickerState.value,
                  "c__date-picker__inner__action--hidden":
                    labelAsPlaceholder || disabled,
                })}
                color="tertiary"
                size="small"
                icon={<span className="material-icons">cancel</span>}
                onClick={onClear}
                aria-label={t(
                  "components.forms.date_picker.clear_button_aria_label",
                )}
                disabled={disabled}
              />
            </div>
            {pickerState.isOpen && (
              <Popover
                parentRef={pickerRef}
                onClickOutside={pickerState.close}
                borderless
              >
                {calendar}
              </Popover>
            )}
          </div>
        </Field>
      </I18nProvider>
    );
  },
);

export default DatePickerAux;
