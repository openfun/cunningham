import { RefObject, useEffect } from "react";

export const useHandleClickOutside = (
  ref: RefObject<HTMLDivElement>,
  onClose: any
) => {
  useEffect(() => {
    const outsideListenerEvent = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      onClose();
    };
    document.addEventListener("click", outsideListenerEvent, true);
    return () =>
      document.removeEventListener("click", outsideListenerEvent, true);
  }, []);
};
