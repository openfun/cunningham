import React, { PropsWithChildren, RefObject } from "react";
import classNames from "classnames";
import { useHandleClickOutside } from ":/hooks/useHandleClickOutside";

type PopoverProps = PropsWithChildren & {
  parentRef: RefObject<HTMLDivElement>;
  onClickOutside: () => void;
  borderless?: boolean;
};

export const Popover = ({
  parentRef,
  children,
  onClickOutside,
  borderless = false,
}: PopoverProps) => {
  useHandleClickOutside(parentRef, onClickOutside);

  return (
    <div
      className={classNames("c__popover", {
        "c__popover--borderless": borderless,
      })}
    >
      {children}
    </div>
  );
};
