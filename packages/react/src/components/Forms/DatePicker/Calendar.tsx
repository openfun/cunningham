import React, { forwardRef, Ref, useMemo, useRef } from "react";
import {
  CalendarDate,
  createCalendar,
  DateValue,
  GregorianCalendar,
  toCalendar,
} from "@internationalized/date";
import {
  DateFormatterOptions,
  useDateFormatter,
  useLocale,
} from "@react-aria/i18n";
import {
  CalendarState,
  RangeCalendarState,
  useCalendarState,
  useRangeCalendarState,
} from "@react-stately/calendar";
import {
  CalendarAria,
  useCalendar,
  useRangeCalendar,
} from "@react-aria/calendar";
import {
  useSelect,
  UseSelectReturnValue,
  UseSelectStateChange,
} from "downshift";
import classNames from "classnames";
import { CalendarProps, RangeCalendarProps } from "react-aria";
import { range } from ":/utils";
import { Button } from ":/components/Button";
import { CalendarGrid } from ":/components/Forms/DatePicker/CalendarGrid";
import { useCunningham } from ":/components/Provider";

// todo to be factorized with the select component
interface Option {
  value: number;
  label: string;
  disabled?: boolean;
}

// todo to be factorized with the select component
const optionToString = (option: Option | null) => {
  return option ? option.label : "";
};

type DropdownValuesProps = {
  options: Array<Option>;
  downShift: UseSelectReturnValue<Option>;
};

// todo to be factorized with the select component
const DropdownValues = ({ options, downShift }: DropdownValuesProps) => (
  <div
    className={classNames("c__calendar__menu", {
      "c__calendar__menu--opened": downShift.isOpen,
    })}
    {...downShift.getMenuProps()}
  >
    <ul>
      {downShift.isOpen &&
        options.map((item, index) => (
          <li
            key={`${item.value}${index}`}
            {...downShift.getItemProps({
              item,
              index,
              disabled: item.disabled,
            })}
            className={classNames("c__calendar__menu__item", {
              "c__calendar__menu__item--highlight":
                downShift.highlightedIndex === index,
              "c__calendar__menu__item--selected":
                downShift.selectedItem?.label === item.label,
              "c__calendar__menu__item--disabled": item.disabled,
            })}
          >
            <span>{item.label}</span>
          </li>
        ))}
    </ul>
  </div>
);

interface CalendarAuxProps extends CalendarAria {
  minYear?: number;
  maxYear?: number;
  state: RangeCalendarState | CalendarState;
}

const CalendarAux = forwardRef(
  (
    {
      state,
      minYear = 1900, // in gregorian calendar.
      maxYear = 2050, // in gregorian calendar.
      prevButtonProps,
      nextButtonProps,
      calendarProps,
    }: CalendarAuxProps,
    ref: Ref<HTMLDivElement>
  ) => {
    const { t } = useCunningham();

    const useTimeZoneFormatter = (formatOptions: DateFormatterOptions) => {
      return useDateFormatter({
        ...formatOptions,
        timeZone: state.timeZone,
      });
    };

    const monthItemsFormatter = useTimeZoneFormatter({ month: "long" });
    const selectedMonthItemFormatter = useTimeZoneFormatter({ month: "short" });
    const yearItemsFormatter = useTimeZoneFormatter({ year: "numeric" });

    const monthItems: Array<Option> = useMemo(() => {
      // Note that in some calendar systems, such as the Hebrew, the number of months may differ between years.
      const numberOfMonths = state.focusedDate.calendar.getMonthsInYear(
        state.focusedDate
      );
      return range(1, numberOfMonths).map((monthNumber) => {
        const date = state.focusedDate.set({ month: monthNumber });
        return {
          value: monthNumber,
          label: monthItemsFormatter.format(date.toDate(state.timeZone)),
          disabled:
            (!!state.minValue && state.minValue.month > monthNumber) ||
            (!!state.maxValue && state.maxValue.month < monthNumber),
        };
      });
    }, [state.maxValue, state.minValue, state.focusedDate.year]);

    const yearItems: Array<Option> = useMemo(() => {
      const calendarCurrentUser = createCalendar(
        new Intl.DateTimeFormat().resolvedOptions().calendar
      );
      const minDate = toCalendar(
        new CalendarDate(new GregorianCalendar(), minYear, 1, 1),
        calendarCurrentUser
      );
      const maxDate = toCalendar(
        new CalendarDate(new GregorianCalendar(), maxYear, 12, 31),
        calendarCurrentUser
      );
      return range(minDate.year, maxDate.year).map((yearNumber) => {
        const date = state.focusedDate.set({ year: yearNumber });
        return {
          value: yearNumber,
          label: yearItemsFormatter.format(date.toDate(state.timeZone)),
          disabled:
            (!!state.minValue && state.minValue.year > yearNumber) ||
            (!!state.maxValue && state.maxValue.year < yearNumber),
        };
      });
    }, [state.focusedDate, state.timeZone, state.maxValue, state.minValue]);

    const useDownshiftSelect = (
      key: string,
      items: Array<Option>
    ): UseSelectReturnValue<Option> => {
      return useSelect({
        items,
        itemToString: optionToString,
        onSelectedItemChange: (e: UseSelectStateChange<Option>) => {
          const updatedFocusedDate = state.focusedDate.set({
            [key]: e?.selectedItem?.value,
          });
          state.setFocusedDate(updatedFocusedDate);
        },
      });
    };
    const downshiftMonth = useDownshiftSelect("month", monthItems);
    const downshiftYear = useDownshiftSelect("year", yearItems);

    // isDisabled, onPress and onFocusChange props don't exist on the <Button /> component.
    // remove them to avoid any warning.
    const {
      isDisabled: isPrevButtonDisabled,
      onPress: onPressPrev,
      onFocusChange: onFocusChangePrev,
      ...prevButtonOtherProps
    } = prevButtonProps;
    const {
      isDisabled: isNextButtonDisabled,
      onPress: onPressNext,
      onFocusChange: onFocusChangeNext,
      ...nextButtonOtherProps
    } = nextButtonProps;

    const getToggleButtonProps = (
      key: string,
      items: Array<Option>,
      downshift: UseSelectReturnValue<Option>
    ) => ({
      ...downshift.getToggleButtonProps(),
      onClick: () => {
        const selectedItem = items.find(
          (item) => item.value === state.focusedDate[key as keyof CalendarDate]
        );
        if (selectedItem) {
          downshift.selectItem(selectedItem);
        }
        downshift.toggleMenu();
      },
      "aria-label": t(
        `components.forms.date_picker.${key}_select_button_aria_label`
      ),
    });

    return (
      <div className="c__calendar">
        <div
          ref={ref}
          {...calendarProps}
          className={classNames("c__calendar__wrapper", {
            "c__calendar__wrapper--opened":
              !downshiftMonth.isOpen && !downshiftYear.isOpen,
          })}
        >
          <div className="c__calendar__wrapper__header">
            <div className="c__calendar__wrapper__header__actions">
              <Button
                color="tertiary"
                size="small"
                icon={<span className="material-icons">navigate_before</span>}
                {...{
                  ...prevButtonOtherProps,
                  "aria-label": t(
                    "components.forms.date_picker.previous_month_button_aria_label"
                  ),
                }}
                disabled={isPrevButtonDisabled}
                onClick={() => state.focusPreviousSection()}
              />
              <Button
                className="c__calendar__wrapper__header__actions__dropdown"
                color="tertiary"
                size="small"
                iconPosition="right"
                icon={<span className="material-icons">arrow_drop_down</span>}
                {...getToggleButtonProps("month", monthItems, downshiftMonth)}
              >
                {selectedMonthItemFormatter.format(
                  state.focusedDate.toDate(state.timeZone)
                )}
              </Button>
              <Button
                color="tertiary"
                size="small"
                icon={<span className="material-icons">navigate_next</span>}
                {...{
                  ...nextButtonOtherProps,
                  "aria-label": t(
                    "components.forms.date_picker.next_month_button_aria_label"
                  ),
                }}
                disabled={isNextButtonDisabled}
                onClick={() => state.focusNextSection()}
              />
            </div>
            <div className="c__calendar__wrapper__header__actions">
              <Button
                color="tertiary"
                size="small"
                icon={<span className="material-icons">navigate_before</span>}
                onClick={() => state.focusPreviousSection(true)}
                disabled={
                  !!state.minValue &&
                  state.minValue.year >
                    state.focusedDate.add({ years: -1 }).year
                }
                aria-label={t(
                  "components.forms.date_picker.previous_year_button_aria_label"
                )}
              />
              <Button
                className="c__calendar__wrapper__header__actions__dropdown"
                color="tertiary"
                size="small"
                iconPosition="right"
                icon={<span className="material-icons">arrow_drop_down</span>}
                {...getToggleButtonProps("year", yearItems, downshiftYear)}
              >
                {yearItemsFormatter.format(
                  state.focusedDate.toDate(state.timeZone)
                )}
              </Button>
              <Button
                color="tertiary"
                size="small"
                icon={<span className="material-icons">navigate_next</span>}
                onClick={() => state.focusNextSection(true)}
                disabled={
                  !!state.maxValue &&
                  state.maxValue.year < state.focusedDate.add({ years: 1 }).year
                }
                aria-label={t(
                  "components.forms.date_picker.next_year_button_aria_label"
                )}
              />
            </div>
          </div>
          {!downshiftMonth.isOpen && !downshiftYear.isOpen && (
            <CalendarGrid state={state} />
          )}
        </div>
        <DropdownValues options={monthItems} downShift={downshiftMonth} />
        <DropdownValues options={yearItems} downShift={downshiftYear} />
      </div>
    );
  }
);

export const Calendar = (props: CalendarProps<DateValue>) => {
  const { locale } = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const state = useCalendarState({
    ...props,
    locale,
    createCalendar,
  });
  const calendarProps = useCalendar(props, state);
  return <CalendarAux {...calendarProps} state={state} ref={ref} />;
};

export const CalendarRange = (props: RangeCalendarProps<DateValue>) => {
  const { locale } = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const state = useRangeCalendarState({
    ...props,
    locale,
    createCalendar,
  });
  const calendarProps = useRangeCalendar(props, state, ref);
  return <CalendarAux {...calendarProps} state={state} ref={ref} />;
};
