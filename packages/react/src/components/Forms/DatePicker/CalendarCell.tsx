import React, { useRef } from "react";
import classNames from "classnames";
import { useCalendarCell } from "@react-aria/calendar";
import {
  CalendarDate,
  getLocalTimeZone,
  isSameDay,
  isToday,
} from "@internationalized/date";
import { CalendarState, RangeCalendarState } from "@react-stately/calendar";
import { Button } from ":/components/Button";

interface CalendarCellProps {
  state: CalendarState | RangeCalendarState;
  date: CalendarDate;
}

const isRangeCalendar = (object: any): object is RangeCalendarState => {
  return object?.highlightedRange;
};

export const CalendarCell = ({ state, date }: CalendarCellProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const {
    cellProps,
    buttonProps,
    isSelected,
    formattedDate,
    isOutsideVisibleRange,
    isDisabled,
  } = useCalendarCell({ date }, state, ref);

  const isSelectionEnd =
    isRangeCalendar(state) && isSameDay(date, state?.highlightedRange?.end);

  const isSelectionStart =
    isRangeCalendar(state) && isSameDay(date, state?.highlightedRange?.start);

  const isWithinHighlightedRange =
    isRangeCalendar(state) &&
    state?.highlightedRange?.start <= date &&
    state?.highlightedRange?.end >= date;

  return (
    <td {...cellProps}>
      <div
        hidden={isOutsideVisibleRange}
        className={classNames({
          "c__calendar__wrapper__grid__week-row__background--range--disabled":
            isWithinHighlightedRange && isDisabled,
          "c__calendar__wrapper__grid__week-row__background--range":
            isWithinHighlightedRange,
          "c__calendar__wrapper__grid__week-row__background--range--end":
            isSelectionEnd,
          "c__calendar__wrapper__grid__week-row__background--range--start":
            isSelectionStart,
        })}
      >
        <Button
          size="small"
          color={
            (
              isRangeCalendar(state)
                ? isSelectionStart || isSelectionEnd
                : isSelected
            )
              ? "primary"
              : "tertiary"
          }
          className={classNames(
            "c__calendar__wrapper__grid__week-row__button",
            {
              "c__calendar__wrapper__grid__week-row__button--selected":
                isSelected,
              "c__calendar__wrapper__grid__week-row__button--today": isToday(
                date,
                getLocalTimeZone()
              ),
            }
          )}
          disabled={isDisabled}
          {...buttonProps}
          ref={ref}
        >
          {formattedDate}
        </Button>
      </div>
    </td>
  );
};
