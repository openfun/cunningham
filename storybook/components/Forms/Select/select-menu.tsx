import React, { PropsWithChildren } from "react";
import classNames from "classnames";
import { useOverlayPosition } from "react-aria";
import { SelectProps } from ":/components/Forms/Select/index";
import { SelectAuxProps } from ":/components/Forms/Select/mono-common";
import { SelectMultiAuxProps } from ":/components/Forms/Select/multi-common";

export interface SelectDropdownProps extends PropsWithChildren {
  isOpen: boolean;
  selectRef: React.RefObject<HTMLDivElement>;
  menuOptionsStyle?: SelectProps["menuOptionsStyle"];
  downshiftReturn:
    | SelectAuxProps["downshiftReturn"]
    | SelectMultiAuxProps["downshiftReturn"];
}

export const SelectMenu = ({
  isOpen,
  selectRef,
  downshiftReturn,
  menuOptionsStyle,
  children,
}: SelectDropdownProps) => {
  const menuRef = React.useRef<HTMLElement | null>(null);
  const overlayPosition = useOverlayPosition({
    targetRef: selectRef,
    overlayRef: menuRef,
    placement: "bottom",
    isOpen,
    maxHeight: 160,
    shouldUpdatePosition: true,
  });
  const menuProps = downshiftReturn.getMenuProps({
    ref: menuRef,
  });
  return (
    <div
      className={classNames(
        "c__select__menu",
        menuOptionsStyle ? "c__select__menu--" + menuOptionsStyle : "",
        {
          "c__select__menu--opened": isOpen,
        },
      )}
      {...menuProps}
      style={{
        marginLeft: "-4px",
        width: selectRef.current
          ? selectRef.current.getBoundingClientRect().width - 4
          : 0,
        ...overlayPosition.overlayProps.style,
      }}
    >
      {isOpen && children}
    </div>
  );
};
