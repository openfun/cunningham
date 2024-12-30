import { RefObject, useEffect } from "react";

export const useHandleClickOutside = (
  ref: RefObject<HTMLDivElement | null>,
  onClickOutside: any,
) => {
  useEffect(() => {
    const outsideListenerEvent = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      onClickOutside();
    };
    document.addEventListener("click", outsideListenerEvent, true);
    return () =>
      document.removeEventListener("click", outsideListenerEvent, true);
  }, []);
};
