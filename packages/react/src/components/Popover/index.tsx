import { PropsWithChildren, RefObject } from "react";
import { useHandleClickOutside } from ":/hooks/useHandleClickOutside";

type PopoverProps = PropsWithChildren & {
  parentRef: RefObject<HTMLDivElement>;
  onClickOutside: () => void;
};

export const Popover = ({
  parentRef,
  children,
  onClickOutside,
}: PopoverProps) => {
  useHandleClickOutside(parentRef, onClickOutside);

  return <div className="c__popover">{children}</div>;
};
