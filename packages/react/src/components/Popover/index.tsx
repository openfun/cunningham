import React, {
  PropsWithChildren,
  RefObject,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import classNames from "classnames";
import { useHandleClickOutside } from ":/hooks/useHandleClickOutside";

export type PopoverProps = PropsWithChildren & {
  parentRef: RefObject<HTMLDivElement | null>;
  onClickOutside: () => void;
  borderless?: boolean;
};

export const Popover = ({
  parentRef,
  children,
  onClickOutside,
  borderless = false,
}: PopoverProps) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  useHandleClickOutside(parentRef, onClickOutside);
  const timeout = useRef<ReturnType<typeof setTimeout>>(null);
  const [topPosition, setTopPosition] = useState<number | undefined>();

  useLayoutEffect(() => {
    const setPopoverTopPosition = () => {
      if (!parentRef.current || !popoverRef.current) return;

      const parentBounds = parentRef.current.getBoundingClientRect();
      const popoverBounds = popoverRef.current.getBoundingClientRect();

      const hasNotEnoughBottomPlace =
        window.innerHeight - parentBounds.bottom < popoverBounds.height;

      const hasEnoughTopPlace = parentBounds.top >= popoverBounds.height;

      if (hasNotEnoughBottomPlace && hasEnoughTopPlace) {
        setTopPosition(-popoverBounds.height);
      } else {
        setTopPosition(undefined);
      }
    };

    const handleWindowResize = () => {
      if (timeout.current) clearTimeout(timeout.current);
      timeout.current = setTimeout(setPopoverTopPosition, 1000 / 30);
    };

    window.addEventListener("resize", handleWindowResize);
    setPopoverTopPosition();

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, []);

  return (
    <div
      ref={popoverRef}
      className={classNames("c__popover", {
        "c__popover--borderless": borderless,
      })}
      style={{
        top: topPosition,
      }}
      role="dialog"
    >
      {children}
    </div>
  );
};
