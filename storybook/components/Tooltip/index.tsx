import React, {
  PropsWithChildren,
  ReactElement,
  ReactNode,
  RefObject,
} from "react";
import { OverlayArrow } from "react-aria-components";
import {
  mergeProps,
  useOverlayPosition,
  useTooltip,
  useTooltipTrigger,
} from "react-aria";
import { useTooltipTriggerState } from "react-stately";
import classNames from "classnames";

const ANIMATION_DURATION = 200;

export interface TooltipProps extends PropsWithChildren {
  placement?: "top" | "bottom" | "left" | "right";
  content: ReactNode;
  closeDelay?: number;
  className?: string;
}

export const Tooltip = ({
  placement = "bottom",
  content,
  closeDelay = 150,
  className,
  ...props
}: TooltipProps) => {
  const ref = React.useRef(null);
  const overlayRef = React.useRef(null);
  const [isExiting, setIsExiting] = React.useState(false);
  const [isEntering, setIsEntering] = React.useState(false);
  const state = useTooltipTriggerState({
    delay: 0,
    closeDelay,
    onOpenChange: (isOpen) => {
      if (isOpen) {
        setIsEntering(true);
        setTimeout(() => {
          setIsEntering(false);
        }, ANIMATION_DURATION);
      } else {
        setIsExiting(true);
        setTimeout(() => {
          setIsExiting(false);
        }, ANIMATION_DURATION);
      }
    },
  });

  // Get props for the trigger and its tooltip
  const useTooltipTriggerRes = useTooltipTrigger({}, state, ref);

  // overlayPosition.placement can be difference than placement, based on available screen space.
  const overlayPosition = useOverlayPosition({
    targetRef: ref,
    overlayRef,
    placement,
    isOpen: state.isOpen,
  });

  const { tooltipProps: tooltipProps2 } = useTooltip(
    useTooltipTriggerRes.tooltipProps,
    state,
  );

  const arrowProps = {
    placement: overlayPosition.placement,
  };

  const showTooltip = state.isOpen || isExiting;

  return (
    <>
      {React.cloneElement(
        React.Children.toArray(props.children)[0] as ReactElement<
          typeof useTooltipTriggerRes.triggerProps & {
            ref: RefObject<ReactElement | null>;
          }
        >,
        {
          ref,
          ...useTooltipTriggerRes.triggerProps,
        },
      )}

      {showTooltip && (
        <span
          className={classNames(
            "c__tooltip",
            {
              "c__tooltip--exiting": isExiting,
              "c__tooltip--entering": isEntering,
            },
            className,
          )}
          data-placement={overlayPosition.placement}
          ref={overlayRef}
          style={{
            ...overlayPosition.overlayProps.style,
          }}
          {...mergeProps(props, tooltipProps2)}
        >
          <OverlayArrow {...arrowProps}>
            <svg width={16} height={16} viewBox="0 0 16 16">
              <path d="M0 0 L8 8 L16 0" />
            </svg>
          </OverlayArrow>
          <span className="c__tooltip__content">{content}</span>
        </span>
      )}
    </>
  );
};
