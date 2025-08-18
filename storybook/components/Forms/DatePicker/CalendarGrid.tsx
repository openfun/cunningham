import React, { useMemo } from "react";
import { useDateFormatter, useLocale } from "@react-aria/i18n";
import {
  endOfMonth,
  getWeeksInMonth,
  startOfWeek,
  today,
} from "@internationalized/date";
import { useCalendarGrid } from "react-aria";
import { CalendarState, RangeCalendarState } from "@react-stately/calendar";
import { CalendarCell } from ":/components/Forms/DatePicker/CalendarCell";
import { range } from ":/utils";

interface CalendarGridProps {
  state: CalendarState | RangeCalendarState;
  defaultDaysInWeek?: number;
}

export const CalendarGrid = ({
  state,
  defaultDaysInWeek = 7,
}: CalendarGridProps) => {
  const { locale } = useLocale();

  const weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale);

  const { gridProps, headerProps } = useCalendarGrid(
    {
      startDate: state.visibleRange.start,
      endDate: endOfMonth(state.visibleRange.start),
    },
    state,
  );

  const shortDayFormatter = useDateFormatter({
    weekday: "short",
    timeZone: state.timeZone,
  });

  const weekDays = useMemo(() => {
    const weekStart = startOfWeek(today(state.timeZone), locale);
    return range(0, defaultDaysInWeek - 1).map((index) => {
      const dateDay = weekStart.add({ days: index }).toDate(state.timeZone);
      return shortDayFormatter.format(dateDay);
    });
  }, [locale, state.timeZone, shortDayFormatter]);

  return (
    <table {...gridProps} className="c__calendar__wrapper__grid">
      <thead {...headerProps}>
        <tr className="c__calendar__wrapper__grid__header-row">
          {weekDays.map((day, index) => (
            <th key={`${day}${index}`}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {range(0, weeksInMonth - 1).map((weekIndex) => (
          <tr key={weekIndex} className="c__calendar__wrapper__grid__week-row">
            {state
              .getDatesInWeek(weekIndex)
              .map(
                (date, i) =>
                  date && <CalendarCell key={i} state={state} date={date} />,
              )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
