import React, { useEffect, useMemo, useRef } from "react";
import {
  CalendarDate,
  createCalendar,
  DateValue,
  GregorianCalendar,
  toCalendar,
} from "@internationalized/date";
import { useDateFormatter, useLocale } from "@react-aria/i18n";
import { useCalendarState } from "@react-stately/calendar";
import { useCalendar } from "@react-aria/calendar";
import { useSelect, UseSelectStateChange } from "downshift";
import classNames from "classnames";
import { CalendarProps } from "react-aria";
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
  downShift: any;
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

interface CalendarSubProps extends CalendarProps<DateValue> {
  minYear?: number;
  maxYear?: number;
}

export const Calendar = ({
  minYear = 1800, // in gregorian calendar.
  maxYear = 2050, // in gregorian calendar.
  ...props
}: CalendarSubProps) => {
  const { locale } = useLocale();

  const state = useCalendarState({
    ...props,
    locale,
    createCalendar,
  });

  const ref = useRef(null);
  const { calendarProps, prevButtonProps, nextButtonProps } = useCalendar(
    props,
    state
  );

  const monthFormatter = useDateFormatter({
    month: "short",
    timeZone: state.timeZone,
  });

  const yearFormatter = useDateFormatter({
    year: "numeric",
    timeZone: state.timeZone,
  });

  const monthItems = useMemo(() => {
    // Note that in some calendar systems, such as the Hebrew, the number of months may differ between years.
    const numberOfMonths = state.focusedDate.calendar.getMonthsInYear(
      state.focusedDate
    );
    return range(1, numberOfMonths).map((monthNumber) => {
      const date = state.focusedDate.set({ month: monthNumber });
      return {
        value: monthNumber,
        label: monthFormatter.format(date.toDate(state.timeZone)),
        disabled: state.isInvalid(date),
      };
    });
  }, [state.maxValue, state.minValue, state.focusedDate.year]);

  const downshiftMonth = useSelect({
    items: monthItems,
    itemToString: optionToString,
    onSelectedItemChange: (e: UseSelectStateChange<Option>) => {
      const updatedFocusedDate = state.focusedDate.set({
        month: e?.selectedItem?.value,
      });
      state.setFocusedDate(updatedFocusedDate);
    },
  });

  const yearItems = useMemo(() => {
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
        label: yearFormatter.format(date.toDate(state.timeZone)),
        disabled:
          (!!state.minValue && state.minValue.year > yearNumber) ||
          (!!state.maxValue && state.maxValue.year < yearNumber),
      };
    });
  }, [state.focusedDate, state.timeZone, state.maxValue, state.minValue]);

  const downshiftYear = useSelect({
    items: yearItems,
    itemToString: optionToString,
    onSelectedItemChange: (e: UseSelectStateChange<Option>) => {
      const updatedFocusedDate = state.focusedDate.set({
        year: e?.selectedItem?.value,
      });
      state.setFocusedDate(updatedFocusedDate);
    },
    initialSelectedItem: yearItems.find(
      (item) => item.value === state.focusedDate.year
    ),
  });

  useEffect(() => {
    if (downshiftMonth.selectedItem?.value === state.focusedDate.month) {
      return;
    }
    const focusedMonth = monthItems.find(
      (item) => item.value === state.focusedDate.month
    );
    if (focusedMonth) {
      downshiftMonth.selectItem(focusedMonth);
    }
  }, [state.focusedDate.month]);

  useEffect(() => {
    if (downshiftYear.selectedItem?.value === state.focusedDate.year) {
      return;
    }
    const focusedYear = yearItems.find(
      (item) => item.value === state.focusedDate.year
    );
    if (focusedYear) {
      downshiftYear.selectItem(focusedYear);
    }
  }, [state.focusedDate.year]);
  const { t } = useCunningham();

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
                ...prevButtonProps,
                "aria-label": t(
                  "components.forms.date_picker.previous_month_button_aria_label"
                ),
              }}
              disabled={prevButtonProps.isDisabled}
              onClick={() => state.focusPreviousSection()}
            />
            <Button
              color="tertiary"
              size="small"
              iconPosition="right"
              icon={<span className="material-icons">arrow_drop_down</span>}
              {...downshiftMonth.getToggleButtonProps()}
              aria-label={t(
                "components.forms.date_picker.month_select_button_aria_label"
              )}
            >
              {monthFormatter.format(state.focusedDate.toDate(state.timeZone))}
            </Button>
            <Button
              color="tertiary"
              size="small"
              icon={<span className="material-icons">navigate_next</span>}
              {...{
                ...nextButtonProps,
                "aria-label": t(
                  "components.forms.date_picker.next_month_button_aria_label"
                ),
              }}
              disabled={nextButtonProps.isDisabled}
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
                state.minValue.year > state.focusedDate.add({ years: -1 }).year
              }
              aria-label={t(
                "components.forms.date_picker.previous_year_button_aria_label"
              )}
            />
            <Button
              color="tertiary"
              size="small"
              iconPosition="right"
              icon={<span className="material-icons">arrow_drop_down</span>}
              {...downshiftYear.getToggleButtonProps()}
              aria-label={t(
                "components.forms.date_picker.year_select_button_aria_label"
              )}
            >
              {yearFormatter.format(state.focusedDate.toDate(state.timeZone))}
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
};
