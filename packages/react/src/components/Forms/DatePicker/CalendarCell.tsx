import React, { useRef } from "react";
import classNames from "classnames";
import { useCalendarCell } from "@react-aria/calendar";
import {
  CalendarDate,
  getLocalTimeZone,
  isToday,
} from "@internationalized/date";
import { CalendarState } from "@react-stately/calendar";
import { Button } from ":/components/Button";

interface CalendarCellProps {
  state: CalendarState;
  date: CalendarDate;
}

export const CalendarCell = ({ state, date }: CalendarCellProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const { cellProps, buttonProps, isSelected, formattedDate } = useCalendarCell(
    { date },
    state,
    ref
  );
  return (
    <td {...cellProps}>
      <Button
        size="small"
        color={isSelected ? "primary" : "tertiary"}
        className={classNames("c__calendar__wrapper__grid__week-row__button", {
          "c__calendar__wrapper__grid__week-row__button--selected": isSelected,
          "c__calendar__wrapper__grid__week-row__button--today": isToday(
            date,
            getLocalTimeZone()
          ),
        })}
        disabled={!!cellProps["aria-disabled"]}
        {...buttonProps}
        ref={ref}
      >
        {formattedDate}
      </Button>
    </td>
  );
};
