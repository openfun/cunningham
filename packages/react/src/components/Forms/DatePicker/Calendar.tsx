import React, { RefAttributes, useMemo, useRef, useState } from "react";
import {
  CalendarDate,
  CalendarIdentifier,
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

type CalendarAuxProps = CalendarAria &
  RefAttributes<HTMLDivElement> & {
    minYear?: number;
    maxYear?: number;
    state: RangeCalendarState | CalendarState;
  };

const CalendarAux = ({
  state,
  minYear = 1900, // in gregorian calendar.
  maxYear = 2050, // in gregorian calendar.
  prevButtonProps,
  nextButtonProps,
  calendarProps,
  ref,
}: CalendarAuxProps) => {
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
  const [showGrid, setShowGrid] = useState(true);

  const monthItems: Array<Option> = useMemo(() => {
    // Note that in some calendar systems, such as the Hebrew, the number of months may differ between years.
    const numberOfMonths = state.focusedDate.calendar.getMonthsInYear(
      state.focusedDate,
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
      new Intl.DateTimeFormat().resolvedOptions()
        .calendar as CalendarIdentifier,
    );
    const minDate = toCalendar(
      new CalendarDate(new GregorianCalendar(), minYear, 1, 1),
      calendarCurrentUser,
    );
    const maxDate = toCalendar(
      new CalendarDate(new GregorianCalendar(), maxYear, 12, 31),
      calendarCurrentUser,
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
    items: Array<Option>,
  ): UseSelectReturnValue<Option> => {
    return useSelect({
      items,
      itemToString: optionToString,
      onSelectedItemChange: (e: UseSelectStateChange<Option>) => {
        const updatedFocusedDate = state.focusedDate.set({
          [key]: e?.selectedItem?.value,
        });

        /**
         * We need to hide the grid before updated the focused date because if the mouse hovers a cell it will
         * automatically internally call the focusCell method which sets the focused date to the hovered cell date.
         *
         * (Current year = 2024) The steps are:
         * 1 - Select year 2050 in the dropdown.
         * 2 - Hide the dropdown
         * 3 - state.setFocusedDate(2050)
         * 3 - Mouse hovers a cell in the grid before the state takes into account the new focused date ( 2050 ).
         * 4 - focusCell is called with the current year (2024) overriding the previous call with year=2050
         *
         * The resulting bug will be the year 2024 being selected in the grid instead of 2050.
         *
         * So instead why first hide the grid, wait for the state to be updated, set the focused date to 2050, and
         * then show the grid again. This way we will prevent the mouse from hovering a cell before the state is updated.
         */
        setShowGrid(false);
        setTimeout(() => {
          state.setFocusedDate(updatedFocusedDate);
          setTimeout(() => {
            setShowGrid(true);
          });
        });
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
    downshift: UseSelectReturnValue<Option>,
  ) => ({
    ...downshift.getToggleButtonProps(),
    onClick: () => {
      const selectedItem = items.find(
        (item) => item.value === state.focusedDate[key as keyof CalendarDate],
      );
      if (selectedItem) {
        downshift.selectItem(selectedItem);
      }
      downshift.toggleMenu();
    },
    "aria-label": t(
      `components.forms.date_picker.${key}_select_button_aria_label`,
    ),
  });

  return (
    <div className="c__calendar">
      <div
        // We need to remove the id from the calendar when the dropdowns are open to avoid having the following bug:
        // 1 - Open the calendar
        // 2 - Select a start date
        // 3 - Click on the dropdown to select another year
        // 4 - BUG: The calendar closes abruptly.
        //
        // This way caused by this internal call from Spectrum: https://github.com/adobe/react-spectrum/blob/74cac946a8e6c62cd111d062c58626f774372b91/packages/%40react-aria/calendar/src/useRangeCalendar.ts#L52-L60
        //
        // So instead we decided to remove the id of the calendar when the dropdowns are open and add it back when
        // the dropdowns are closed in order to make this condition fail: https://github.com/adobe/react-spectrum/blob/74cac946a8e6c62cd111d062c58626f774372b91/packages/%40react-aria/calendar/src/useRangeCalendar.ts#L55
        // This way the referenced element will never be found.
        ref={!downshiftMonth.isOpen && !downshiftYear.isOpen ? ref : null}
        {...calendarProps}
        id={calendarProps.id}
        className={classNames("c__calendar__wrapper", {
          "c__calendar__wrapper--opened":
            !downshiftMonth.isOpen && !downshiftYear.isOpen,
        })}
      >
        <div className="c__calendar__wrapper__header">
          <div className="c__calendar__wrapper__header__actions">
            <Button
              color="tertiary-text"
              size="small"
              icon={<span className="material-icons">navigate_before</span>}
              {...{
                ...prevButtonOtherProps,
                "aria-label": t(
                  "components.forms.date_picker.previous_month_button_aria_label",
                ),
              }}
              disabled={isPrevButtonDisabled}
              onClick={() => state.focusPreviousSection()}
              type="button"
            />
            <Button
              className="c__calendar__wrapper__header__actions__dropdown"
              color="tertiary-text"
              size="small"
              iconPosition="right"
              icon={<span className="material-icons">arrow_drop_down</span>}
              type="button"
              {...getToggleButtonProps("month", monthItems, downshiftMonth)}
            >
              {selectedMonthItemFormatter.format(
                state.focusedDate.toDate(state.timeZone),
              )}
            </Button>
            <Button
              color="tertiary-text"
              size="small"
              icon={<span className="material-icons">navigate_next</span>}
              type="button"
              {...{
                ...nextButtonOtherProps,
                "aria-label": t(
                  "components.forms.date_picker.next_month_button_aria_label",
                ),
              }}
              disabled={isNextButtonDisabled}
              onClick={() => state.focusNextSection()}
            />
          </div>
          <div className="c__calendar__wrapper__header__actions">
            <Button
              color="tertiary-text"
              size="small"
              icon={<span className="material-icons">navigate_before</span>}
              onClick={() => state.focusPreviousSection(true)}
              disabled={
                !!state.minValue &&
                state.minValue.year > state.focusedDate.add({ years: -1 }).year
              }
              aria-label={t(
                "components.forms.date_picker.previous_year_button_aria_label",
              )}
              type="button"
            />
            <Button
              className="c__calendar__wrapper__header__actions__dropdown"
              color="tertiary-text"
              size="small"
              iconPosition="right"
              icon={<span className="material-icons">arrow_drop_down</span>}
              type="button"
              {...getToggleButtonProps("year", yearItems, downshiftYear)}
            >
              {yearItemsFormatter.format(
                state.focusedDate.toDate(state.timeZone),
              )}
            </Button>
            <Button
              color="tertiary-text"
              size="small"
              icon={<span className="material-icons">navigate_next</span>}
              onClick={() => state.focusNextSection(true)}
              disabled={
                !!state.maxValue &&
                state.maxValue.year < state.focusedDate.add({ years: 1 }).year
              }
              aria-label={t(
                "components.forms.date_picker.next_year_button_aria_label",
              )}
              type="button"
            />
          </div>
        </div>
        {!downshiftMonth.isOpen && !downshiftYear.isOpen && showGrid && (
          <CalendarGrid state={state} />
        )}
      </div>
      <DropdownValues options={monthItems} downShift={downshiftMonth} />
      <DropdownValues options={yearItems} downShift={downshiftYear} />
    </div>
  );
};

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
