import React, { useRef } from "react";
import {
  AriaDatePickerProps,
  useDateField,
  useDateSegment,
} from "@react-aria/datepicker";
import { useLocale } from "@react-aria/i18n";
import {
  DateFieldState,
  useDateFieldState,
  DateSegment,
} from "@react-stately/datepicker";
import { createCalendar, DateValue } from "@internationalized/date";
import classNames from "classnames";
import { Button } from ":/components/Button";
import { useCunningham } from ":/components/Provider";

interface DateSegmentProps {
  currentSegment: DateSegment;
  previousSegment: DateSegment;
  state: DateFieldState;
}

export const DateSegmentInput = ({
  currentSegment,
  previousSegment,
  state,
}: DateSegmentProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { segmentProps } = useDateSegment(currentSegment, state, ref);
  return (
    <div
      ref={ref}
      {...segmentProps}
      className={classNames("c__date-picker__inner__value__segment", {
        "c__date-picker__inner__value__segment--empty":
          currentSegment.isPlaceholder ||
          (currentSegment.type === "literal" && previousSegment?.isPlaceholder),
      })}
    >
      {currentSegment.text}
    </div>
  );
};

export const DateField = (props: AriaDatePickerProps<DateValue>) => {
  const { locale } = useLocale();
  const state = useDateFieldState({
    ...props,
    locale,
    createCalendar,
  });
  const ref = useRef<HTMLDivElement>(null);
  const { fieldProps } = useDateField(props, state, ref);

  return (
    <div className="c__date-picker__inner__value" {...fieldProps} ref={ref}>
      {state.segments.map((segment, i, segments) => (
        <DateSegmentInput
          key={i}
          currentSegment={segment}
          previousSegment={segments[i - 1]}
          state={state}
        />
      ))}
    </div>
  );
};
