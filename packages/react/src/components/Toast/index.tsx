import React, {
  PropsWithChildren,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
} from "react";
import classNames from "classnames";
import isChromatic from "chromatic/isChromatic";
import { Button, ButtonProps } from ":/components/Button";
import { iconFromType, VariantType } from ":/utils/VariantUtils";

export interface ToastProps extends PropsWithChildren {
  duration: number;
  type: VariantType;
  onDelete?: () => void;
  icon?: ReactNode;
  primaryLabel?: string;
  primaryOnClick?: ButtonProps["onClick"];
  primaryProps?: ButtonProps;
  disableAnimate?: boolean;
  actions?: ReactNode;
}

export const Toast = (props: ToastProps) => {
  const [animateDisappear, setAnimateDisappear] = React.useState(false);
  const container = useRef<HTMLDivElement>(null);
  const disappearTimeout = useRef<NodeJS.Timeout>();

  // Register a timeout to remove the toast after the duration.
  useEffect(() => {
    if (props.disableAnimate) {
      return;
    }
    disappearTimeout.current = setTimeout(async () => {
      setAnimateDisappear(true);
      disappearTimeout.current = undefined;
    }, props.duration);
    return () => {
      if (disappearTimeout.current) {
        clearTimeout(disappearTimeout.current);
      }
    };
  }, []);

  const removeAfterAnimation = async () => {
    await Promise.allSettled(
      container.current!.getAnimations().map((animation) => animation.finished),
    );
    props.onDelete?.();
  };

  // Remove the toast after the animation finishes.
  useEffect(() => {
    if (animateDisappear) {
      removeAfterAnimation();
    }
  }, [animateDisappear]);

  return (
    <div
      ref={container}
      className={classNames("c__toast", "c__toast--" + props.type, {
        "c__toast--disappear": animateDisappear,
        "c__toast--no-animate": props.disableAnimate,
      })}
      role="alert"
    >
      <ProgressBar duration={props.duration} />
      <div className="c__toast__content">
        {props.primaryLabel && (
          <div className="c__toast__content__buttons">
            <Button
              color="primary-text"
              onClick={props.primaryOnClick}
              {...props.primaryProps}
            >
              {props.primaryLabel}
            </Button>
          </div>
        )}
        {props.actions}
        <div className="c__toast__content__children">{props.children}</div>
        <ToastIcon {...props} />
      </div>
    </div>
  );
};

export const ToastIcon = ({ type, ...props }: ToastProps) => {
  const icon = useMemo(() => iconFromType(type), [type]);
  if (props.icon) {
    return props.icon;
  }
  if (!icon) {
    return null;
  }
  return (
    <div className="c__toast__icon">
      <span className="material-icons">{icon}</span>
    </div>
  );
};

export const ProgressBar = ({ duration }: { duration: number }) => {
  const content = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isChromatic()) {
      return;
    }
    content.current!.animate([{ width: "0%" }, { width: "100%" }], {
      duration,
      easing: "linear",
    });
  }, []);

  return (
    <div className="c__progress-bar">
      <div className="c__progress-bar__content" ref={content} />
    </div>
  );
};
